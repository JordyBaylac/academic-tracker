import { AcademicTrackerPage } from './app.po';

describe('academic-tracker App', () => {
  let page: AcademicTrackerPage;

  beforeEach(() => {
    page = new AcademicTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
