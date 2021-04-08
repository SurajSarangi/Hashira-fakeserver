const jsonServer = require('json-server');
const PORT = process.env.PORT || 5000;

const server = jsonServer.create();

const router = jsonServer.router('./db.json');

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(PORT);