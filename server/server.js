import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import adminRouter from "./routes/admin.route.js";

const app = express();

await connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

app.use("/api/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
