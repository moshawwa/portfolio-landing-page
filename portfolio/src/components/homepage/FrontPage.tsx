const FrontPage = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "135px" }}>
        <div className="row">
          <div className="col-7" style={{ marginTop: "135px" }}>
            <h2>Hi I am Mohammed Al-Shawwa</h2>
            <h4>Software Engineer react.js developer</h4>
            <p>
              I strongly believe my knowledge is my destiny. i have always loved
              trying things out for myself. Some people find that science is
              just a way to get a good and comfortable job. in my opinion.
              science is just about curiosity to find out more. and never to
              stop
            </p>
            <button className="btn btn-outline-danger">Download Resume</button>
          </div>
          <div className="col-5">
            <img
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              src="/profile.jpeg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
