import jsonServer from 'json-server';
import path from 'path';

const server = jsonServer.create();
const dbPath = path.join(process.cwd(), 'db.json');

const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default (req, res) => {
  server(req, res);
};
