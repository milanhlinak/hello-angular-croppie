import { HelloAngularCroppiePage } from './app.po';

describe('hello-angular-croppie App', () => {
  let page: HelloAngularCroppiePage;

  beforeEach(() => {
    page = new HelloAngularCroppiePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
