const express = require('express');
const app = express();

function log(message) {
  const logLevel = 'debug';
  const logger = new Logger(logLevel);
  logger.log(message);
}

// Example usage:
log('Hello, World!');