import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  constructor() { }
  arrPerson = [
    {name: 'Cuong' , age: 23},
    {name: 'Việt' , age: 22},
    {name: 'Ly' , age: 23},
    {name: 'Tiên' , age: 21},
  ]
  ngOnInit() {
  }
  removePersonByName(name:string){
    const index = this.arrPerson.findIndex(e=> e.name === name);
    this.arrPerson.splice(index,1);
  }
}
