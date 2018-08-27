# Angular - Ng Container/Template

The single responsibility principle is the idea that pieces of your app should have one purpose.

The core directives `ng-container, ng-template and ngTemplateOutlet` all combine together to allow us to create highly dynamical and customizable components.

instead of creating specific components allows for components to be easily modified for various use cases without having to modify the component itself!

## Ng Template

Like the name indicates, the ng-template directive represents an Angular template: this means that the content of this tag will contain part of a template, that can be then be composed together with other templates in order to form the final component template.

Angular is already using ng-template under the hood in many of the structural directives that we use all the time: `ngIf, ngFor and ngSwitch`.


`ng-template` tag does not render anything. This is because with the ng-template tag we are simply defining a template, but we are not using it yet.

**Simple ng-template with ngIf**

```
<div class="lessons-list" *ngIf="lessons else loading">
  ... 
</div>

<ng-template #loading>
    <div>Loading...</div>
</ng-template>
```

This is a very common use of the ngIf/else functionality: we display an alternative loading template while waiting for the data to arrive from the backend.

But besides that else template, the use of ngIf also creates a second implicit ng-template!

```
<ng-template [ngIf]="lessons" [ngIfElse]="loading">
  <div class="lessons-list">
    ...
  </div>
</ng-template>

<ng-template #loading>
    <div>Loading...</div>
</ng-template>
```

## Ng Container

Is there a way to apply a structural directive to a section of the page without having to create an extra element?

```
<ng-container *ngIf="lessons">
    <div class="lesson" *ngFor="let lesson of lessons">
        <div class="lesson-detail">
            {{ lesson | json }}
        </div>
    </div>
</ng-container>
```

There is another major use case for the ng-container directive: it can also provide a placeholder for injecting a template dynamically into the page.

We can also take the template itself and instantiate it anywhere on the page, using the `ngTemplateOutlet` directive.

`<ng-container *ngTemplateOutlet="loading"></ng-container>`

The value passed to this directive can be any expression that evaluates into a template reference.

## Template Context

What is visible inside them?

Inside the ng-template tag body, we have access to the same context variables that are visible in the outer template.

But each template can also define its own set of input variables! Actually, each template has associated a context object containing all the template-specific input variables.

```
in the .ts file

templateContext = {
  value: 1,
};

--------

<div>
  <ng-template
    #counterTemplate
    let-counter="value">
    {{ counter }}
  </ng-template>

  <ng-container *ngTemplateOutlet="counterTemplate, context: templateContext"></ng-container>
  <ng-container
    [ngTemplateOutlet]="counterTemplate"
    [ngTemplateOutletContext]="{ value: templateContext.value }">
  </ng-container>

</div>
```

The variable `counter` is visible inside the ng-template body, but not outside

Example of **configurable inputs template** passed from parent:

```
@Component({
    selector: 'tab-container',
    template: `
		<ng-template #defaultTabButtons>
		    <div class="default-tab-buttons">
		        ...
		    </div>
		</ng-template>
		<ng-container 
		  *ngTemplateOutlet="headerTemplate ? headerTemplate: defaultTabButtons">
    
		</ng-container>
		... rest of tab container component ...
`})
export class TabContainerComponent {
    @Input()
    headerTemplate: TemplateRef<any>;
}

```

The end result of this design is that the tab container will display a default look and feel for the tab buttons if no custom template is provided, but it will use the custom template if its available.


## References

- https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/
- https://alligator.io/angular/reusable-components-ngtemplateoutlet/
- http://www.learn-angular.fr/ngcontent-and-selector/
