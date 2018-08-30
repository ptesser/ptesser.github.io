# Typescript / ES6

### Destructuring

It's an operation that allows to extract information from an array/object in distinct variables.
At the left of the assignment are defined which elements extract from the original variable (on the right).

For example:

```
const object = { prop1: 1, prop2: 2 };
const { prop1, prop2 } = object;
// you could also do the same thing with different variable's names
const { prop1: newProp1 } = object;

// destructure function params
function methodOne({ name }) {
	return name;
}

const user = { name: 'Paolo', lastName: 'Tesser' };
console.log(methodOne(user)); // output: 'Paolo'
```

In the first part of the example I'm creating two variables `prop1` and `prop2` with the value contained in the variable `object`.

With array we have:

```
const array = [1, 2];
const [val1, val2] = array;
// you could also assign default value in case of the value in the array is undefined
const [val1, val2, val3 = 1 ] = array;

```

### Spread Operator

Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

Some examples:

```
// simple clone object
const newObj = { ...oldObject };
// clone object and override some properties
const newObj = { ...oldObject, propertyNameToOverride: val };

// clone object and set default for some properties
const newObj = { defaultProperty, ...oldObject };
```