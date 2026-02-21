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

module.exports = { analyzeSentiment };
