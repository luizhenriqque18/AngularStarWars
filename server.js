const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/AngularStarWars'));

app.get('/', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/AngularStarWars/index.html'));
});

app.listen(process.env.PORT || 8080);
