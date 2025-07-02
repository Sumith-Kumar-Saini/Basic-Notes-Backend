import express, { Request, Response } from "express";
import notesRouter from "./routes/notes";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express with TypeScript!");
});

app.use("/notes", notesRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
