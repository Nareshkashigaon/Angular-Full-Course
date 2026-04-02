import { Component, signal, SimpleChange, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

 

  protected readonly title = signal('parent-to-child-data-pass');

  parentMsg: string = 'Message from Parent to hello choild Child Component';

  name:string="";

  constructor() {}



// make a function arrow fn 
  // parentFn=(val:string)=> {
    
  //   this.name=val;

  //   console.log("Clicked from parent");

  //   console.log(this.name);
    
  // }



  parentFn(val:string){
    
    this.name=val;

    // console.log("Clicked from parent");

    // console.log(this.name);
    
  }

    // ngOnChanges(changes:SimpleChanges){
    //   if(changes['name']){
    //     console.log(this.name)
    //   }
    //   console.log(changes)
    // }
  

}
