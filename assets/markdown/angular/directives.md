# Angular - Directives

## Structural

This directives manage HTML layout. They shape or reshape the DOM's structure. Like all directives you have to apply it on an host element.

Generally structural's directives use asterisk syntax.
This is a convenience notation and the string is a microsyntax rather than the usual template expression. Angular desugars this notation into a marked-up  `<ng-template>` that surrounds the host element and its descendents.

Example:

1. **Switch**

```
<div [ngSwitch]="hero?.emotion">
  <app-happy-hero *ngSwitchCase="'happy'" [hero]="hero"></app-happy-hero>
  <app-sad-hero *ngSwitchCase="'sad'" [hero]="hero"></app-sad-hero>
  <app-confused-hero *ngSwitchCase="'app-confused'" [hero]="hero"></app-confused-hero>
  <app-unknown-hero *ngSwitchDefault [hero]="hero"></app-unknown-hero>
</div>
``` 

2. **If**

```
<!-- contract -->

<!-- expand -->
<ng-template [ngIf]="hero">
  <div class="name">{{ hero.name }}</div>
</ng-template>
```

3. **For**

```
<!-- contract -->
<div *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById" [class.odd]="odd">
  ({{ i }}) {{ hero.name }}
</div>
<!-- expand -->
<ng-template ngFor let-hero [ngForOf]="heroes" let-i="index" let-odd="odd" [ngForTrackBy]="trackById">
  <div [class.odd]="odd">({{ i }}) {{ hero.name }}</div>
</ng-template>

```

## Attribute


## exportAs option


## References

- https://alligator.io/angular/viewchild-access-component/
- https://medium.com/@tkssharma/understanding-viewchildren-viewchild-contentchildren-and-contentchild-b16c9e0358e
- https://alligator.io/angular/hostbinding-hostlistener/
- https://netbasal.com/the-power-of-structural-directives-in-angular-bfe4d8c44fb1
- https://angular.io/guide/structural-directives#asterisk
- https://netbasal.com/angular-2-take-advantage-of-the-exportas-property-81374ce24d26