import React from "react";

function Nav() {
  return (
    <div>
      <nav
        className="navbar navbar-dark  bg-dark ftco-navbar-light"
       
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            JobPro.
          </a>
          <div className="d-flex  navbar-collapse" id="ftco-nav">
            <ul className="d-flex navbar-nav ml-auto">
              <li className="nav-item">
                <a href="index-2.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="jobs.html" className="nav-link">
                  Find Jobs
                </a>
              </li>
              <li className="nav-item">
                <a href="candidates.html" className="nav-link">
                  Canditates
                </a>
              </li>
              <li className="nav-item">
                <a href="blog.html" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item cta mr-md-1">
                <a href="new-post.html" className="nav-link">
                  Post a Job
                </a>
              </li>
              <li className="nav-item cta cta-colored">
                <a href="job-post.html" className="nav-link">
                  Want a Job
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
