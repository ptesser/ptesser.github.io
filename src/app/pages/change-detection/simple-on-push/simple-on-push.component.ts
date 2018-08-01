import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-simple-on-push',
  template: `
    <h2>Simple On Push</h2>
    <h3>The Input reference changes</h3>
    <p>{{ object.property }}</p>
    {{ runChangeDetection }}
  `,
  styleUrls: ['./simple-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleOnPushComponent {

  @Input() object;

  get runChangeDetection() {
    console.log('Checking the view in simple on push component');
    return true;
  }

}
