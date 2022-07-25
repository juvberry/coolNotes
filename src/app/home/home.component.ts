import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  noteGroup: FormGroup

  notesList:any
  note:any

  constructor(private noteService:NoteService, private fb:FormBuilder) { 
    this.noteGroup = this.fb.group({
      title: ['', [Validators.required]],
      text: ['', [Validators.required]]
    })

    this.noteGroup.valueChanges.subscribe(fm => {
      if(this.noteGroup.valid){
        this.setMyNote(fm)
      }
    })
  }

  ngOnInit(): void {

  }

  setMyNote(note:any){
    this.noteService.validateNote(note)
  }
}
