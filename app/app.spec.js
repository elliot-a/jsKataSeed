
describe("My Kata", function() {

  var app;

  beforeEach(function() {
    app = new App();
  });

  it("contains spec with an expectation", function() {

    expect(app.test).toBe("test string");

  });

});