const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 8080;

//HTTP request looger
app.use(morgan('tiny'));

app.get('/api', (req, res) => {
  const data = {
    userName: 'madhurgang',
    age: 25
  };
  res.json(data);
});

app.get('/api/name', (req, res) => {
  const data = {
    name: 'madhur gangwani',
    age: 25
  };
  res.json(data);
});

app.listen(PORT, console.log(`server is starting at ${PORT}`));