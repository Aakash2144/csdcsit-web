import React from "react";
import "./styles.css";

function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="contact-info">
        <span>📞 +91 584 5694 368</span>
        <span>✉️ info@gmail.com</span>
      </div>
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </div>
  );
};

export default TopNavbar;
