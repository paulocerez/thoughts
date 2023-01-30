# contains a script of instructions Docker uses to create a container image -> docker build command uses the Dockerfile to build a new container image

# syntax=docker/dockerfile:1
# sets base image to start from to "node:19"
FROM node:19
# sets the working directory
WORKDIR /usr/src/app
# copies package.json files to the working directory, thereby also to the image
COPY package*.json ./
# installs dependencies
RUN npm install
# copy everything else into the container
COPY . .
# exposes port 3000 -> here the Fastify app will listen on
EXPOSE 3000
# command to run when the container is started (start is specified in package.json)
CMD ["npm", "start"]