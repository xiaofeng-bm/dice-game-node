FROM node:20-alpine

# 设置工作目录
WORKDIR /app

# 安装 PM2
RUN npm install pm2 -g

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制所有源代码
COPY . .

# 构建应用
RUN npm run build

# 暴露端口（根据您的应用配置修改）
EXPOSE 3000

# 使用 PM2 启动应用
CMD ["pm2-runtime", "start", "dist/main.js"]