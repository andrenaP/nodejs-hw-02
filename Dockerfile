FROM node

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 3000

CMD ["yarn","start"]