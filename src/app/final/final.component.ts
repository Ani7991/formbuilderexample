import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  
  addForm: FormGroup;
  submitted= false;
  
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
  
  this.addForm= this.formBuilder.group({   
    city:['',Validators.required],
    street:['',Validators.required],
    apartment:['',Validators.required],
    phoneNumber:['',Validators.required]
})
}
onSubmit() {
  this.submitted = true;
if (this.addForm.invalid) {
      return;
  }
}
get f() { return this.addForm.controls; }

openCard=false
addBilling = false
@Output() cIsActive = new EventEmitter()
active = true
isSubmited= false
 cardL = []

goBack(){
  this.cIsActive.emit(this.active=false)
}
addCard(){
  this.cardL.push("1")
}


}
