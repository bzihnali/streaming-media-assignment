const fs = require('fs'); // pull in the file system module

const getPage = (request, response, pagePath) => {
  const pageFile = fs.readFileSync(`${__dirname}${pagePath}`);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(pageFile);
  response.end();
};

module.exports.getPage = getPage;
