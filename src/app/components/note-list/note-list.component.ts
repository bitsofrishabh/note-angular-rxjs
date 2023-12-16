import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from '../../interfaces/note';
import { NoteService } from './../../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss',
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  isEditMode: boolean = false;
  @Output() selectedNote = new EventEmitter<Note>();

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.getNotesObservable().subscribe((res: Note[]) => {
      this.notes = res;
    });
  }
  editNote(note: Note) {
    this.selectedNote.emit(note);
    this.noteService.setEditable(true);
    console.log(note);
  }
  deleteNote(id: any) {
    this.noteService.deleteNote(id);
    console.log(id);
  }
}
