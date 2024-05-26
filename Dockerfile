# build stage
FROM node:lts-alpine3.16 as build-stage

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]