import express, { Request, Response } from "express";
import notesRouter from "./routes/notes";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express with TypeScript!");
});

app.use("/notes", notesRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
