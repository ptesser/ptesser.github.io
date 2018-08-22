import { NgTemplateAndContainerModule } from './ng-template-and-container.module';

describe('NgTemplateAndContainerModule', () => {
  let ngTemplateAndContainerModule: NgTemplateAndContainerModule;

  beforeEach(() => {
    ngTemplateAndContainerModule = new NgTemplateAndContainerModule();
  });

  it('should create an instance', () => {
    expect(ngTemplateAndContainerModule).toBeTruthy();
  });
});
