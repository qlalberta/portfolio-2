'use strict';

const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('.'));

app.listen(PORT, function() {
  console.log(`App is listening on: ${PORT}`);
})
