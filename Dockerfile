FROM node:14.19.3
WORKDIR portfolio
COPY . .
RUN npm i
RUN npm run build
EXPOSE 8002
CMD npm run serve
