const express = require('express');
const router = express.Router();
const modelKnights = require('../model/knights');

// CRUD

// Create
router.post('/', modelKnights.createKnight);

// Read
router.get('/', modelKnights.getKnights);
router.get('/:id', modelKnights.getKnightsByID);

// Update
router.put('/:id', modelKnights.updateKnight);

// Delete
router.delete('/:id', modelKnights.deleteKnightById);

module.exports = router;