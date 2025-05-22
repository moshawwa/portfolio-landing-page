import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { CSSProperties } from "react";

const Header = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/works", label: "Works" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const styles: Record<string, CSSProperties> = {
    header: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    navLink: {
      position: 'relative' as const,
      color: '#333',
      textDecoration: 'none',
      padding: '0.5rem 1rem',
      transition: 'color 0.3s ease',
    },
    activeLink: {
      color: '#007bff',
    },
  };

  return (
    <motion.header
      className="fixed-top"
      style={styles.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <NavLink className="navbar-brand fw-bold" to="/">
              Mohammed
              </NavLink>
          </motion.div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.path}
                  className="nav-item"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
              <NavLink
                className={({ isActive }) =>
                      `nav-link nav-link-custom ${isActive ? 'active' : ''}`
                }
                    to={item.path}
                    style={styles.navLink}
              >
                    {item.label}
              </NavLink>
                </motion.li>
              ))}
          </ul>
          </div>
        </div>
      </nav>

      <style>
        {`
          .nav-link-custom {
            color: #333;
            transition: color 0.3s ease;
          }

          .nav-link-custom:hover {
            color: #007bff !important;
          }
          
          .nav-link-custom.active {
            color: #007bff !important;
          }
          
          .nav-link-custom.active::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 30px;
            height: 2px;
            background: #007bff;
            border-radius: 2px;
          }
        `}
      </style>
    </motion.header>
  );
};

export default Header;
