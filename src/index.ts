import fastify, { FastifyRequest } from "fastify";
import { PrismaClient, User } from "@prisma/client";

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
  // which JS engine to use
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


// replicating the functionality of __dirname for ES modules (__dirname to get the path of the folder where the current JS file resides)
import path from "path";
import { fileURLToPath } from "url";
import internal from "stream";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static HTML Files plugin
app.register(fastifyStatic, {
  // directory of the file, dirname represents the current directory
  root: __dirname + "/public",
  // prefix to specify a prefix path added to the file URLs to allow multiple static folders in different routes
  // prefix: "/public/",
});

// // Static CSS Files plugin
// app.register(fastifyStatic, {
//   // directory of the file, dirname represents the current directory
//   root: __dirname + "/public",
//   // prefix to specify a prefix path added to the file URLs to allow multiple static folders in different routes
//   prefix: "/public/",
// });



app.get("/", async (request, reply) => {
  // reply.send("Hello");
  const numberOfThoughts = 42;
  // renders the static.ejs file + defining an object as the second parameter of the view() function incl. properties (as many as you like)
  reply.view("thoughts", {
    numberOfThoughts: numberOfThoughts,
    numberOfMoods: 445,
    nameOfPage: "Thoughts",
    currentMood: "Happy",
  });
  // const { username, email } = request.body;
  // const newUser = await prisma.user.create({
  //   data: {
  //     username: JSON.stringify(username),
  //     email: JSON.stringify(email),
  //   },
  // })
});

app.get("/index", (request, reply) => {
  const numberOfThoughts = 42;
  // renders the static.ejs file + defining an object as the second parameter of the view() function incl. properties (as many as you like)
  reply.view("index", {
    numberOfThoughts: numberOfThoughts,
    numberOfMoods: 445,
    nameOfPage: "Thoughts",
    currentMood: "Happy",
  });
});
app.get("/signup", (request, reply) => {
  reply.view("login")
});

app.post("/signup", (request, reply) => {
    const formData = request.body;
    console.log(formData);
    // const username = request.body.username;
    // const email = request.body.email;

  // const newUser = await prisma.user.create({
  //   data: {
  //     username: ,
  //     email: 
  //   }
  // })
})

app.get("/leandro", async (request, reply) => {
  const leandro = await prisma.user.create({
    data: {
      username: "leandrocerez",
      email: "leandro.ramirez@gmx.de",
    },
  });
  console.log(leandro);
});

// app.post("/signup", async (request: any, reply) => {
//   const { email, username } = request.body;
//   const name = await prisma.user.create({
//     data: {
//       username,
//       email,
//     },
//   });
// });

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


// Running the server
const start = async () => {
  try {
    await app.listen({ port: 8000, host: "0.0.0.0" }, () => {
      console.log("SERVER RUNNING...");
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();


