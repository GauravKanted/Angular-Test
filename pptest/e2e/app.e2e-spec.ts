import { PptestPage } from './app.po';

describe('pptest App', function() {
  let page: PptestPage;

  beforeEach(() => {
    page = new PptestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
