import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // in Subject we dont need initilize a default value for initialize we use next("lakhan") 
  subjectName$=new Subject<string>();

  // in behaviour subject i need to initialize a deafult value first and we can also change or reinitialize using next also
  behaviourName$=new BehaviorSubject<string>("naresh kashigaon");


  userDetails=new Map<number,Observable<any>>();


  constructor(private http:HttpClient){
    // this.subjectName$.next("lakhan")
  }

  getUser(id:number){

  if(!this.userDetails.has(id)){
    const res=this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
    this.userDetails.set(id,res);
    console.log("iam the userservice id :",id, this.userDetails)
  }

  return this.userDetails.get(id);
  

  }


}
