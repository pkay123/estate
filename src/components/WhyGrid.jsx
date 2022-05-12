import React from "react";
import "../styles/component/WhyGrid.css";

function WhyGrid({ icon, title, content, read, arrow }) {
  return (
    <div className="app__why-container">
      <div className="container">
        <div className="icon__container">{icon}</div>
        <div className="content">
          <p className="subtitle">{title}</p>
          <p className="desc">{content}</p>
        </div>
        <div className="read">
          <p className="subtitle">
            {read}
            {arrow}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyGrid;
