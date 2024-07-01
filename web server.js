let http = require('http');
let server=http.createServer(function(request,response){
    let body='Hello World';
    response.writeHead(200,{
        'content-length':body.length,
        'content-type':'text/plain'
        
    });
    response.end(body);
});
server.listen(3000);
