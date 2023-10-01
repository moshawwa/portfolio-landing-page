import { NavLink } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div>
          <a className="navbar-brand" href="#">
            <BsPersonFill color="#FF6464" size={32} />
          </a>
        </div>
        <div>
          <ul>
            <li>
              <NavLink
                className="text-decoration-none"
                style={{ color: "black", fontWeight: "bold" }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-decoration-none"
                style={{ color: "black", fontWeight: "bold" }}
                to="/works"
              >
                Works
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-decoration-none active"
                    : "text-decoration-none"
                }
                style={{ color: "black", fontWeight: "bold" }}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
