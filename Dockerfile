# Build:
# docker build -t basf/construction-chemicals .
#
# Run:
# docker run -it basf/construction-chemicals
#
# Compose:
# docker-compose up -d

FROM ubuntu:latest
MAINTAINER HENRIPODOLSKI

# 80 = HTTP, 443 = HTTPS, 3000 = construction-chemicals-web server, 35729 = livereload, 8080 = node-inspector
EXPOSE 80 443 3000 35729 8080

# Set development environment as default
ENV NODE_ENV development

# Install Utilities
RUN apt-get update -q  \
 && apt-get install -yqq \
 curl \
 git \
 ssh \
 gcc \
 make \
 build-essential \
 libkrb5-dev \
 sudo \
 apt-utils \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install nodejs
RUN curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
RUN sudo apt-get install -yq nodejs \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install construction-chemicals-web Prerequisites
RUN npm install --quiet -g mocha karma-cli pm2 && npm cache clean

WORKDIR /opt/construction-chemicals-web

# Copies the local package.json file to the container
# and utilities docker container cache to not needing to rebuild
# and install node_modules/ everytime we build the docker, but only
# when the local package.json file changes.
# Install npm packages
COPY package.json /opt/construction-chemicals-web/package.json
RUN npm install --quiet && npm cache clean

COPY . /opt/construction-chemicals-web

# Run construction-chemicals-web server
CMD npm install && npm start:hmr
