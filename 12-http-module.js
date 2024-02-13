const http = require("http");

// req = object that represents incoming request
// res = object of response that we're sending back
// you can only send one res per request
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage, FAM");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
    return;
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for!</p>
  <a href="/">back home</a>`);
});

server.listen(5000);
