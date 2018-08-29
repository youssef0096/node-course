const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;


var app = express();
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('home.hbs');
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs');
});

app.get('/kos/:id', (req, res) => {
    res.render('about.hbs', { KASKOS: req.params.id });
})
app.listen(port, () => {
    console.log(`server is running up on port ${port}`)
});