import Fastify from "fastify";
const fastify = Fastify({ logger: true });
// logger: true -> gives extra information in the console

//declaring a route
fastify.get("/1", (request, reply) => {
  reply.send({ test: "Hi Micho" });
});

// fastify.get("/passengers", (request, reply) => {
//   reply.send({ passenger: "Stranger with a beige hat" }, { shoes: "brown" });
// });

// running the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("SERVER RUNNING...");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

// alternative way to write a server
// fastify.listen({ port: 2000 }, (err, address) => {
//   if(err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
// });
