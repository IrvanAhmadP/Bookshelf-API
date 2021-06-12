const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const host = process.env.HOST || 'localhost';
  const port = process.env.PORT || 5000;

  const server = Hapi.Server({
    port,
    host,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
