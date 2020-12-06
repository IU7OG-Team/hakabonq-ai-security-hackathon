# hakabonq frontend

FROM node
LABEL maintainer="hakabonq"

RUN mkdir /frontend
COPY ./ /frontend
WORKDIR /frontend

RUN npm install

USER node