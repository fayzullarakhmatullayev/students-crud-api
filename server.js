import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import studentRoutes from "./src/student/routes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/v1/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
