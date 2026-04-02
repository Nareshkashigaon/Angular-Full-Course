import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient){


  }


  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      map((users:any)=> users.map((user:any)=>{
        return {id:user.id,name:user.name};
      }))
    )
  }



  getSingleUser(){

    // if(true){
    // return throwError(()=> new Error("api failed"));
    // }
    return this.http.get("https://jsonplaceholder.typicode.com/users/2").pipe(
      map((user:any)=> user.address 
    )
    )
  }
}
