import MemoryDB from "../database/memoryDB";
import { Note, NoteCreateBody, NoteUpdateBody } from "../types/note";

export function getAllNotes(): Note[] {
  return MemoryDB.list();
}

export function getNoteById(id: number): Note | undefined {
  return MemoryDB.get(id);
}

export function createNote(data: NoteCreateBody): Note {
  return MemoryDB.create(data);
}

export function updateNote(id: number, patch: NoteUpdateBody): Note | undefined {
  return MemoryDB.update(id, patch);
}

export function deleteNote(id: number): boolean {
  return MemoryDB.delete(id);
}