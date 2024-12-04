FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY museum21.conf /etc/nginx/museum21.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]