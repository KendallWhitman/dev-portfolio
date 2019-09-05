FROM node
WORKDIR portfolio
COPY . .
RUN npm i
RUN npm i -g serve
RUN npm run build
EXPOSE 3001
CMD serve -s public -l 3001
