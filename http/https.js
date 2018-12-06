const https = require('https');
// 文件系统
const fs = require('fs');

const options = {
  key: fs.readFileSync('ssh_key.pem'),
  cert: fs.readFileSync('ssh_cert.pem')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);