# contains a script of instructions Docker uses to create a container image -> docker build command uses the Dockerfile to build a new container image

# syntax=docker/dockerfile:1
# each step creates one layer of the docker image -> whenever one layer changes, we need to run the step of the layer + every other step coming afterwards
# sets base image to start from to "node:19"
FROM node:18
# sets the working directory
WORKDIR /thoughts_projekt
# copies package.json files to the working directory, thereby also to the image -> optimization, because we cache the results and don't need to run it everytime anything changes
COPY package*.json ./
# installs dependencies
RUN npm i

# copy everything else into the container
COPY . .

RUN npx prisma generate
# exposes port 3000 -> here the Fastify app will expect to listen on, it doesn't actually listen on it based on that command

ENV PORT = 8000

EXPOSE 8000
# command to run when the container is run (start is specified in package.json)
CMD ["npm", "run", "dev"]