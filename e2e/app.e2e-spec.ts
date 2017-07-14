import { TimesPage } from './app.po';

describe('times App', () => {
  let page: TimesPage;

  beforeEach(() => {
    page = new TimesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
