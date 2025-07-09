import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const styles = {
  projectCard: {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
    },
  },
  cardImgWrapper: {
    overflow: 'hidden',
    borderRadius: '8px 8px 0 0',
  },
  githubIcon: {
    color: '#FF6464',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  primaryButton: {
    background: 'linear-gradient(45deg, #007bff, #0056b3)',
    border: 'none',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
};

const Works = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="container" style={{ marginTop: "150px", marginBottom: "50px" }}>
      <motion.h2 
        className="text-center mb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      <div className="row justify-content-center g-4">
        <motion.div 
          className="col-md-4"
          custom={0}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="card h-100" style={styles.projectCard}>
            <div style={styles.cardImgWrapper}>
              <img
                style={{ padding: "15px", height: "200px", objectFit: "contain" }}
                src="/stack-of-books.png"
                className="card-img-top"
                alt="Book Gallery Project"
              />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">Book Gallery</h5>
              <p className="card-text flex-grow-1">
                  This is a simple gallery of books that I have read and
                  enjoyed. It was built using React, Redux, Asp.net, Express,
                  MongoDB
                </p>

              <div className="mt-auto d-flex align-items-center">
                <Link to="https://book-gallery.vercel.app/">
                  <button className="btn btn-primary me-3" style={styles.primaryButton}>
                    visit website
                  </button>
                </Link>

                <Link to="https://github.com/moshawwa/Book-Gallery">
                  <BsGithub style={styles.githubIcon} size={32} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="col-md-4"
          custom={1}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="card h-100" style={styles.projectCard}>
            <div style={styles.cardImgWrapper}>
              <img
                style={{ padding: "15px", height: "200px", objectFit: "contain" }}
                src="/restaurant.webp"
                className="card-img-top"
                alt="Restaurant Project"
              />
            </div>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Restaurant Website</h5>
              <p className="card-text flex-grow-1">
                A modern restaurant website built with React, featuring menu display,
                online reservations, and responsive design for the best user experience.
              </p>

              <div className="mt-auto d-flex align-items-center">
                <Link to="https://your-restaurant-website-url.com">
                  <button className="btn btn-primary me-3" style={styles.primaryButton}>
                    visit website
                  </button>
                </Link>

                <Link to="https://github.com/moshawwa/restaurant-project">
                  <BsGithub style={styles.githubIcon} size={32} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="col-md-4"
          custom={2}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="card h-100" style={styles.projectCard}>
            <div style={styles.cardImgWrapper}>
              <img
                style={{ padding: "15px", height: "200px", objectFit: "contain" }}
                src="/moneyapp.png"
                className="card-img-top"
                alt="Money Tracker App"
              />
            </div>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Money Tracker App</h5>
              <p className="card-text flex-grow-1">
                A comprehensive money tracking application built with React and Firebase,
                featuring expense tracking, budget management, and financial analytics.
              </p>

              <div className="mt-auto d-flex align-items-center">
                <Link to="https://your-money-tracker-url.com">
                  <button className="btn btn-primary me-3" style={styles.primaryButton}>
                    visit website
                  </button>
                </Link>

                <Link to="https://github.com/moshawwa/money-tracker-app">
                  <BsGithub style={styles.githubIcon} size={32} />
                </Link>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
