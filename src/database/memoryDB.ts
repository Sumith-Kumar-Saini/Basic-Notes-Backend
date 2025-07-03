import type { Note } from "../types/note";+-32

class MemoryDB {
  private store = new Map<number, Note>();
  private nextId = 1;

  /** Return all notes as a plain array (useful for JSON) */
  list(): Note[] {
    return Array.from(this.store.values());
  }

  /** Find one note by id */
  get(id: number): Note | undefined {
    return this.store.get(id);
  }

  /** Insert and auto‑increment id */
  create(data: Omit<Note, "id">): Note {
    const note: Note = { id: this.nextId++, ...data };
    this.store.set(note.id, note);
    return note;
  }

  /** Patch fields; returns updated note or undefined if not found */
  update(id: number, patch: Partial<Omit<Note, "id">>): Note | undefined {
    const current = this.store.get(id);
    if (!current) return;

    const updated = { ...current, ...patch };
    this.store.set(id, updated);
    return updated;
  }

  /** Hard delete; returns true if something was removed */
  delete(id: number): boolean {
    return this.store.delete(id);
  }
}

export default new MemoryDB();
