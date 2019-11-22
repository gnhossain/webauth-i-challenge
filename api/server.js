const express = require('express');
const configureMiddleware = require('./configure-middleware.js');

const session = require("express-session"); // 1: npm i express-session
const KnexSessionStorage = require("connect-session-knex")(session); // <<<<<< for storing sessions in db

const knexConnection = require('../database/dbConfig');
const sessionConfiguration = {
    name: 'monkey',
    secret: process.env.COOKIE_SECRET || "is it secret? is it safe?",
    cookie: {
        maxAge: 1000 * 60 * 60, // valid for 1 hour (in milliseconds)
        secure: process.env.NODE_ENV === "development" ? false : true, // do we send cookie over https only?
        httpOnly: true // prevent client javascript code from accessing the cookie
      },
      resave: false, // save sessions even when they have not changed
      saveUninitialized: true, // read about it on the docs to respect GDPR
      store: new KnexSessionStorage({
        knex: knexConnection,
        clearInterval: 1000 * 60 * 10, // delete expired sessions every 10 minutes
        tablename: "user_sessions",
        sidfieldname: "id",
        createtable: true
      })
    };

const apiRouter = require('./api-router');
const server = express();
configureMiddleware(server);
server.use(session(sessionConfiguration));





server.use('/api', apiRouter);


module.exports = server;