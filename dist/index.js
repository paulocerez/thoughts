// import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// const app = fastify({ logger: true });
(async function () {
    // console.log(await prisma.user.findMany({take}))
    const user = await prisma.user.create({
        data: { username: "lucagoslar", email: "luca.goslar@code.berlin" },
    });
    console.log("Hi", user.username);
})();
// async function main() {
//   // Connect the client
//   await prisma.$connect();
//   await prisma.collection.create({
//     // username: "paulo"
//   });
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
// });
// app.listen({ port: 3030 }, (err) => {
//   if (err) {
//     console.error(err);
//     process.exit(1);
//   }
//   console.log("SERVER IS HOSTED @LOCALHOST 3030");
// });
