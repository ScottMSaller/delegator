// adding in all dependencies for server.ts
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api', (_req, res) => {
    res.json({ message: "hello from the server.ts!"})
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))
