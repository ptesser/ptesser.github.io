# Angular - Services

Services are (mainly) the glue between the application and the server.
We use them to share and centralized data to components.

A Service is a singleton  if is provisioned in only one root point (`app.module`).
If we want duplicate the instance of the service we have to provision it on a component.

```
Component({
	providers: [ NameService ],
	... // other component's properties
})
class NameComponent() { ... }
```

### Interceptor

With interception, you declare interceptors that inspect and transform HTTP requests from your application to the server. The same interceptors may also inspect and transform the server's responses on their way back to the application. Multiple interceptors form a forward-and-backward chain of request/response handlers.

Each interceptor takes the next handler as a second parameter. We need to call it to pass control to the next interceptor in the middleware chain. 

Interceptors exist to examine and mutate outgoing requests and incoming responses. However, it may be surprising to learn that the `HttpRequest` and `HttpResponse` classes are largely immutable. This is for a reason: because the app may retry requests, the interceptor chain may process an individual request multiple times. If requests were mutable, a retried request would be different than the original request. Immutability ensures the interceptors see the same request for each try.

### Examples

#### Adding headers (bearer token)

```
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });

    return next.handle(request);
  }
}
```

### Check response

```
// RXJS 5
export class JwtInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse {
        if (err.status === 401) {
          // redirect to the login route
          // or show a modal
        }
      }
    });
  }
}
```


### Inject interceptors

Because interceptors are (optional) dependencies of the HttpClient service, you must provide them in the same injector (or a parent of the injector) that provides HttpClient. Interceptors provided after DI creates the HttpClient are ignored.

```
@NgModule({
  bootstrap: [AppComponent],
  imports: [...],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
```

**Note** the multi: true option. This required setting tells Angular that HTTP_INTERCEPTORS is a token for a multi provider that injects an array of values, rather than a single value.

### Errors

Sometimes an error occurred during server's communication. `HttpClient` will return an error object instead of a successfull.
You can handle this error.

```
getSomething() {
  return this.http.get<Config>(this.configUrl)
    .pipe(
	  // avoid to return `res` in catch error, but throw an error, because it will be return in the subscribe and not in the catch callback
      catchError(this.handleError)
    );
}

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

```

### References

- https://blog.angularindepth.com/insiders-guide-into-interceptors-and-httpclient-mechanics-in-angular-103fbdb397bf