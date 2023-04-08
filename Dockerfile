# Build
FROM node:18-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --include=dev
COPY ["tsconfig.json", "./"]
COPY ["src", "./src"]
RUN npm run build

# Run
FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --include=dev
COPY --from=0 /app/dist ./dist
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]