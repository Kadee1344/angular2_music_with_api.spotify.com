import { Angular2MusicPage } from './app.po';

describe('angular2-music App', function() {
  let page: Angular2MusicPage;

  beforeEach(() => {
    page = new Angular2MusicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
