import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const styles = {
  socialIconWrapper: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#212529',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: '#007bff',
      color: 'white',
    },
  },
  formControl: {
    border: '2px solid #e9ecef',
    transition: 'all 0.3s ease',
    '&:focus': {
      borderColor: '#007bff',
      boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
    },
  },
  primaryButton: {
    background: 'linear-gradient(45deg, #007bff, #0056b3)',
    border: 'none',
  },
};

const Contacts = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container py-5" style={{ marginTop: "100px" }}>
      <motion.div
        className="row justify-content-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="col-md-8 text-center" variants={itemVariants}>
          <h2 className="display-4 mb-4">Get in Touch</h2>
          <p className="lead mb-5">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.div className="col-md-8" variants={itemVariants}>
          <div className="card shadow-lg border-0">
            <div className="card-body p-5">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control form-control-lg"
                    id="message"
                    rows={5}
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <motion.button
                  className="btn btn-primary btn-lg w-100"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>

        <motion.div className="col-md-8 text-center mt-5" variants={itemVariants}>
          <h3 className="mb-4">Connect with me</h3>
          <div className="d-flex justify-content-center gap-4">
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
          </div>
        </motion.div>
      </motion.div>

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

          .form-control {
            border: 2px solid #e9ecef;
            transition: all 0.3s ease;
          }

          .form-control:focus {
            border-color: #007bff;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
          }

          .btn-primary {
            background: linear-gradient(45deg, #007bff, #0056b3);
            border: none;
          }
        `}
      </style>
    </div>
  );
};

export default Contacts;
