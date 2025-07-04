// What a note looks like in the DB
export interface Note {
  id: number;
  title: string;
  description: string;
}

/**
 * POST /notes body
 * `title` and `description` are required when you create.
 */
export interface NoteCreateBody {
  title: string;
  description: string;
}

/**
 * PATCH /notes/:id params + body
 * All body fields are optional when updating.
 */
export interface NoteIDParams {
  id: string; // still string because it comes from the URL
}

export type NoteUpdateBody = Partial<Pick<Note, 'title' | 'description'>>;
