import fastify, { FastifyRequest } from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = fastify({ logger: true });

// @fastify/cookie plugin
import type { FastifyCookieOptions } from "@fastify/cookie";
import cookie from "@fastify/cookie";

// @fastify/formbody plugin
import fastifyFormbody from "@fastify/formbody";
app.register(fastifyFormbody);

// Embedded JS import
import ejs from "ejs";

// @fastify/view plugin
import fastifyView from "@fastify/view";
const optsEjs = {
  // which engine to use
  engine: {
    ejs,
  },
  // folder of the templates
  templates: "views/thoughts",
  // specify locals (variables) that will be available to all templates by default
  locals: {
    title: "Thoughts",
  },
};

app.register(fastifyView, optsEjs);

// @fastify/static plugin
import fastifyStatic from "@fastify/static";
import { runInContext } from "vm";

// (async function () {
// console.log(await prisma.user.findMany({take}))
// const user = await prisma.user.create({
//   data: { username: "lucagoslar", email: "luca.goslar@code.berlin" },
// });
// })();

app.get("/leandro", async (request, reply) => {
  const leandro = await prisma.user.create({
    data: {
      username: "leandrocerez",
      email: "leandro.ramirez@gmx.de",
    },
  });
  console.log(leandro);
});

app.get("/signup", async (request, reply) => {
  reply.view("paulo.ejs");
});

app.post("/signup", async (request: any, reply) => {
  const { email, username } = request.body;
  const name = await prisma.user.create({
    data: {
      username,
      email,
    },
  });
});

// routes

app.get("/users", async (request, reply) => {
  // const user = await prisma.user.findUnique({
  //   where: {
  //     username: "leocerez",
  //   },
  // });
  // console.log(user?.username);
});

app.get("/search", (request, reply) => {
  console.log(`You searched for: `, JSON.stringify(request.query));
});

app.get("/", (request, reply) => {
  const numberOfThoughts = 32;
  // renders the static.ejs file + defining an object as the second parameter of the view() function incl. properties (as many as you like)
  reply.view("index", {
    numberOfThoughts: numberOfThoughts,
    numberOfMoods: 445,
    nameOfPage: "Thoughts",
    currentMood: "Happy",
  });
});

// DB Connection einpflegen -> sowohl Fastify als auch Prisma mit MongoDB connecten oder reicht Prisma?
// Pseudo-Vorstellung der Funktionalität
// 1. HTML form -> catch den User-Input über Formbody-Plugin
// 2. Feldinhalte jeweils in einer Variable speichern
// 3. Variable dann jeweils über Prisma in die Datenbank als Eintrag speichern

// Running the server
const server = async () => {
  try {
    await app.listen({ port: 8000 });
    console.log("SERVER RUNNING...");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
server();
