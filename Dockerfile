FROM node:latest as builder
WORKDIR /home/react-project
COPY . .
RUN npm install --verbose
RUN npm run build --verbose

FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /home/react-project/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]


