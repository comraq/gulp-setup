import ajax from "../client/app/utils/ajax";

describe("utils: ", () => {
  describe("ajax", () => {
    let server;
    before(() => server = sinon.fakeServer.create());
    after(() => server.restore());

    it("should GET data", done => {
      ajax({
        method: "GET",
        path: "/"
      }).then(res => {
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

    it("should POST data", done => {
      ajax({
        method: "POST",
        path: "/",
        body: {
          postkey: "post value"
        }
      }).then(res => {
        res = JSON.parse(res);
        expect(res.data.message).to.deep.equal("Success!");
        done();
      })
      .catch(done)
    
      let req = server.requests[1];
      req.requestBody.should.have.property("postkey", "post value");

      req.respond(
        200,
        { "Content-Type": "application/json" },
        JSON.stringify({ message: "Success!" })
      );
    });
  });
});
