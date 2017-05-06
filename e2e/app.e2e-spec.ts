import { SondagePage } from './app.po';

describe('sondage App', () => {
  let page: SondagePage;

  beforeEach(() => {
    page = new SondagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
