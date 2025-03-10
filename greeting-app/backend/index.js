import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/greet", (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.json({ error: "Name is required." });
  }
  res.json({ message: `Hello, ${name}! Welcome to Younglabs` });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));