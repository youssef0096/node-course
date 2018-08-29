const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;


var app = express();
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    //res.send('hello');
    res.send(JSON.stringify({
        name: 'joe',
        age: 16
    }));
});

app.get('/kos/kaskos', (req, res) => {
    res.render('about.hbs', { KASKOS: req.params.kaskos });
})
app.listen(port, ()=>{
	console.log(`server is running up on port ${port}`)
});