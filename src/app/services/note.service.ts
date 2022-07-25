import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }


  setStorage(key:string, obj:any){
    localStorage.setItem(key, JSON.stringify(obj))
  }

  getStorage(key: any){
    let myKey:any = localStorage.getItem(key)
    return JSON.parse(myKey)
  }

  validateNote(obj:any){
    let notesArr = this.getStorage('notes')
    if(notesArr && notesArr.length > 0){
      let a = notesArr.findIndex((n:any) => {
        return n.title === obj.title
      })
      if(a < 0){
        notesArr.push(obj)
      }else{
        notesArr[a].text = obj.text
      }
      this.setStorage('notes', notesArr)
    }else{
      notesArr = []
      notesArr.push(obj)
      this.setStorage('notes', notesArr)
    }
  }
}
