// Basic security middleware for input sanitization
const sanitizeInput = (req, res, next) => {
    if (req.body && typeof req.body.text === 'string') {
        // Strip basic HTML tags to prevent XSS
        req.body.text = req.body.text.replace(/<[^>]*>?/gm, '');
    }
    next();
};

module.exports = { sanitizeInput };
