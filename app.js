const express = require('express');
const app = express ();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response ) {
    response.sendFile(__dirname + '/public/index.html');

});

app.listen(port, () => {
    console.log('Server listening on port' + port);
})