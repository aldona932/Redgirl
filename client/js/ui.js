// Circle SVG colors
const getColorForScore = (score) => {
    if (score < 20) return '#10b981'; // Green
    if (score < 50) return '#f59e0b'; // Yellow
    if (score < 80) return '#ef4444'; // Red
    return '#991b1b'; // Dark Red
};

const getRiskLabel = (score) => {
    if (score < 20) return 'Low Risk';
    if (score < 50) return 'Moderate Risk';
    if (score < 80) return 'High Risk';
    return 'Severe Risk';
};

const renderCircle = (score) => {
    const circle = document.getElementById('score-circle-path');
    const color = getColorForScore(score);

    circle.style.stroke = color;
    circle.style.strokeDasharray = `${score}, 100`;

    document.getElementById('risk-score-val').innerText = Math.round(score);
    document.getElementById('risk-score-val').style.color = color;

    document.getElementById('risk-label').innerText = getRiskLabel(score);
    document.getElementById('risk-label').style.color = color;
};

const renderStats = (categories) => {
    const list = document.getElementById('categories-list');
    list.innerHTML = `
        <li><span>Toxicity Score</span> <strong>${categories.toxicity}</strong></li>
        <li><span>Manipulation Tries</span> <strong>${categories.manipulation}</strong></li>
        <li><span>Negative Sentences</span> <strong>${categories.negativeSentiment}</strong></li>
    `;
};

const renderSuggestions = (suggestions) => {
    const list = document.getElementById('suggestions-list');
    list.innerHTML = suggestions.map(s => `<li>${s}</li>`).join('');
};

const renderSentiment = (sentiment) => {
    const indicator = document.getElementById('sentiment-indicator');
    const span = indicator.querySelector('span');
    span.innerText = sentiment.charAt(0).toUpperCase() + sentiment.slice(1);

    if (sentiment === 'positive') span.style.color = '#10b981';
    else if (sentiment === 'negative') span.style.color = '#ef4444';
    else span.style.color = '#94a3b8';
};

const renderHighlightedText = (originalText, flags) => {
    const container = document.getElementById('highlighted-text');

    // Simple naive highlighting: wait, we should escape HTML first to prevent XSS.
    let safeText = originalText
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // Replace flags with spanned highlights
    // Sort flags by length descending to prevent partial match overwrites
    const sortedFlags = [...flags].sort((a, b) => b.match.length - a.match.length);

    sortedFlags.forEach(flag => {
        // Create regex for the exact match, case insensitive
        const regex = new RegExp(`\\b(${flag.match})\\b`, 'gi');
        safeText = safeText.replace(regex, `<span class="flag-${flag.type}" title="${flag.description}">$1</span>`);
    });

    // Convert newlines to breaks
    container.innerHTML = safeText.replace(/\n/g, '<br>');
};

const showLoading = (isLoading) => {
    const loading = document.getElementById('loading');
    const results = document.getElementById('results-section');
    const btn = document.getElementById('analyze-btn');

    if (isLoading) {
        loading.classList.remove('hidden');
        results.classList.add('hidden');
        btn.disabled = true;
    } else {
        loading.classList.add('hidden');
        btn.disabled = false;
    }
};

const showResults = () => {
    document.getElementById('results-section').classList.remove('hidden');
};

const resetUI = () => {
    document.getElementById('chat-input').value = '';
    document.getElementById('results-section').classList.add('hidden');
};
