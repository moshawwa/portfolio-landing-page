import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/moshawwa",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/in/your-profile",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter size={24} />,
      url: "https://twitter.com/your-handle",
      label: "Twitter",
    },
  ];

  return (
    <motion.footer
      className="py-5 mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="mb-4">Let's Connect</h3>
              <p className="lead mb-4">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
            </motion.div>

            <motion.div
              className="d-flex justify-content-center gap-4 mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="social-icon-wrapper">
                    {link.icon}
                    <span className="visually-hidden">{link.label}</span>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-muted mb-0">
                © {new Date().getFullYear()} Mohammed Al-Shawwa. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style>
        {`
          .social-icon-wrapper {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #f8f9fa;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #212529;
            transition: all 0.3s ease;
          }

          .social-icon-wrapper:hover {
            background: #007bff;
            color: white;
          }
        `}
      </style>
    </motion.footer>
  );
};

export default Footer;
