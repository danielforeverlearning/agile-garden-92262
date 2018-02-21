var http = require('http');
const PORT = process.env.PORT || 5000

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World i still need Jesus oh thank you for Your blood!');
}).listen(PORT, ()=> console.log(`Listening on ${ PORT }`));
