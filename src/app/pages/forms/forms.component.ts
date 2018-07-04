import { Component, OnDestroy } from '@angular/core';
import { User, SexEnum } from '../../models/user';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

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

/* Custom Validators */
// sync
export function isLength(length: number): ValidatorFn {
  return (control: AbstractControl) => {
    return control.value.length !== length
      ? { 'isDifferentLength': { value: control.value } } // is error
      : null; // is valid
  };
}

// async
export function isLengthAsync(length: number): ValidatorFn {
  return (control: AbstractControl) => {
    return new Observable((observer) => {
      if (control.value.length !== length) {
        observer.next({ 'isDifferentLength': { value: control.value } }); // is error
      } else {
        observer.next(null);
      }
      observer.complete();
    });
  };
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnDestroy {

  readonly countries = countries;
  readonly sexss = sexss;

  userTemplateDriven = new User();
  userDataDriven = new User();

  // 3 parameters: initial data value, an array of validators, and an array of async validators
  usernameD = new FormControl(); // simple form control bind to an <input> el using [formControl]=""

  signupSimpleDataDrivenForm = new FormGroup({
    usernameD: new FormControl(),
  });

  signupDataDrivenForm: FormGroup;

  // Declare subscription to dispose them on destroy
  usernameControlSubscription: Subscription = null;

  constructor(
    private readonly formBuilder: FormBuilder,
  ) {
    this.createDataDrivenForm();
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
  createDataDrivenForm() {
    this.signupDataDrivenForm = this.formBuilder.group({
      username: [ null, [ Validators.required ], [ isLengthAsync(3) ] ], // or array of valdiators
      email: [ null, [ Validators.required, Validators.email ] ],
      sex: [ null, [ Validators.required ] ],
      country: [ null, [ Validators.required ] ],

    });

    // Previously, you created a control and initialized its value at the same time.
    // You can also initialize or reset the values later with the setValue() and patchValue() methods.

    // subscribe to values changes
    const usernameControl = this.signupDataDrivenForm.get('username');
    this.usernameControlSubscription = usernameControl.valueChanges.subscribe((res) => {
      console.log('username change', res);
    });
  }

  revertDataDrivenForm() {
    this.signupDataDrivenForm.reset();
  }

  onSubmitDataDriven() {
    if (this.signupDataDrivenForm.valid) {
      console.log('sumbit template driven form success', this.signupDataDrivenForm.value);
    } else {
      console.warn('submit template driven form error', this.signupDataDrivenForm.value);
    }
  }

  ngOnDestroy() {
    this.usernameControlSubscription.unsubscribe();
  }

}
