FROM node
WORKDIR portfolio
COPY . .
RUN npm i
RUN npm i -g serve
RUN npm run build
EXPOSE 8001
CMD serve -s public -l 8001
