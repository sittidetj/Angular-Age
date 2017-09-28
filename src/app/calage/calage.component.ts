import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calage',
  templateUrl: './calage.component.html',
  styleUrls: ['./calage.component.css']
})
export class CalageComponent implements OnInit {
  dobYear: number;
  datetoYear: number;
  dobCal: number;
  age: number;
  constructor() {

   }

  ngOnInit() {

  }
  private onSubmit(f: NgForm) {
    console.log('onSubmit : ', f.value);
  }
  private onSelect(f: NgForm): void {
    console.log('onSelect : ', f.value);
    const fValue = f.value;
    const age: number = this.dobCal;
    this.dobYear = new Date(fValue.dob).getFullYear();
    this.datetoYear = new Date(fValue.dateto).getFullYear();
    this.dobCal = this.datetoYear - this.dobYear;

  }
}
