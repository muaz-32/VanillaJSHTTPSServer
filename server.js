const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

let inputs = [];

https.createServer(options, (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const readStream = fs.createReadStream('index.html');
        readStream.pipe(res);
    } else if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            inputs.push(body);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Data received: ' + inputs);
        });
    }
}).listen(8000, () => {
    console.log('Server running at https://localhost:8000/');
});
