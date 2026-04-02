import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  subscription!:Subscription;
  
  subscriptionList:Subscription[]=[]

  constructor(private http:HttpClient){
   
  }


  ngOnInit(){
    // way -1
    // this.subscription=this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((res)=>{
    //   console.log(res)
    // })



    // way -2
    this.subscriptionList.push(this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res)=>{
      console.log(res)
    }))
    this.subscriptionList.push(this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((res)=>{
      console.log(res)
    }))
  }


  ngOnDestroy(){
    debugger;
    // way -1
    this.subscription.unsubscribe();
    console.log("unsubscribed successfully")

    // way -2
    this.subscriptionList.forEach(sub=>{
      sub.unsubscribe();
    })
    console.log("all unsubscribed successfully")
  }
}
