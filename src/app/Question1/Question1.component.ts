import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  givenArray = [2,3,10,15,26,35,50,63,82];
  data;

  dataForm = this.formBuilder.group({
    number: ['']
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  getData() {
    if(this.dataForm.value.number>=0&&this.dataForm.value.number<9){
      this.data = this.givenArray[this.dataForm.value.number];
    }
    else{
      this.data = "Index Out of Range";
    }
  }

}
