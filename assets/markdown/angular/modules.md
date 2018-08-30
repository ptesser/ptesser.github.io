# Angular - Modules

`NgModules` configure the injector and the compiler and help organize related things together.

Create a new module for all pages and then a module for each page that we want to navigate to allow and make easily lazy loading.

Before start to do this we will create a module for shared for commons components, ui, services, directives and pipes.

- `ng g module shared<services, ui, directives, pipes>`

Then

1. `ng g module pages`