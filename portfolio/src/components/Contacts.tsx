const Contacts = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-7">
          <h2>Contact Information</h2>
          <div className="ms-4 mt-4">
            <p>
              <strong style={{ color: "#FF6464" }}>Name:</strong> Mohammed Hazem
              Rebhi AL-Shawwa
            </p>
            <p>
              <strong style={{ color: "#FF6464" }}>Email:</strong>{" "}
              mohammedshawa10@gmail.com
            </p>
            <p>
              <strong style={{ color: "#FF6464" }}>Phone:</strong> (+972)
              59-7802-445
            </p>
            <p>
              <strong style={{ color: "#FF6464" }}>Address:</strong> 123 Main
              Street, City, State, ZIP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
