document.addEventListener('DOMContentLoaded', () => {
    const inputArea = document.getElementById('chat-input');
    const analyzeBtn = document.getElementById('analyze-btn');
    const resetBtn = document.getElementById('reset-btn');
    const fileUpload = document.getElementById('file-upload');

    analyzeBtn.addEventListener('click', async () => {
        const text = inputArea.value.trim();
        if (!text) {
            alert('Please enter or paste chat text to analyze.');
            return;
        }

        showLoading(true);

        try {
            const result = await analyzeText(text);

            // Render UI
            renderCircle(result.riskScore);
            renderStats(result.categories);
            renderSentiment(result.sentiment);
            renderSuggestions(result.suggestions);
            renderHighlightedText(text, result.flags);

            showLoading(false);
            showResults();

            // Smooth scroll to results
            document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });

        } catch (error) {
            showLoading(false);
            alert('Failed to analyze the text. Check the console for more details.');
        }
    });

    resetBtn.addEventListener('click', () => {
        resetUI();
    });

    fileUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            inputArea.value = event.target.result;
        };
        reader.readAsText(file);
    });
});
