import { Component, OnInit } from '@angular/core';
import { User, SexEnum } from '../../models/user';
import { NgForm, FormGroup } from '@angular/forms';

// We could create an interface also for country model
const countries = [
  'Italy',
  'England',
  'German',
  'USA',
];

const sexss = [{
  label: 'Male',
  value: SexEnum.Male,
}, {
  label: 'Female',
  value: SexEnum.Female,
}];

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  readonly countries = countries;
  readonly sexss = sexss;

  userTemplateDriven = new User();
  userDataDriven = new User();

  constructor() {
  }

  ngOnInit() {
  }

  // Template Driven
  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log('sumbit template driven form success', form.value);
    } else {
      console.warn('submit template driven form error', form.value);
    }
  }

  // Data Driven

}
