FROM nginx

WORKDIR client

RUN curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm 

COPY package.json ./

RUN npm install

COPY . .

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN npm run build

RUN rm -r /usr/share/nginx/html/*

RUN cp -a dist/. /usr/share/nginx/html
