FROM node:11.14-alpine as base
WORKDIR /tmp
COPY . .
RUN npm ci && npm run build

FROM nginx:1.15.11
COPY --from=base /tmp/nginx.conf /etc/nginx/nginx.conf
COPY --from=base /tmp/dist /var/www
