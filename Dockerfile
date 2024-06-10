FROM node:20-alpine as build

WORKDIR /code

COPY *.json .
RUN yarn

COPY . .

CMD ["yarn", "run", "build"]
