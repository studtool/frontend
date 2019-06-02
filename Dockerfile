FROM node:12.3.1-alpine as base
WORKDIR /tmp
COPY . .
RUN npm i && npm run build

FROM nginx:1.16.0-alpine
COPY --from=base /tmp/nginx.conf /etc/nginx/nginx.conf
COPY --from=base /tmp/dist /var/www
