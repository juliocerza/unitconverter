const server = require("./app/app");

const port = 3333;

server.listen(port, () => {
  console.log(`HTTP server running on port ${port}`);
});
