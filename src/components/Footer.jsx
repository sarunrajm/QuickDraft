import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
  return (
    <div
      className="app-footer d-flex justify-content-center align-items-center flex-column text-light"
      style={{ width: "100%", height: "300px",backgroundColor:"black",color:"white", }}
    >
      <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">
        <div style={{ width: "400px",color:"white" }} className="website">
          <h4 style={{color:"#d2ab89"}}>
            {" "}
            <i className="fa-regular fa-note-sticky fa-2xl me-2" style={{color:"white"}}></i>QuickDraft
          </h4>
          <h6 style={{color:"white"}}>
            Designed and built with all the love in the world by the Bootstrap
            team with the help of our contributors.
          </h6>
          <h6 style={{color:"white"}}>Code licensed MIT, docs CC BY 3.0.</h6>
          <p style={{color:"white"}}>Currently v5.3.2.</p>
        </div>
        <div className="links d-flex flex-column text-light">
          <h4 style={{color:"#d2ab89"}}>Links</h4>
          <Link
            to={"/home"}
            className="fs-4"
            style={{ textDecoration: "none", color: "white" }}
          >
            Home
          </Link>
          <Link
            to={"/"}
            className="fs-4"
            style={{ textDecoration: "none", color: "white" }}
          >
            Landing page
          </Link>

          <Link
            to={"/watch-history"}
            className="fs-4"
            style={{ textDecoration: "none", color: "white" }}
          >
            Watch history
          </Link>
        </div>
        <div className="guids d-flex flex-column text-light">
          <h4 style={{color:"#d2ab89"}}>Guide</h4>
          <Link
            to={"https://react-bootstrap.github.io/"}
            className="fs-4"
            style={{ textDecoration: "none", color: "white" }}
          >
            React
          </Link>
          <Link
            to={"https://react-bootstrap.github.io/"}
            className="fs-4"
            style={{ textDecoration: "none", color: "white" }}
          >
            React Bootstrap
          </Link>

          <Link
            to={"https://react-bootstrap.github.io/"}
            className="fs-4"
            style={{ textDecoration: "none", color: "white" }}
          >
            Routing
          </Link>
        </div>
        <div className="contact d-flex flex-column" style={{color:"white"}}>
          <h4 style={{color:"#d2ab89"}}>Contact</h4>
          <div>
            <input
              type="text"
              placeholder="Enter your Mail"
              className="rounded p-1"
            />
            <button
              className="btn btn-dark  rounded ms-1"
              style={{ width: "100px", height: "38px", padding: "0px" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p>Copyright © 2023 QuickDraft. Built with Docusaurus.</p>
    </div>
  );
}

export default Footer;
