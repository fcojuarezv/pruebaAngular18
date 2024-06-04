import { Component, OnChanges, OnInit,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, MatSlideToggleModule, NavComponent, LoginComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pruebaAngular181';

  mySignalValue = signal(3);
  mySignal  = signal(5);
  login = true;

ngOnInit(): void {


    // Signals are getter functions - calling them reads their value.
    console.log('The count is: ' + this.mySignalValue());

    this.mySignalValue.update(value => value + 1)
    console.log('The count is: ' + this.mySignalValue());
}

setNewValue() {

  this.mySignal.set(6);
  
  }

  updateValue() {

    const currentValue = this.mySignal();
    
    this.mySignal.set(10);
    
    }


}
