import { motion } from "framer-motion";

const FrontPage = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "135px" }}>
        <div className="row align-items-center">
          <motion.div 
            className="col-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="display-4 fw-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hi I am <span className="text-primary">Mohammed Al-Shawwa</span>
            </motion.h2>
            <motion.h4 
              className="text-muted mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Software Engineer react.js developer
            </motion.h4>
            <motion.p 
              className="lead mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              I strongly believe my knowledge is my destiny. i have always loved
              trying things out for myself. Some people find that science is
              just a way to get a good and comfortable job. in my opinion.
              science is just about curiosity to find out more. and never to
              stop
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <button className="btn btn-primary btn-lg px-4 py-2 rounded-pill shadow-sm hover-lift">
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="/cv.pdf"
                  download="mohammed_shawwa_cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="col-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              style={{ 
                width: "100%", 
                height: "auto", 
                borderRadius: "50%",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
              src="/profile.jpeg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
