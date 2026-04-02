import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {

  @Input() name!:string;




  ngOnChanges(changes:SimpleChanges){
    if(changes['name']){
      console.log("changed from this ",changes['name'].previousValue,"to this ",changes['name'].currentValue);
    }
  }

}
