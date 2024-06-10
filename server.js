const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

https.createServer(options, (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const readStream = fs.createReadStream('index.html');
        readStream.pipe(res);
    }
}).listen(8000, () => {
    console.log('Server running at https://localhost:8000/');
});
