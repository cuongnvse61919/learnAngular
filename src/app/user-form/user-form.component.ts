import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() { }
  name:string = "";
  evenStyle = {color: 'red', fontSize: '20px'};
  oddStyle = {color: 'green', fontSize: '40px'};
  arrSubject = ['Angular','NodeJS','React','Java'];
  isHightLight:boolean = true;
  

  ngOnInit() {
  }
}
