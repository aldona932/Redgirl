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

    return {
        flags,
        score: toxicityCount // Simple count
    };
};

module.exports = { analyzeToxicity };
