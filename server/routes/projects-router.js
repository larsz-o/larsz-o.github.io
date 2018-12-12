const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const query = `SELECT * FROM "projects";`; 
    pool.query(query).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error getting projects', error);
        res.sendStatus(500); 
    })
})
router.get('/technologies', (req, res) => {
    const query = `SELECT * FROM "technologies";`; 
    pool.query(query).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error getting technologies', error);
        res.sendStatus(500); 
    })
})
module.exports = router;