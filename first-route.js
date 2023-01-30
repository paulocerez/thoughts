/**
 * Encapsulates the routes
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */

async function routes(fastify, options) {
  fastify.get("/899", async (request, reply) => {
    return { hello: "world" };
  });
}

module.exports = routes;

function pluginA(fastify, options, done) {
  done();
}
