import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Phone } from './phoneNumber';
@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css'],
})
export class Question2Component implements OnInit {
  phoneNumber = new Phone();
  numberArray = [];
 
  constructor() {}

  ngOnInit(): void {
    this.numberArray.push(this.phoneNumber);
  }

  showNumber =[];
  onSubmit() {
    this.showNumber = this.numberArray;
    console.log(this.showNumber);
  }

  addMoreNumber() {
    this.phoneNumber = new Phone();
    this.numberArray.push(this.phoneNumber);
  }
}
