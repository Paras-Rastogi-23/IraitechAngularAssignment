import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {
  numberForm : FormGroup
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.numberForm = this.formBuilder.group({
      phoneNumber : this.formBuilder.array([this.addPhoneform()])
    })
  }

  addPhoneform() {
    return this.formBuilder.group({
      number: ['']
    })
  }
  createForm(){

  }

  onSubmit(){
    console.log(this.numberForm.value);
  }

  addMoreNumber() {
    (<FormArray>this.numberForm.get('number')).push(this.addPhoneform());
  }

}
