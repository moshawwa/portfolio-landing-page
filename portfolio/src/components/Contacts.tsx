import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { HiOutlineMailOpen, HiLocationMarker } from "react-icons/hi";

const Contacts = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <h2>Contact Information</h2>

          <div className="row d-flex flex-wrap">
            <div
              className="card"
              style={{ width: "18rem", margin: "12px", flexGrow: 1 }}
            >
              <div
                className="card-icon"
                style={{ margin: "30px", color: "#FF6464" }}
              >
                <HiOutlineMailOpen size={250} />
              </div>

              <div className="card-body">
                <p className="cart-title">Email</p>
                <p className="card-text">mohammedshawa10@gmail.com</p>
              </div>
            </div>

            <div
              className="card"
              style={{ width: "18rem", margin: "12px", flexGrow: 1 }}
            >
              <div
                className="card-icon"
                style={{ margin: "30px", color: "#FF6464" }}
              >
                <BsFillTelephoneFill size={250} />
              </div>

              <div className="card-body">
                <p className="cart-title">Phone Number</p>
                <p className="card-text">+(972) 59-7802-445</p>
              </div>
            </div>

            <div
              className="card"
              style={{ width: "18rem", margin: "12px", flexGrow: 1 }}
            >
              <div
                className="card-icon"
                style={{ margin: "30px", color: "#FF6464" }}
              >
                <HiLocationMarker size={250} />
              </div>

              <div className="card-body">
                <p className="cart-title">Location</p>
                <p className="card-text">
                  Al Yarmouk st behind Alzaharnah building Gaza City -Gaza Strip
                  Palestine
                </p>
              </div>
            </div>

            <div
              className="card"
              style={{ width: "18rem", margin: "12px", flexGrow: 1 }}
            >
              <div
                className="card-icon"
                style={{ margin: "30px", color: "#FF6464" }}
              >
                <BsWhatsapp size={250} />
              </div>

              <div className="card-body">
                <p className="cart-title">whatsapp number</p>
                <p className="card-text">+(972) 56-7802445</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
