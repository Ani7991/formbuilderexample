import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  register: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.register = this.formBuilder.group({
          username: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(32)]],
          confirmPassword: ['', Validators.required],
         })
       
  }
    onSubmit() {
      this.submitted = true;
    if (this.register.invalid) {
          return;
      }


  }

  onReset() {
      this.submitted = false;
      this.register.reset();
  }
  get f() { return this.register.controls; }
}

