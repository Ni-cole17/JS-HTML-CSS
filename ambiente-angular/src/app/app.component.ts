import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 count = 0;

 text = "";

 pessoas = [
   {
      nome: "Nicole",
      idade: "22"
   },
   {
    nome: "Pedro",
    idade: "26"
   },
   {
    nome: "Eunice",
    idade: "28"
   },
   {
    nome: "Jefson",
    idade: "20"
   }
 ];

 nome = "Nicole Charron";

 constructor(){
 
 }
 
 ngOnInit(){
   let interval = setInterval(()=> {
     this.count++;
     if(this.count === 10){
       clearInterval(interval);
     }
   },1000) 
 }

 clicou(): void{
   console.log('Clicou em mim')
 }
 
 
}
