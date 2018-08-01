import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-run-change-detection',
  template: `
    <h2>Explicity run</h2>
    <h3>We run change detection explicitly</h3>
    <p>{{ count }}</p>
    <p>ApplicationRef.tick(): run change detextion for the whole application.</p>
    <p>markForCheck(): which does NOT trigger change detection.
      Instead, it marks all onPush ancestors as to be checked once, either as part of the current or next change detection cycle</p>
  `,
  styleUrls: ['./run-change-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RunChangeDetectionComponent {

  count = 0;

  constructor(
    private readonly cdr: ChangeDetectorRef,
  ) {
    setTimeout(() => {
      this.count = 5;
      this.cdr.detectChanges();
    }, 1000);
  }

}
