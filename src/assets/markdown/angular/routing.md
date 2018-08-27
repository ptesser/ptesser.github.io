# Angular - Routing

Best practice is to load and configure a top level module dedicated to this role, import than in `AppModule`.

- `ng generate module app-routing --flat --module=app`

Then we have to generate a routing module for each page’s module and import the module in the page module related.

To allow User routing easily we could create a navbar in the shared module and add it in the main app page.

Use `—routing` flag allows to create two module, the basic one and one to use for routes.

`RouterModule` exposed by Angular gives you:

- a component (`router-outlet`)
- a directive (`routerLink`)
- also services (`ActivatedRoute` to get URL params, Router to navigate ...)

------------------------

It is possible to use routing in different way.

Manage all in a single file centralized, loading component directly:

	{ path: '**', component: PageNotFoundComponent }

Or dividing route's files, each for a single submodule. (using Lazy Loading)

	{ path: 'user/:id_user', loadChildren: './pages/user-details/user-details.module#UserDetailsModule' },

In this case, module  `UserDetails` should be take care of configure his path properties internally.

In the example above we seen `**` path.
The `**` path in the last route is a wildcard.
The router will select this route if the requested URL doesn't match any paths for routes defined earlier in the configuration. This is useful for displaying a "404 - Not Found" page or redirecting to another route.

**N.B. The order of the routes in the configuration matters and this is by design. The router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes.**

### How routers works

1. it reads the browser URL the user wants to navigate to
2. it applies a URL redirect (if one is defined)
3. it figures out which router state corresponds to the URL
4. it runs the guards that are defined in the router state
5. it resolves the required data for the router state
6. it activates the Angular components to display the page
7. it manages navigation and repeats the steps above when a new page is requested.

### Enabling Routing

1. create a routing configuration that defines the possible states for our application
2. import the routing configuration into our application
3. add a router outlet to tell Angular Router where to place the activated components in the DOM.

### Routes properties

- **path**: string, path to match the URL
- **patchMatch**: string, how to match the URL. Angular Router has two matching strategies:
		-  **prefix**: default, matches when the URL starts with the value of path
		-  **full**: matches when the URL equals the value of path.
- **component**: class reference, component to activate when this route is activated
- **redirectTo**: string, URL to redirect to when this route is activated
- **data**: static data to assign to route
- **resolve**: dynamic data to resolve and merge with data when resolved
- **children**: child routes.
- **loadChildren**: child module to load (used for lazy loading)

There are two ways to create a routing module:

- `RouterModule.forRoot(routes)`: creates a routing module that includes the router directives, the route configuration and the router service
- `RouterModule.forChild(routes)`: creates a routing module that includes the router directives, the route configuration but not the router service.

The `RouterModule.forChild()` method is needed when your application has multiple routing modules.
This is done to avoid multiple instances of router service that could be lead to some issues.

### Auxiliary Route

Url: `/path(name='left')`

```
<router-outlet></router-outlet>
<router-outlet name='left'></router-outlet>
<router-outlet name='right'></router-outlet>
```

### Router Guards

The router supports multiple guard interfaces:

- `CanActivate` to mediate navigation to a route.
- `CanActivateChild` to mediate navigation to a child route.
- `CanDeactivate` to mediate navigation away from the current route.
- `Resolve` to perform route data retrieval before route activation.
- `CanLoad` to mediate navigation to a feature module loaded asynchronously.

Here an example of `CanActivate` guards:

```
Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']); // navigate programmatically to a route
      return false;
    }
    return true;
  }
}
```

Then add to the configurations route:

```
export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard] 
  },
  { path: '**', redirectTo: '' }
];
```

### Resolver

In some cases we want to have data before activate the component matched to the route.
We will use a resolver:

```
Injectable()
export class <Name>Resolver implements Resolve<Observable<any[]>> {

  constructor(
    private <name>DataService: <Name>DataService
  ) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any[]> {
    return this.<name>DataService.getAll();
  }
}
```

If the `resolve()` method returns a promise or an observable Angular Router will wait for the promise or observable to complete before it activates the route’s component.

**N.B.** In case of an Observable, it's required to call `first()` method, because Observable staying open until someone complete it, so after the first call used to retrieve the data, we have to complete it calling that method.

When calling the `resolve()` method, Angular Router conveniently passes in the **activated route snapshot** and the router state snapshot to provide us with access to data (such as route parameters or query parameters) we may need to resolve the data.

```
constructor(
  private todoDataService: TodoDataService,
  private route: ActivatedRoute
) {
}

public ngOnInit() {
  this.route.data
    .map((data) => data['todos'])
    .subscribe(
      (todos) => {
        this.todos = todos;
      }
    );
  // or
  this.todos = this.route.snapshot.data.todos;
}
```

### Preload Strategy

Preload strategy is configurable in 3 ways:

`RouterModule.forRoot(routes, { preloadingStrategy: <something> })`

- **NoPreloading** — no modules are preloaded, this is the default behaviour
- **PreloadAllModules** — all modules are preloaded as fast as possible
-  Custom class that extends `PreloadingStrategy` as the example below:

```
export class AppPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        const loadRoute = (delay) => delay
            ? timer(150).pipe(flatMap(_ => load()))
            : load();
        return route.data && route.data.preload 
            ? loadRoute(route.data.delay)
            : of(null);
      }
}
```

`route.data.delay/preload` is a value defined in `data` property on Routes object.

Need to be provided in  routing module `providers`.

### References

- https://www.sitepoint.com/component-routing-angular-router/
- https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
- http://onehungrymind.com/named-router-outlets-in-angular-2/
- Auxiliary routes https://blog.angular-university.io/angular2-router/
- https://www.techiediaries.com/angular-router-multiple-outlets/#Create_Named_Router_Outlet
- lazy loading (loading strategy) https://medium.com/@adrianfaciu/custom-preloading-strategy-for-angular-modules-b3b5c873681a