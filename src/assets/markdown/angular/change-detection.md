# Angular - Change Detection

## Change Detection

Change detection it's use to detect modifies.
It checks between two state (old and new) and notifies the modifies to the DOM. It's execute on the View.

What happens is that Angular at startup time will patch several low-level browser APIs, such as for example `addEventListener`,  which is the browser function used to register all browser events, including click handlers.  Angular will replace addEventListener with a new version.

The following frequently used browser mechanisms are patched to support change detection:

- all browser events (click, mouseover, keyup, etc.)
- `setTimeout()` and `setInterval()`
- Ajax requests

Each Angular component has an associated change detector, which is created at application startup time.
There is no global detector.

In a component we could define different detection strategy:

- `ChangeDetectionStrategy.Default`:  every time something change, this strategy triggers a check in all components. This technique is call **dirty checking** because Angular needs to access to the new value, check with the old one and make the decision if the view should be updated;
- `ChangeDetectionStrategy.OnPush`:  we are saying that we are working with **immutable** data. 
	-  `@Input` references change;
	- An event originated from the component or one of its children;
	- We explicitly run change detection. As **note** here is that running change detection manually is not considered a “hack”,  this is by design and it’s completely valid behavior (in reasonable cases, of course);
	- `ChangeDetectorRef` (detectChanges, markForCheck), `ApplicationRef.tick()`(whole application)
	- Use `async` pipe. See the source code:

```typescript
private _updateLatestValue(async: any, value: Object): void {
  if (async === this._obj) {
    this._latestValue = value;
    this._ref.markForCheck();
  }
}
```

By default, Angular Change Detection works by checking if the value of template expressions have changed. This is done for all components.

Using **immutable** values Angular could avoid to check the entire object just the reference.

Flow is always from parent's components to children.


### References

- https://blog.angular-university.io/how-does-angular-2-change-detection-really-work/
- https://blog.angular-university.io/onpush-change-detection-how-it-works/
- some slides about CD https://www.acadevmy.it/workshops/ng-day-2018/#/13/2
- https://github.com/Angular-RU/change-detection-tree
- https://netbasal.com/a-comprehensive-guide-to-angular-onpush-change-detection-strategy-5bac493074a4
