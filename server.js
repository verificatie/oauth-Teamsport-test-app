const express = require('express');
const app = express();

const nav = require('./components/nav');
const footer = require('./components/footer');
const profData = require('./components/prof_data');
const header = require('./components/header'); 
const apiLinks = require('./api/api_links');
const oauthButton = require('./verificatie_app/oauth');
const pbiPage = require('./verificatie_app/pbi'); 
const alert = require('./api/alert');

app.use('/api', express.static('api'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      ${apiLinks()}
    </head>
    <body>
      ${nav(true, true)}
      <main>
        <h1>${alert()}</h1>
        <section>
          <!-- Voeg hier andere content toe als nodig -->
        </section>
      </main>
      ${footer()}
    </body>
    </html>
  `);
});

app.get('/pbi', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      ${apiLinks()}
    </head>
    <body>
      ${nav(false, false)} <!-- OAuth-knop en header worden niet weergegeven -->
      <main>
        ${pbiPage()} <!-- Alleen de inhoud van pbi.js wordt hier weergegeven -->
      </main>
      ${footer()}
    </body>
    </html>
  `);
});

app.get('/log', (req, res) => {
  res.send(logPage());
});

module.exports = app;
