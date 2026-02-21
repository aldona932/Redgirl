const { analyzeToxicity } = require('../modules/toxicity');
const { analyzeSentiment } = require('../modules/sentiment');
const { analyzeManipulation } = require('../modules/manipulation');
const { calculateScore } = require('../modules/scoring');
const { generateSuggestions } = require('../modules/suggestions');
const { splitSentences } = require('../utils/textParser');

const analyzeChat = (req, res) => {
    try {
        const { text } = req.body;

        if (!text || typeof text !== 'string' || text.trim() === '') {
            return res.status(400).json({ error: 'Text input is required' });
        }

        const sentences = splitSentences(text);

        const toxicityRes = analyzeToxicity(sentences);
        const sentimentRes = analyzeSentiment(sentences);
        const manipulationRes = analyzeManipulation(sentences);

        // Aggregate flags and categories
        const allFlags = [...toxicityRes.flags, ...manipulationRes.flags];
        const categories = {
            toxicity: toxicityRes.score,
            manipulation: manipulationRes.score,
            negativeSentiment: sentimentRes.negativeCount
        };

        const riskScore = calculateScore(categories);
        const suggestions = generateSuggestions(riskScore, categories);

        const response = {
            riskScore,
            flags: allFlags,
            categories,
            suggestions,
            sentiment: sentimentRes.overall
        };

        res.json(response);

    } catch (error) {
        console.error('Analysis error:', error);
        res.status(500).json({ error: 'Failed to analyze chat' });
    }
};

module.exports = { analyzeChat };
