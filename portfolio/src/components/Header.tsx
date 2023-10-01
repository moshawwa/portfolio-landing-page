import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div>
          <a className="navbar-brand" href="#">
            <BsPersonFill size={32} />
          </a>
        </div>
        <div>
          <ul>
            <li>
              <Link
                className="text-decoration-none"
                style={{ color: "black", fontWeight: "bold" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-decoration-none"
                style={{ color: "black", fontWeight: "bold" }}
                to="/works"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                className="text-decoration-none"
                style={{ color: "black", fontWeight: "bold" }}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
