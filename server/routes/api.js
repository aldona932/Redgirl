const express = require('express');
const router = express.Router();
const analyzeController = require('../controllers/analyzeController');
const { sanitizeInput } = require('../middleware/security');

// POST /api/analyze
// Expects: { text: "chat string" }
router.post('/analyze', sanitizeInput, analyzeController.analyzeChat);

module.exports = router;
