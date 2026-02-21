const splitSentences = (text) => {
    if (!text) return [];
    // Simple regex to split by ., !, or ?
    return text.match(/[^.!?]+[.!?]+[\])'"`’”]*|.+/g)?.map(s => s.trim()).filter(s => s.length > 0) || [];
};

module.exports = { splitSentences };
