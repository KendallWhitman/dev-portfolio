FROM node
WORKDIR portfolio
COPY . .
RUN npm i
RUN npm run build
EXPOSE 8001
CMD npm run serve
