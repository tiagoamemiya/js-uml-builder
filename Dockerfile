FROM node:10.15.3-alpine

RUN apk add --no-cache --virtual .build-deps git

CMD [ "node" ]