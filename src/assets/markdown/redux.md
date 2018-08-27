# Angular - Redux

## Redux

![enter image description here](http://www.stellarsolutions.it/wp-content/uploads/2018/01/ngrx-redux-pattern-diagram.png)

Redux organizes your application state in the store, a single data structure in your application. The components of your application read the state of the application from the store. **The store is never mutated directly**. Instead a action is dispatched to a reducer function.
The reducer function creates a **new application state** by combining the old state and the mutations defined by the action.

### Store
The store is a single JS object. To create a store you simple need to a add a TypeScript file to the project and declare a new interface type which contains all the properties you’d like to keep in the store.

**Store/State is readonly.**

### Actions
Actions are plain JS objects that represent something that has happened. Can be compared to events.

### Reducers
A reducer is a function that specifies how the state changes in response to an action.

What’s important to understand is the fact that a reducer function does not modify the state. It always returns a new state object with the modifications included.

A reducer function must always be a pure function. That means that the function must ensure that if the same input is given always the same output is produced.

```
function reducer(state, action) {
    switch (action.type) {
        case: 'INCREMENT':
            return { count: state.count + 1 };
    }
}
```

As every reducer function takes two parameters: state and action. The state is the previous state of the application and action is an object describing the change which has been dispatched.

### With Effects

You can almost think of your Effects as special kinds of reducer functions that are meant to be a place for you to put your async calls in such a way that the returned data can then be easily inserted into the store’s internal state for the application.

![enter image description here](https://cdn-images-1.medium.com/max/1600/1*4NzuvdXYAUImkFpa0BQyIw.png)

### References

- https://medium.com/codingthesmartway-com-blog/angular-and-redux-ecd22ea53492
- https://github.com/ngrx/platform
- https://github.com/btroncone/ngrx-store-localstorage
- https://www.youtube.com/watch?v=N_UQx8dPPkc&list=PLW2eQOsUPlWJRfWGOi9gZdc3rE4Fke0Wv
- https://medium.com/@m3po22/stop-using-ngrx-effects-for-that-a6ccfe186399
- https://medium.com/@webWhizJim/the-basics-of-ngrx-effects-effect-and-async-middleware-for-ngrx-store-in-angular-2-f25587493329