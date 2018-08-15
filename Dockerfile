FROM node:9.2.0-alpine

EXPOSE 9000
ENV PORT=9000
WORKDIR /root/pipeline-flow-editor
COPY . ./

RUN apk add --no-cache git

RUN npm install && \
    npm install -g bower && \
    bower install --allow-root


# run application
CMD gulp serve
