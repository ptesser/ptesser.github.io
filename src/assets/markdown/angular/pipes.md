# Angular - Pipes

Implement some basic pipes in shared or in a new pipes module.

Use it in the main page of the application for test.

Create a page for pipes exercises.
So we need to

- create a pipes module inside pages and then create a pipes component `ng g component pages/pipes/pipes`
- create a pipes routing module at the same level that declares the routes for this page `ng g module pages/`

Pipes could be pure (default) or impure (setting `pure: false` property inside decorator object).
Since the pipe is pure it means that there’s no internal state and the pipe can be shared.

If a pipe is impure and has internal state the same parameters do not guarantee that same output. It means that Angular is forced to trigger transform function on a pipe instance on every digest.

So if a pipe is pure we know that it’s output (through transform method) is strictly determined by the input parameters. If the input parameters don’t change the output won’t change. This reasoning allows Angular to optimize the pipe and call transform method only when input parameters change.

A good example of impure pipe is the AsyncPipe from `@angular/common package`. This pipe has internal state that holds an underlying subscription created by subscribing to the observable passed to the pipe as a parameter. 

The other two impure pipes are `JsonPipe` and `SlicePipe`. Angular puts an additional restriction on a pipe to be considered pure — the input to the pipe cannot be mutable. If the input is mutable, a pipe need to be re-evaluated on every digest because an input object can be mutated without changing the object reference.

### References

- https://blog.angularindepth.com/the-essential-difference-between-pure-and-impure-pipes-and-why-that-matters-999818aa068