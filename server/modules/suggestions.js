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

module.exports = { generateSuggestions };
