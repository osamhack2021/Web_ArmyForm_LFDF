FROM node:14-alpine

WORKDIR /backend

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
COPY src src

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]