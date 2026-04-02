import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {interval, Observable, of, timer, from} from "rxjs"
@Component({
  selector: 'app-rxjs-basic',
  imports: [],
  templateUrl: './rxjs-basic.html',
  styleUrl: './rxjs-basic.css'
})
export class RxjsBasic {

  users$:Observable<string[]>=of(['naresh','mahesh','ramesh','rajesh']);

  clients$=from(["flipkart","blinkit","Nyka"]);

  interval$=interval(1000);

  timer$=timer(5000);



  constructor(private route:ActivatedRoute){
    const myObser$=new Observable(value=>{
      value.next("hello good morning");
    })


    myObser$.subscribe(msg=>{
      // debugger;
      console.log(msg);
    })

    
  }

  ngOnInit(){
    this.route.queryParams.subscribe(queryParam=>{
      console.log(queryParam);
    })


    this.users$.subscribe((users :string[])=>{
      console.log(users);
    })

    this.timer$.subscribe((val)=>{console.log("Timer",val)});

    this.interval$.subscribe(res=>console.log("interval",res))


    this.clients$.subscribe((client)=>{
      this.timer$.subscribe((res)=>{
      })
      
      console.log("our client is :",client)
    })
   
  }
}
