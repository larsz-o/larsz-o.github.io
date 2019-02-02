
const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('prerender-node'));

//Routes
app.get('/.well-known/acme-challenge//.well-known/acme-challenge/Q3H3TlO3Ziyf4q-YafkYFYJRuTXKqg9nYb3bPq_ccF8.VjaiHBWQIqpCzLM13qdgpkm_QDC3R3fD_WV4AC2kFr4', (req, res)=>{
  res.send('Q3H3TlO3Ziyf4q-YafkYFYJRuTXKqg9nYb3bPq_ccF8.VjaiHBWQIqpCzLM13qdgpkm_QDC3R3fD_WV4AC2kFr4');
 })
 // security certificate

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
