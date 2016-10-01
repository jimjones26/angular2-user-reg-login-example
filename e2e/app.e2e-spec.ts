import { Angular2UserRegLoginExamplePage } from './app.po';

describe('angular2-user-reg-login-example App', function() {
  let page: Angular2UserRegLoginExamplePage;

  beforeEach(() => {
    page = new Angular2UserRegLoginExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
