import { WhatWeDoPage } from './app.po';

describe('what-we-do App', () => {
  let page: WhatWeDoPage;

  beforeEach(() => {
    page = new WhatWeDoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
