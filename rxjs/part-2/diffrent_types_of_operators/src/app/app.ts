import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user-service';
import { CommonModule } from '@angular/common';
import { interval, take } from 'rxjs';
import { FormControl,FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private usersService:UserService){

  }
  protected readonly title = signal('diffrent_types_of_operators');

  interval=interval(1000);

  searchText=new FormControl();


  ngOnInit(){
    const allUsers=this.usersService.getUsers().subscribe({
      next:(res)=>{
        console.log(res);
      }
    }   
    )


    const singleUser=this.usersService.getSingleUser().subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.error(err);
      }
    })



    this.interval.pipe(
      take(6)
    ).subscribe(res=>console.log(res))


    this.searchText.valueChanges.subscribe(res=>console.log(res))
  }


  
}
