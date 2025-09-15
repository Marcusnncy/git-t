# Sử dụng image Node.js chính thức
FROM node:18
# Thiết lập thư mục làm việc trong container
WORKDIR /usr/src/app
# Sao chép file package.json và package-lock.json
COPY package*.json ./
# Cài đặt dependencies
RUN npm install
# Sao chép toàn bộ mã nguồn
COPY . .
# Mở cổng 3000
EXPOSE 3000
# Lệnh chạy ứng dụng1111
CMD ["node", "app.js"] (app.js thay bằng file chính vd: index.js)