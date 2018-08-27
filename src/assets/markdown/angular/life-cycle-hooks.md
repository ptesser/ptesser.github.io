# Angular - Lifecycle Hooks

<table width="100%">
  <col width="20%"></col>
  <col width="80%"></col>
  <tr>
    <th>Hook</th>
    <th>Purpose and Timing</th>
  </tr>
  <tr style='vertical-align:top'>
    <td>
      <code>ngOnChanges()</code>
    </td>
    <td>

      Respond when Angular (re)sets data-bound input properties.
      The method receives a `SimpleChanges` object of current and previous property values.

      Called before `ngOnInit()` and whenever one or more data-bound input properties change.

    </td>
  </tr>
  <tr style='vertical-align:top'>
    <td>
      <code>ngOnInit()</code>
    </td>
    <td>

      Initialize the directive/component after Angular first displays the data-bound properties
      and sets the directive/component's input properties.

      Called _once_, after the _first_ `ngOnChanges()`.

    </td>
  </tr>
  <tr style='vertical-align:top'>
    <td>
      <code>ngDoCheck()</code>
    </td>
    <td>

      Detect and act upon changes that Angular can't or won't detect on its own.

      Called during every change detection run, immediately after `ngOnChanges()` and `ngOnInit()`.

    </td>
  </tr>
  <tr style='vertical-align:top'>
    <td>
      <code>ngAfterContentInit()</code>
    </td>
    <td>

      Respond after Angular projects external content into the component's view / the view that a directive is in.

      Called _once_ after the first `ngDoCheck()`.

    </td>
  </tr>
  <tr style='vertical-align:top'>
    <td>
      <code>ngAfterContentChecked()</code>
    </td>
    <td>

      Respond after Angular checks the content projected into the directive/component.

      Called after the `ngAfterContentInit()` and every subsequent `ngDoCheck()`.

    </td>
  </tr>
  <tr style='vertical-align:top'>
    <td>
      <code>ngAfterViewInit()</code>
    </td>
    <td>

      Respond after Angular initializes the component's views and child views / the view that a directive is in.

      Called _once_ after the first `ngAfterContentChecked()`.

    </td>
  </tr>
  <tr style='vertical-align:top'>
    <td>
      <code>ngAfterViewChecked()</code>
    </td>
    <td>

      Respond after Angular checks the component's views and child views / the view that a directive is in.

      Called after the `ngAfterViewInit` and every subsequent `ngAfterContentChecked()`.

    </td>
  </tr>
  <tr style='vertical-align:top'>
    <td>
      <code>ngOnDestroy()</code>
    </td>
    <td>

      Cleanup just before Angular destroys the directive/component.
      Unsubscribe Observables and detach event handlers to avoid memory leaks.

      Called _just before_ Angular destroys the directive/component.

    </td>
  </tr>
</table>