import { Router } from "express";
import * as noteController from "../controllers/note.controller";

const router = Router();

/**
 * @route GET /notes
 * @desc List all notes
 */
router.get("/", noteController.listNotes);

/**
 * @route GET /notes/:id
 * @desc Get a specific note by ID
 */
router.get("/:id", noteController.getNote);

/**
 * @route POST /notes
 * @desc Create a new note
 */
router.post("/", noteController.createNote);

/**
 * @route PATCH /notes/:id
 * @desc Update a specific note by ID
 */
router.patch("/:id", noteController.updateNote);

/**
 * @route DELETE /notes/:id
 * @desc Delete a specific note by ID
 */
router.delete("/:id", noteController.deleteNote);

export default router;