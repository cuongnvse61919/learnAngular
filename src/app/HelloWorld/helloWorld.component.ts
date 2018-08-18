import { Component } from "@angular/core";

@Component ({
    selector: "app-helloWorld",
    templateUrl: "./helloWorld.component.html",
    styleUrls: ["./helloWorld.component.css"]
}) 
export class HelloWorldComponent{
    en:string = "hello";
    vi:string  = "xin chào";
    imageUrl= "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-1/c20.8.160.160/p200x200/31421585_1977287619255086_872453162291394308_n.jpg?_nc_cat=0&oh=b4d172a140ea695f2890dd7bae2cc418&oe=5C0E5483";
    forgot = true;
    
    toggleForgot(){
        this.forgot = !this.forgot;
    }
}