FROM node:20.9.0-alpine

ENV PORT=8086 \
    NODE_ENV=development

# 安装express和angular/cli
RUN npm install express@4.18.2 -g \
  && npm install -g @angular/cli

# 创建app目录
RUN mkdir -p /app

# 复制代码到 App 目录
COPY . /app

WORKDIR /app

# 安装依赖,构建程序,这里由于我需要反向X到子目录，所以添加了base-href参数
RUN npm install && ng build --base-href /manage/ --configuration development

EXPOSE ${PORT}

ENTRYPOINT ["node", "/app/server.js"]