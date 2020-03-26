import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

 signupForm = this.fb.group({
    firstName: ['sandip'],
    lastName: ['ghadge'],
    smoke: [true],
    lucky_number:['']
  });

  onSubmit(){
    console.log('valu', this.signupForm.value)
  }
}
