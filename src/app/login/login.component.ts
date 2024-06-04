import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SvgComponent } from '../svg/svg.component';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatSlideToggleModule, MatInputModule, SvgComponent],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
