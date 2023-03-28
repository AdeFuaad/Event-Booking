const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const applyMiddleware = (app) => {
  app.use(express.json()); // Parse JSON request bodies
  app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
  app.use(helmet()); // Set security-related HTTP headers
  app.use(cors()); // Enable Cross-Origin Resource Sharing
  app.use(morgan('combined')); // Log HTTP requests
};

module.exports = applyMiddleware;
