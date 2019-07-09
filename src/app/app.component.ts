import { Component } from '@angular/core';
import { flight } from './flight';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-start';

  submitForm(){
    console.log("submitted form successfully");
  }
}
