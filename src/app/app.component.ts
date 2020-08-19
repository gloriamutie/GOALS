import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals:string[];
  constructor(){
    this.goals=["watch find nemo","looking at todos","angular tutorial watch","sleep"]
  }
}