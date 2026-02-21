// Client-side execution instead of actual fetch
async function analyzeText(text) {
    // Simulate network delay for UI effect
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
        if (!window.processAnalysis) throw new Error("Analyzer script not loaded.");
        return window.processAnalysis(text);
    } catch (error) {
        console.error("Analysis Error:", error);
        throw error;
    }
}
