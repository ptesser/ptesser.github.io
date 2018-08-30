# Angular - CLI / Build

## CLI

Create an app with routing module.

`ng new <name> --routing`

Adding `scss` as default style.

`ng new <name> --style=scss`

### References

- https://alligator.io/angular/angular-6/
- https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2
- create Angular 5 app using new CLI (Angular 6) https://stackoverflow.com/questions/50305342/how-to-create-angular-5-project-in-angular-cli-6-0-1


## Build

An Angular application consists largely of components and their HTML templates. Before the browser can render the application, the components and templates must be converted to executable JavaScript by an Angular compiler.

Angular offers two ways to compile your application:

- **Just-in-Time (JIT)**, which compiles your app in the browser at runtime
- **Ahead-of-Time (AOT)**, which compiles your app at build time. Using `--aot` flag

**Advantages:**

- With AOT, the browser downloads a pre-compiled version of the application. The browser loads executable code so it can render the application immediately, without waiting to compile the app first;
- The compiler inlines external HTML templates and CSS style sheets within the application JavaScript, eliminating separate ajax requests for those source files;
- The AOT compiler detects and reports template binding errors during the build step before users can see them;
- There's no need to download the Angular compiler if the app is already compiled. The compiler is roughly half of Angular itself, so omitting it dramatically reduces the application payload.

So, the follow commands are different type of build.

- `ng build` :  not a production deployment. Not optimized.
- `ng build --prod`: 
	- **Ahead-of-Time (AOT) Compilation**:  pre-compiles Angular component templates;
	- **Production mode**:  deploys the production environment which enables production mode;
	- **Bundling**:  concatenates your many application and library files into a few bundles;
	- **Minification**:  removes excess whitespace, comments, and optional tokens;
	- **Uglification**:  rewrites code to use short, cryptic variable and function names;
	- **Dead code elimination**:  removes unreferenced modules and much unused code.

- `ng build --prod --build-optimizer`:  when using Build Optimizer the vendor chunk will be disabled by default. You can override this with --vendor-chunk=true.
Total bundle sizes with Build Optimizer are smaller if there is no separate vendor chunk because **having vendor code in the same chunk as app code makes it possible for Uglify to remove more unused code.**
- `ng build --prod --source-map`:  older angular CLI version use `--sourcemaps`

Resources in CSS, such as images and fonts, will be copied over automatically as part of a build. If a resource is less than 10kb it will also be inlined.

### Resources

- https://github.com/angular/angular-cli/wiki/build