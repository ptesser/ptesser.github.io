# RxJS

### Observable

Remember that observables are lazy — if we want to pull a value out of an observable, we must subscribe().

#### MergeMap (flattering operator)

It merge/combine two Observable together, the `inner` and the `outer` when the `inner` emits a value.

```

// outer
const obs1 = Observable.fromEvent(inputElement1, 'keyup');
// inner
const obs2 = Observable.fromEvent(inputElement2, 'keyup');

obs1.mergeMap((event1) => {
	return obs2.map((event2) =>
		event1.value + event2.value
	)
}).subscribe();

```


#### SwitchMap (flattering operator)

Main difference in the implementation with `merge` is that `innerSubscription` is `unsubscribe` so "first" Observable will be canceled and replaced with the last Observable.

### BehaviorSubject

It is an Observable and a Observer. It keeps a state value inside that could be update calling `next()` method and could be read subscribing to it using `subscribe()` method.


### High order Observable

A higher order observable is just a fancy name for an observable that emits observable.


### References
- https://netbasal.com/understanding-mergemap-and-switchmap-in-rxjs-13cf9c57c885
- https://netbasal.com/rxjs-six-operators-that-you-must-know-5ed3b6e238a0
- https://netbasal.com/javascript-observables-under-the-hood-2423f760584