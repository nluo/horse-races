FROM node:6.9-slim

ENV DEBIAN_FRONTEND noninteractive

# Install app dependencies
RUN npm i -g typescript

WORKDIR /code
ADD package.json /code/
RUN npm i
ADD . /code
CMD npm run start
