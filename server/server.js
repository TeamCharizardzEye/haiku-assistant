const express = require('express');
const app = express();
const path = require('path');

// Routers
const authRouter = require('./routers/authRouter');
const dictRouter = require('./routers/dictRouter');
const gifsRouter = require('./routers/gifsRouter');
const haikuRouter = require('./routers/haikuRouter');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/auth', authRouter);
app.use('/dict', dictRouter);
app.use('/gifs', gifsRouter);
app.use('/haiku', haikuRouter);

// Main page
app.use('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('/build', express.static(path.join(__dirname, '../build/')));

// 404 handler
app.use((req, res, next) => {
  res.status(404).send('404 file not found');
});

// Global 500 error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };
  const errorObj = Object.assign(defaultError, err);
  console.log(errorObj.log);
  res.status(errorObj.status).send(JSON.stringify(errorObj.message));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
