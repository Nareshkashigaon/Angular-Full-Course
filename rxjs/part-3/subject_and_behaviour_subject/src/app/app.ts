import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user-service';
import { DataBinding } from './data-binding/data-binding';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DataBinding,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('subject_and_behaviour_subject');

  constructor(private userService:UserService){
    // this.userService.behaviourName$.subscribe((value:string)=>{
    //   console.log(value);
    // })

    // this.userService.subjectName$.subscribe((value:string)=>{
    //   console.log(value);
    // })
  }

  idNumber= new FormControl();


 

  onChange(event:any){
    // console.log(event.target.value)
    this.userService.behaviourName$.next(event.target.value)
    this.userService.subjectName$.next(event.target.value)
    
  }

    // callApi(){

    //   console.log("called")

    //   // const id=parseInt(this.idNumber);
    //   const res=this.userService.getUser(id)?.subscribe((data)=>{
    //     console.log(data)
    //   })
    // }
}
