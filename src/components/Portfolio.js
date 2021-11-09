import React from "react";
import "./../index.css";
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have Built</h1>
      <div className="projects-container">
        {/* Project 1 - Corona Tracker */}
        {/* <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://covid19-virus-tracker.surge.sh/"
          >
            <div className="project-images" id="coronaTracker"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Corona Virus Tracker</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/coronavirustracker"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="http://covid19-virus-tracker.surge.sh/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div> */}

        {/* Project 2 - Virtual-Girlfriend */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://ccttanim.github.io/Virtual-Girlfriend/"
          >
            <div className="project-images" id="shoeStore"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Virtual-Girlfriend</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/ccttanim/Virtual-Girlfriend"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://ccttanim.github.io/Virtual-Girlfriend/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project 3 - valentine-day*/}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://ccttanim.github.io/valentine-day-5/"
          >
            <div className="project-images" id="quizApp"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>valentine-day</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/ccttanim/valentine-day-5"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://ccttanim.github.io/valentine-day-5/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>



         {/* Project 4 - valentine-day*/}
         <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://ccttanim.github.io/valentine-day-5/"
          >
            <div className="project-images" id="quizApp"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>valentine-day</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/ccttanim/valentine-day-5"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://ccttanim.github.io/valentine-day-5/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        

          {/* Project 4 - */}
         {/* <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://explore-matiari.surge.sh/"
          >
            <div className="project-images" id="matiari"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Matiari Tourism Website</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/matiariWebsite"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="http://explore-matiari.surge.sh/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div> */}

         {/* Project 5 - Expense Tracker  */}
         {/* <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://your-expense-tracker.surge.sh/"
          >
            <div className="project-images" id="expenseTracker"></div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Expense Tracker</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/expenseTracker"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="http://your-expense-tracker.surge.sh/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>  */}
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/ccttanim"
        className="button-link"
      >
        <button className="button">More Projects</button>
      </a>
    </section>
  );
};

export default Portfolio;
