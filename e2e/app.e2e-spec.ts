import { MyExeAppPage } from './app.po';

describe('my-exe-app App', function() {
  let page: MyExeAppPage;

  beforeEach(() => {
    page = new MyExeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
