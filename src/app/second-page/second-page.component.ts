import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Validators ,FormBuilder, FormGroup,FormArray} from '@angular/forms';
@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  addForm: FormGroup;
  items:FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  
  this.addForm = this.formBuilder.group({    
    cardNumber:['',Validators.required],
    owner:['',Validators.required],
    cvv:['',Validators.required],
    expiration:['',Validators.required], 
    city:['',Validators.required],
    street:['',Validators.required],
    apartment:['',Validators.required],
    phoneNumber:['',Validators.required],
    items: this.formBuilder.array([ this.createItem() ])
})}

createItem(): FormGroup {
  return this.formBuilder.group({
    cardNumber:['',Validators.required],
    owner:['',Validators.required],
    cvv:['',Validators.required],
    expiration:['',Validators.required], 
  });
}
addItem(): void {
  this.items = this.addForm.get('items') as FormArray;
  this.items.push(this.createItem());
}

openCard=false
addBilling = false
@Output() cIsActive = new EventEmitter()
active = true
isSubmited= false


goBack(){
  this.cIsActive.emit(this.active=false)
}

}