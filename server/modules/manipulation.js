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

    return {
        flags,
        score: matchCount
    };
};

module.exports = { analyzeManipulation };
