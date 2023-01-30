// registering the plugin + start using the middleware
import Fastify from "fastify";
const fastify = Fastify();

// async function build() {
//   const fastify = Fastify();
//   await fastify.register(require("@fastify/middie"), {
//     hook: "onRequest", // default
//   });
//   // cors support
//   fastify.use(require("cors")());
//   return fastify;
// }

// build()
//   .then((fastify) => fastify.listen({ port: 3000 }))
//   .catch(console.log);

// fastify is the encapsulated Fastify instance, options is the options object, and done is the function you must call when your plugin is ready
fastify.register(function pluginA(fastify, options, done) {
  // Inside a plugin you can do whatever you want, register routes, utilities (we will see this in a moment) and do nested registers, just remember to call done when everything is set up!
  fastify.decorate("multiply", (a, b) => a * b);
  console.log(fastify.multiply(9, 8));
  done();

  //   fastify.get("/plugin", (request, reply) => {
  //     reply.send({ hi: "MOIN" });
  //   });
  // done called when plugin is set up
  //   done();
});

fastify.register(function pluginB(fastify, options, done) {
  // Inside a plugin you can do whatever you want, register routes, utilities (we will see this in a moment) and do nested registers, just remember to call done when everything is set up!
  fastify.decorate("multiply", (a, b) => a * b);
  console.log(fastify.multiply(9, 8));
  done();
});

const app = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("SERVER RUNNING...");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
app();
