// Rule-based dictionary for toxicity
const toxicKeywords = ['stupid', 'idiot', 'shut up', 'dumb', 'loser', 'hate', 'trash'];

const analyzeToxicity = (sentences) => {
    const flags = [];
    let toxicityCount = 0;

    sentences.forEach(sentence => {
        const lowerSent = sentence.toLowerCase();
        toxicKeywords.forEach(keyword => {
            if (lowerSent.includes(keyword)) {
                flags.push({
                    phrase: sentence,
                    match: keyword,
                    type: 'toxicity',
                    description: `Found toxic or aggressive language: "${keyword}"`
                });
                toxicityCount++;
            }
        });
    });

    return { flags, score: toxicityCount };
};

// Rule-based gaslighting/manipulation phrases
const manipulationPhrases = [
    'you are crazy', 'you always do this', 'you never listen',
    "it's your fault", 'you made me do this', "i was just joking",
    "you're overreacting", "stop being so sensitive", "nobody else thinks that"
];

const analyzeManipulation = (sentences) => {
    const flags = [];
    let matchCount = 0;

    sentences.forEach(sentence => {
        const lowerSent = sentence.toLowerCase();
        manipulationPhrases.forEach(phrase => {
            if (lowerSent.includes(phrase)) {
                flags.push({
                    phrase: sentence,
                    match: phrase,
                    type: 'manipulation',
                    description: `Potential gaslighting or manipulation detected: "${phrase}"`
                });
                matchCount++;
            }
        });
    });

    return { flags, score: matchCount };
};

const positiveWords = ['good', 'great', 'awesome', 'love', 'happy', 'perfect', 'thanks', 'cool'];
const negativeWords = ['bad', 'sad', 'angry', 'upset', 'terrible', 'worst', 'annoying', 'hate'];

const analyzeSentiment = (sentences) => {
    let positiveCount = 0;
    let negativeCount = 0;

    sentences.forEach(sentence => {
        const words = sentence.toLowerCase().match(/\b\w+\b/g) || [];
        words.forEach(word => {
            if (positiveWords.includes(word)) positiveCount++;
            if (negativeWords.includes(word)) negativeCount++;
        });
    });

    let overall = 'neutral';
    if (positiveCount > negativeCount) overall = 'positive';
    else if (negativeCount > positiveCount) overall = 'negative';

    return { positiveCount, negativeCount, overall };
};

const calculateScore = (categories) => {
    let score = 0;
    score += categories.toxicity * 15;
    score += categories.manipulation * 20;
    score += categories.negativeSentiment * 5;
    return Math.min(score, 100);
};

const generateSuggestions = (riskScore, categories) => {
    const suggestions = [];
    if (riskScore === 0) {
        suggestions.push("The conversation appears to be generally safe and neutral/positive.");
        return suggestions;
    }
    if (categories.toxicity > 0) {
        suggestions.push("Toxic language was detected. Consider setting clear boundaries or stepping away from the conversation.");
    }
    if (categories.manipulation > 0) {
        suggestions.push("Signs of potential manipulation or gaslighting were found. Trust your own memory and feelings. Seek a second opinion from a trusted friend.");
    }
    if (riskScore > 50) {
        suggestions.push("High risk score. This conversation is showing multiple red flags. Prioritize your mental health and consider limiting contact.");
    }
    if (categories.negativeSentiment > 3) {
        suggestions.push("The overall sentiment of this conversation is quite negative, which can be draining.");
    }
    return suggestions;
};

const splitSentences = (text) => {
    if (!text) return [];
    return text.match(/[^.!?]+[.!?]+[\])'"`’”]*|.+/g)?.map(s => s.trim()).filter(s => s.length > 0) || [];
};

// Main processor function attached to window
window.processAnalysis = (text) => {
    const sentences = splitSentences(text);
    const toxicityRes = analyzeToxicity(sentences);
    const sentimentRes = analyzeSentiment(sentences);
    const manipulationRes = analyzeManipulation(sentences);

    const allFlags = [...toxicityRes.flags, ...manipulationRes.flags];
    const categories = {
        toxicity: toxicityRes.score,
        manipulation: manipulationRes.score,
        negativeSentiment: sentimentRes.negativeCount
    };

    const riskScore = calculateScore(categories);
    const suggestions = generateSuggestions(riskScore, categories);

    return {
        riskScore,
        flags: allFlags,
        categories,
        suggestions,
        sentiment: sentimentRes.overall
    };
};
