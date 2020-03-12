FROM node
WORKDIR portfolio
COPY . .
RUN npm i --loglevel verbose
RUN npm i -g serve
RUN npm run build
EXPOSE 8001
CMD serve -s public -l 8001
