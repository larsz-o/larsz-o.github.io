
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routers
const contactRouter = require('./routes/contact.router'); 

//Routes
app.use('/contact', contactRouter); 

// Serve static files
app.use(express.static('build'));
app.get('/.well-known/acme-challenge//.well-known/acme-challenge/', (req, res)=>{
  res.send('ygaJgbbvivvP7KK8DCAnoiQUqynQteP46abOUdXVhxY.VjaiHBWQIqpCzLM13qdgpkm_QDC3R3fD_WV4AC2kFr4');
 })
// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
