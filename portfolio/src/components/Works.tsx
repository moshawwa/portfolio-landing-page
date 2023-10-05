const Works = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="card" style={{ width: "18rem" }}>
              <img
                style={{ padding: "15px" }}
                src="/stack-of-books.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Book Gallery</h5>
                <p className="card-text">
                  This is a simple gallery of books that I have read and
                  enjoyed. It was built using React, Redux, Asp.net, Express,
                  MongoDB
                </p>
                <a
                  href="https://book-gallery.vercel.app/"
                  className="btn btn-primary"
                >
                  visit website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
