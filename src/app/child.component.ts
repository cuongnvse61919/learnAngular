import {Component, Output, EventEmitter} from '@angular/core';

@Component ({
    selector: "app-child",
    template:`
        <button (click)="addToParent()">Add</button>
        <button (click)="subToParent()">Sub</button>
    `
})
export class ChildComponent{
    @Output() myClick = new EventEmitter<boolean>();
    addToParent(){
        this.myClick.emit(true);
    }
    subToParent(){
        this.myClick.emit(false);
    }
}