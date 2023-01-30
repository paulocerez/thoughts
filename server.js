import Fastify from "fastify";
const fastify = Fastify({ logger: true });
import { request } from "express";
import objectInspect from "object-inspect";
import pathtoRegexp from "path-to-regexp";

// Plugins

// serve a static HTML file from a Fastify route
import fastifyStatic from "@fastify/static";
// getting HTML form data
import fastifyFormbody from "@fastify/formbody";
import fastifyView from "@fastify/view";
import ejs from "ejs";
// this plugin uses the Node MongoDB Driver under the hood to communicate
import mongodb from "@fastify/mongodb";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

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

// Helper Functions Imports
import { thoughtSum } from "./helpers/thought-sum.js";

// replicating the functionality of __dirname for ES modules (__dirname to get the path of the folder where the current JS file resides)
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Registration of the Plugins
fastify.register(fastifyStatic, {
  // directory of the file, dirname represents the current directory
  root: __dirname + "/views",
  // prefix to specify a prefix path added to the file URLs to allow multiple static folders in different routes
  prefix: "/thoughts",
});
fastify.register(fastifyFormbody);
fastify.register(fastifyView, optsEjs);
fastify.register(mongodb, {
  // closes the mongodb connection when app is stopped
  forceClose: true,
  // local thoughts db
  url: "mongodb://localhost:2717/thoughts-data",
});

// List of objects

const memoriesColl = [
  {
    date: "15-02-2023",
    thought: "I love Paris",
    mood: "Happy",
    slug: "paris",
    goodMood: true,
  },
  {
    date: "20-02-2023",
    thought: "I love Barca",
    mood: "Moody",
    slug: "barca",
    goodMood: false,
  },
  {
    date: "25-02-2023",
    thought: "I love Berlin",
    mood: "Angry",
    slug: "berlin",
    goodMood: false,
  },
];

// Options

const memoryOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "String" },
        },
      },
    },
  },
};

// Routes

// thoughts-routes

fastify.get("/", (request, reply) => {
  const numberOfThoughts = 32;
  // renders the static.ejs file + defining an object as the second parameter of the view() function incl. properties (as many as you like)
  reply.view("index", {
    numberOfThoughts: numberOfThoughts,
    numberOfMoods: 445,
    nameOfPage: "Thoughts",
    currentMood: "Happy",
  });
});

fastify.post("/thought", (request, reply) => {
  console.log(request.body);
  reply.send(
    `Your thought: ${request.body.thought} and your Mood: ${request.body.mood}`
  );
});

// could alternatively destructure the code this way
// fastify.post('/submit', ({body: {username}}, reply) => {
//   console.log(username);
//   reply.send('Form data received')
// });

// rendering process
fastify.get("/thoughts", (request, reply) => {
  reply.view("thoughts");
});

// memories-routes

fastify.get("/memories", (request, reply) => {
  // { memories: memories } as an object passing the variable "memories" to the "memories" view template (specified in the first argument "memories")
  reply.view("memories", { memoryList: memoriesColl, thoughtSum: thoughtSum });
  // -> getting access to the
});

fastify.get("/index", (request, reply) => {
  reply.view("index");
});

fastify.get("/login", (request, reply) => {
  reply.view("login");
});

fastify.get("/friendsarea", (request, reply) => {
  reply.view("friendsarea");
});

fastify.get("/search", (request, reply) => {
  console.log(`You searched for: `, JSON.stringify(request.query));
});
// route parameters for dynamic components in URLs
fastify.get("/memories/:slug", async (request, reply) => {
  const mems = await request.params.slug;
  reply.send(mems);
});

// fastify.get("/memories", (request, reply) => {
//   let str = "memories".split();
//   let counter = 0;
//   str.forEach((letter) => (counter += 1));
//   reply.send(counter);
// });

// declaring the options object incl. a validation schema
const opts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "string" },
        },
      },
    },
  },
};

// async/await routing
fastify.get("/random", opts, async function (request, reply) {
  var data = await getData();
  var processed = await processData(data);
  //returning the body instead of reply.send
  return processed;
  // alternativ: return reply.send(processed);
});

// task: for at least one of the routes, use a JavaScript template string to dynamically render some content to the user based on data previously defined in variables

// Running the server
const server = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("SERVER RUNNING...");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
server();
