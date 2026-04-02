import { Component } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {


  constructor(private userService:UserService){
    this.userService.subjectName$.subscribe((res)=>{
      console.log(" subject value",res);
    })

    this.userService.behaviourName$.subscribe((res)=>{
      console.log("behaviour subject value",res);
    })
  }
}
