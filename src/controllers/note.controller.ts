import { RequestHandler } from "express";
import * as noteService from "../services/note.service";
import { NoteCreateBody, NoteUpdateBody, NoteIDParams } from "../types/note";

/* GET /notes/:id */
export const getNote: RequestHandler<NoteIDParams> = (req, res) => {
  const id = Number(req.params.id);
  const note = noteService.getNoteById(id);

  if (!note) {
    res.status(404).json({ success: false, message: "Note not found" });
    return;
  }

  res.status(200).json({ success: true, note });
  return;
};

/* GET /notes */
export const listNotes: RequestHandler = (_, res) => {
  const notes = noteService.getAllNotes();
  res.status(200).json({ success: true, notes });
};

/* POST /notes */
export const createNote: RequestHandler<{}, any, NoteCreateBody> = (
  req,
  res
) => {
  const { title, description } = req.body;
  const note = noteService.createNote({ title, description });
  res
    .status(201)
    .json({ success: true, note, notes: noteService.getAllNotes() });
};

/* PATCH /notes/:id */
export const updateNote: RequestHandler<NoteIDParams, any, NoteUpdateBody> = (
  req,
  res
) => {
  const id = Number(req.params.id);
  const note = noteService.updateNote(id, req.body);

  if (!note) {
    res.status(404).json({ success: false, message: "Note not found" });
    return;
  }

  res.status(200).json({ success: true, note });
  return;
};

/* DELETE /notes/:id */
export const deleteNote: RequestHandler<NoteIDParams> = (req, res) => {
  const id = Number(req.params.id);
  const removed = noteService.deleteNote(id);

  if (!removed) {
    res.status(404).json({ success: false, message: "Note not found" });
    return;
  }

  res.status(204).json({ success: true, message: "Note deleted" });
  return;
};
