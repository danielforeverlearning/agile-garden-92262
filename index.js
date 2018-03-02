var http          = require('http');
var formidable    = require('formidable');
var fs            = require('fs');
var rl            = require('readline');
var events        = require('events');
var eventemitter  = new events.EventEmitter();
var myfilename    = "";
var mylines       = [];
const PORT        = process.env.PORT || 5000


http.createServer(function (req, res) {

  if (req.url == '/aftersubmit') {
    var form = new formidable.IncomingForm();

    //***** do not get confused these console.log are server-side *****
    form.parse(req)
        .on('field', function(name,field) {
            console.log('Got a field:', name);
            res.write('<p>field name: ' + name + '</p>');
            res.write('<p>field: ' + field + '</p>');
        })
        .on('error', function(err) {
            console.log('Got error: ');
            console.log(err);
            res.write('<p>got an error check console log</p>');
            res.end();
        })
        .on('end', function() {
            console.log('Got end');
            res.write('<p>done</p>');
            res.end();
        });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="aftersubmit" method="post" enctype="multipart/form-data">');
    res.write('<label for="cardname_id">cardname: </label>');
    res.write('<input type="text" name="cardname_name" id="cardname_id"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(PORT); 


