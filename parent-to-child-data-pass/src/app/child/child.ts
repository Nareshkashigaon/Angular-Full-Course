import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {

  @Input() parentMessage!: string;
  @Input() parent!:(val:string)=>void;

  @Output() nameChange =new EventEmitter<string>();
  


  callParent(val:string) {
    // this.parent(val); 
    // console.log("Clicked from child");

    this.nameChange.emit(val);
  }

  ngOnChanges(){
    console.log("Changes happened");
  }

}
