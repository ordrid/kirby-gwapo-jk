import express from "express";
import sql from "mssql";

const app = express();
const PORT = 3000;

const config = {
  user: "sa",
  password: "Sup@r14sEQUiR9698",
  server: "localhost",
  database: "erms",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to the database");
    return pool;
  })
  .catch((err) => console.err("Database connection failed:", err));

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.get("/sample", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM samples");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
