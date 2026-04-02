import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, pipe, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  todos$:any;
  users$:any;


  constructor(private http:HttpClient){
    this.todos$=this.http.get("https://jsonplaceholder.typicode.com/todos");
    this.users$=this.http.get("https://jsonplaceholder.typicode.com/users");


    

  }

  getAllData(){
    return forkJoin([this.todos$,this.users$]);
  }

  
  getProductsForSwitchMap(productName:any){
    return this.http.get("https://dummyjson.com/products?query="+productName)
  }

  getProductsForMergeMap(productName:any){
    return this.http.get("https://dummyjson.com/products?query="+productName)
  }



  login(userCreadentials:any){
    return this.http.post("https://dummyjson.com/auth/login",userCreadentials);
  }




}
