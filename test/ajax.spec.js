import ajax from "../client/app/utils/ajax";

describe("utils: ", () => {
  describe("ajax", () => {
    let server;
    before(() => server = sinon.fakeServer.create());
    after(() => server.restore());

    it("should GET data", done => {
      ajax("GET", "/")
        .then(res => {
          res = JSON.parse(res);
          res.data.should
            .have.property("some key", "some value");

          done();
        })
        .catch(err => done(err));
    
      server.requests[0].respond(
        200,
        { "Content-Type": "application/json" },
        JSON.stringify({
          "some key": "some value",
          "another key": "another value"
        })
      );
    });
  });
});
