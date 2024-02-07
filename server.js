const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;

app.use(express.urlencoded({
  extended:true
}));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
  res.render('index.njk');
});

app.get('/page2', (req, res) => {
    res.render('page2.njk');
  });

  app.get('/form', (req, res) => {
    console.log (req.query)
    res.render('form.njk', req.query);
  });

  app.get('/circle', (req, res) => {
    console.log(req.query);
    res.render('circle.njk');
  });

  app.post('/circle', (req, res) => {
    let area = Math.PI * req.body.radius * req.body.radius;
    let circumference = Math.PI * req.body.radius * 2;
    let volume = Math.PI * req.body.radius * req.body.radius * req.body.radius * 4/3;
    res.render('circleAnswer.njk', {r: req.body.radius, a: area, c: circumference, v: volume})
});

const movieController = require('./src/movieController.js');
app.use('/movies', movieController);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});