// server.js
import express from 'express';
import sql from 'mssql';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());

// 🔧 Cấu hình kết nối SQL Server
const config = {
  user: 'devuser', // tài khoản SQL Server (nên lập 1 cái i chang để đỡ phải đổi qua đổi lại khi pull thế nhé bro)
  password: 'dev123', // thay bằng mật khẩu của cái tài khoản sql đó
  server: 'localhost',
  database: 'Livestracomics',
  options: {
    encrypt: false, 
    trustServerCertificate: true
  }
};

app.get('/api/truyen', async (req, res) => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query(`
    SELECT 
    t.id,
    t.ten,
    t.author,
    t.so_chuong,
    t.imageURL,
    t.status,
    t.description,
    ty.type_name AS theloai 
  FROM truyen t
  JOIN [type] ty ON t.type_id = ty.type_id
`);
    res.json(result.recordset);
  } catch (err) {
    console.error('Lỗi truy vấn:', err);
    res.status(500).json({ error: 'Lỗi server hoặc truy vấn' });
  }
});


app.listen(port, () => {
  console.log(`✅ Server đang chạy tại http://localhost:${port}`);
});