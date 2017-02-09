import { GmailWebPage } from './app.po';

describe('gmail-web App', function() {
  let page: GmailWebPage;

  beforeEach(() => {
    page = new GmailWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
