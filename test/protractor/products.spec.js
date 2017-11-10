describe('products homepage', function(){
  it('should show a homepage', function(){
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Product Database Application');
  });
});