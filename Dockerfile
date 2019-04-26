FROM node:12.0-alpine as base
WORKDIR /tmp
COPY . .
RUN npm ci && npm run build

FROM nginx:1.16
COPY --from=base /tmp/nginx.conf /etc/nginx/nginx.conf
COPY --from=base /tmp/dist /var/www
