import { CreateJqwidgetsAngularAppPage } from './app.po';

describe('angular-orderdetails App', () => {
  let page: CreateJqwidgetsAngularAppPage;

  beforeEach(() => {
    page = new CreateJqwidgetsAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
