# Angular - Forms

## Template Driven

In template driven forms, if you've imported FormsModule, you don't have to do anything to the form tag in order to make use of FormsModule.

What NgForm directive? You didn't add an NgForm directive.
Angular did. Angular automatically creates and attaches an NgForm directive to the <form> tag.
The NgForm directive supplements the form element with additional features. It holds the controls you created for the elements with an ngModel directive and name attribute, and monitors their properties, including their validity. It also has its own valid property which is true only if every contained control is valid.

It also remove native browser input validation applying `novalidate` attribute to each forms.

To be able to use `[(ngModel)]=` syntax in a form we need also to set the `name` attribute on the related `<input>`.

### Custom ControlValueAccessor [high]


## Data Driven

### Async Validators [medium]

Async Validators are trigger after all sync validators are true.

Example without external service:

```
function verifyEmail(email: string): AsyncValidatorFn {
  return ((control: FormControl) => {
    return new Observable((observer) => {
      setTimeout(() => {
	    // TODO: Change with email pattern
        if (/TODO/.test(control.value)) {
          observer.next(null);
        } else {
          observer.next({ 'email': { value: control.value } });
        }
        observer.complete();
      }, 2000);
    });
  });
}
```

Example with a real service:
```

```

## References

- https://alligator.io/angular/reactive-forms-formarray-dynamic-fields/
- https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html
- https://codecraft.tv/courses/angular/advanced-topics/basic-custom-validators/
- https://medium.com/@agoiabeladeyemi/template-driven-forms-in-angular-4a3a5ad960de