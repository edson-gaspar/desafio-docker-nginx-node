FROM node:18-alpine

RUN apk update && apk upgrade

RUN apk add --no-cache wget

RUN wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
   chmod +x /usr/bin/wait-for

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
