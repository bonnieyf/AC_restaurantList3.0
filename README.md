![截圖 2021-07-25 下午7 54 28](https://user-images.githubusercontent.com/3711787/126898059-0d515a81-0914-407e-9237-9f92c9f5f485.png)


# Restaurant List
使用 Node.js + Express + express-handlebars + mongoDB 打造的餐廳清單網頁。

### 主要功能
1. 餐廳搜尋功能
2. 各餐廳詳細資料，可刪除、新增、修改 <br>
3. 可透過 select 排序餐廳結果

### Development environment

| Package            | Version  |
| ------------------ | -------- |
| mac Big Sur        | 11.4     |
| VS code            | 1.58.2   |
| Node.js            | v14.12.0 |
| Npm                | 6.14.8   |
| Nodemon            | 2.0.7    |
| Express            | 4.17.1   |
| Express-handlebars | 5.3.2    |
| Mongoose           | 5.13.2   |
| MongoDB            | 4.2.5    |


### Installing

1. 透過 https 取得此專案

```bash
$ git clone https://github.com/kusasen/AC_restaurantList3.0.git
```

2. 安裝 node module

```bash
$ cd AC_restaurantList3.0
$ npm install
```

3. 載入 Restaurants Seeds

本專案需在 local 建立 MongoDB 並且使用預設 port 27017。

```bash
$ npm run seed
```

4. 透過 npm 在 local 啟動 web server

```bash
$ npm run dev
App is running on http://localhost:3000
```

5. 透過 Browser 打開 [http://localhost:3000](http://localhost:3000)
