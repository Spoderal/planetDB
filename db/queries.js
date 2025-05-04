const pool = require('./index.js'); // Import the pool to connect to the database

async function getAllPlanets() {
  const result = await pool.query('SELECT * FROM planets ORDER BY id ASC '); // Fetch all planets from the database
  return result.rows;
}

async function getPlanetById(id) {
  const result = await pool.query('SELECT * FROM planets WHERE id = $1', [id]); // Fetch a planet by its ID to display its details
  return result.rows[0];
}

module.exports = {
  getAllPlanets,
  getPlanetById,
};
