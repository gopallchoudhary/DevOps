import express from "express";
import { Pool } from "pg";

const app = express();
const PORT = process.env.PORT || 8000;

const pool = new Pool({
	user: process.env.DB_USER || "postgres",
	host: process.env.DB_HOST || "database",
	database: process.env.DB_NAME || "postgres",
	password: process.env.DB_PASSWORD || "password",
	port: process.env.DB_PORT || 5432,
});

app.get("/", (req, res) => {
	res.send("Hello from express backend");
});

app.get('/db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()')
        res.json({time: result.rows[0]})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
