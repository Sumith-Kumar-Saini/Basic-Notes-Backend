import { Router, Request, Response } from "express";
import DB from "../database/memoryDB";

const router = Router();

// get all notes ✅
router.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.json({
    success: true,
    notes: DB,
  });
});

// creates note ✅
router.post("/", (req: Request, res: Response): undefined => {
  if (!req.body.title && !req.body.description) {
    res.send("title and description needed");
    return;
  }

  DB.push({
    title: req.body.title,
    description: req.body.description,
    id: DB.length + 1,
  });

  res.status(201);
  res.json({
    success: true,
    notes: DB,
  });
});

export default router;
