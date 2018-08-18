import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  constructor() { }
  filterStatus = "XEM_TAT_CA";
  isShowForm = false;
  newEn="";
  newVi="";
  arrWords = [
    { id: 1, en: 'action', vi: 'Hành động', memorized: true },
    { id: 2, en: 'actor', vi: 'Diễn viên', memorized: false },
    { id: 3, en: 'activity', vi: 'Hoạt động', memorized: true },
    { id: 4, en: 'active', vi: 'Chủ động', memorized: false },
    { id: 5, en: 'art', vi: 'Nghệ thuật', memorized: false },
  ];

  ngOnInit() {
  }

  addWord(){
    this.arrWords.unshift({
      id: this.addWord.length + 1,
      en: this.newEn,
      vi: this.newVi,
      memorized: false
    })
    this.newEn ="";
    this.newVi = "";
    this.isShowForm = false;
  }
  deleteWord(id:number){
    const index = this.arrWords.findIndex(word => word.id === id);
    this.arrWords.splice(index,1);
  }

  getShowStatus(memorized : boolean){
    const xTatCa = this.filterStatus === "XEM_TAT_CA";
    const xDaNho = this.filterStatus === 'XEM_DA_NHO' && memorized;
    const xChuaNho = this.filterStatus === 'XEM_CHUA_NHO' && !memorized;

    return xTatCa|| xDaNho ||xChuaNho;
  }
}
