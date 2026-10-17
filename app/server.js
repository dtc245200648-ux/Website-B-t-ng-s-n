const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3000;

const db = mysql.createPool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'bds_user',
  password: process.env.DB_PASSWORD || 'Bds_Secure_Pass_2026!',
  database: process.env.DB_NAME || 'bds_db'
});

app.get('/', (req, res) => {
  res.send('<h1>Website Bất Động Sản - Đề 25</h1><p><a href="/api/properties">Danh sách nhà đất</a></p>');
});

app.get('/api/properties', (req, res) => {
  res.json([
    { id: 1, title: 'Bán nhà mặt tiền Q.1', price: '15 tỷ' },
    { id: 2, title: 'Căn hộ chung cư Q.2', price: '4.5 tỷ' }
  ]);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
