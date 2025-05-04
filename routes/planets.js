const express = require('express');
const router = express.Router();
const db = require('../db/queries');

// GET all planets
router.get('/', async (req, res) => {
  try {
    const planets = await db.getAllPlanets();
    res.json(planets);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch planets' });
  }
});

// GET a planet by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const planet = await db.getPlanetById(id);
    if (!planet) return res.status(404).send({ error: 'Planet not found' });
    res.json(planet);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
