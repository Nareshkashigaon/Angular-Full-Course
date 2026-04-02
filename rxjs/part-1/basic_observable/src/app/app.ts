import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basic_observable');

  constructor(private router:Router){

  }

  navigateToBasicObservable(event:Event){
    this.router.navigate(["/rxjs-basic"],{queryParams:{name:"naresh"}})
  }
}
