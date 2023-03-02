import Fastify from "fastify";
const fastify = Fastify({ logger: true });
// Running the server
const server = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log("SERVER RUNNING...");
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
server();
