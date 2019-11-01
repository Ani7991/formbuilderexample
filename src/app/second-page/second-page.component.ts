import { Component, OnInit, Input } from '@angular/core';
import { Validators ,FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  addForm:FormGroup;

  constructor(private formBuilder: FormBuilder) { }
 ngOnInit() {
  this.addForm= this.formBuilder.group({
    cardNumber:['',Validators.required],
    owner:['',Validators.required],
    cvv:['',[Validators.required,Validators.maxLength(3)]],
    expiration:['',[Validators.required,Validators.maxLength(5)]],
  })
 
  }
  @Input() isSubmited :boolean
  get f() { return this.addForm.controls; }
}
