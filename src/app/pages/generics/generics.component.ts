import { Component, OnInit } from '@angular/core';

/* Hello Word of generics with identity function */

// Note: useing `any` (that accept all types) we are losing information about what type is.
function identityWrong(arg: any): any {
  return arg;
}

// We can now see the same type is used for the argument and the return type.
// This allows us to traffic that type information in one side of the function and out the other.
function identity<T>(arg: T): T {
  return arg;
}

// <T> -> takes a type parameter T
// args: T[] -> arg is a an array of T
// : T[] -> return an array of T
function arrayIdentity<T>(arg: T[]): T[] {
  // inside here `arg` has all method of an array
  return arg;
}

/* Interface */

@Component({
  selector: 'app-generics',
  templateUrl: './generics.component.html',
  styleUrls: ['./generics.component.scss'],
})
export class GenericsComponent {

  constructor() {
    const number = 42;
    const identityNumberWrong = identityWrong(number); // inference type is `any`
    const identityNumber = identity(number); // infered type is `42`, or `<number>identity(number)`


  }


}
