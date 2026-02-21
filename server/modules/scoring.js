const calculateScore = (categories) => {
    let score = 0;

    // Weightings
    score += categories.toxicity * 15;
    score += categories.manipulation * 20;
    score += categories.negativeSentiment * 5;

    // Cap at 100
    return Math.min(score, 100);
};

module.exports = { calculateScore };
