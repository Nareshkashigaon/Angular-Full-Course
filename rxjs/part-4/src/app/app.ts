import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user-service';
import { FormControl, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { concatMap, exhaustMap, mergeMap, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('part-4');

  input=new FormControl();

  loginSubject$=new Subject<void>();

  constructor(private userService:UserService){
    
    this.loginSubject$.pipe(
      concatMap(()=>this.userService.login({username:"emilys",password:"emilyspass"}))
    ).subscribe((res)=>{
      console.log(res)
    })

// this.loginSubject$.pipe(
//       exhaustMap(()=>this.userService.login({username:"emilys",password:"emilyspass"}))
//     ).subscribe((res)=>{
//       console.log(res)
//     })

    // this.input.valueChanges.pipe(
    //   switchMap(productName=>this.userService.getProductsForSwitchMap(productName))
    // ).subscribe(res=>{
    //   console.log(res)
    // })


    // this.input.valueChanges.pipe(
    //   mergeMap(productName=>this.userService.getProductsForMergeMap(productName))
    // ).subscribe(res=>{
    //   console.log(res)
    // })


    

  }

  login(){
    
    this.loginSubject$.next();
  }

  ngOnInit(){
    this.userService.getAllData().subscribe(res=>{
      console.log(res) // here we get  results like this 2d array -> [[],[]]
    })



  }
}
