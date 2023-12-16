import { Component } from '@angular/core';
import { Note } from './interfaces/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'notes';
  selectedNote!: Note;

  selectNote(note: Note) {
    this.selectedNote = note;
  }
}
