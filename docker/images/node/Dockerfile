FROM node:8-jessie

# install node app (would matter in the production context)
COPY source /home/app
COPY docker/images/node/entrypoint.sh /entrypoint.sh

# install sails globally for convenience
RUN npm install sails -g

# drop root permission
USER node

# install dependencies for prod context
RUN npm install

EXPOSE 1337
WORKDIR /home/app
CMD ["/entrypoint.sh"]

