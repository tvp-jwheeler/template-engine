const express = require('express');
var Handlebars = require('handlebars');
var bodyParser = require('body-parser');
var fs = require('fs');

const port = 3000;


/****** HELPER METHODS *******/



/****** API ENDPOINTS ********/
const app = express();

app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'));

app.put('/api/render/*', function (req, res) {
    const page_data = req.body;
    const template_path = req.params[0];
    fs.readFile('./templates/' + template_path, {encoding: 'utf-8'}, function(err, contents) {
        var template = Handlebars.compile(contents);
        var result = template(page_data);
        res.send(result);
    });
});

app.get('');

app.listen(port, () => console.log(`Example app listening on port ${port}!`))