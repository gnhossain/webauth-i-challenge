const express = require('express');

const configureMiddleware = require('./api/configure-middleware');
const server = express();
const apiRouter = require('./api/api-router')

configureMiddleware(server);
server.use('/api', apiRouter);

const PORT = process.env.PORT || 5005;

server.listen(PORT, () => console.log(`\n** Running on port: ${PORT} **\n`));
