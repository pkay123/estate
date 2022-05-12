import React from "react";
import "../styles/component/DealCard.css";

function DealCard({
  img,
  header,
  icon,
  icon1,
  icon2,
  icon3,
  icon4,
  price,
  content,
  read,
  btn,
  span1,
  span2,
  span3,
  span4,
}) {
  return (
    <div className="app__card">
      <div className="img__container">
        <img src={img} alt="" />
      </div>

      <div className="app__card-content">
        <div className="location">
          <div className="loc">
            <p className="subtitle">
              {icon}
              {header}
            </p>
          </div>

          <div className="price">
            <p className="subtitle">{price}</p>
          </div>
        </div>

        <div className="para">
          <p className="desc">
            {content}
            <span>{read}</span>
          </p>
        </div>

        <div className="appartment">
          <div className="appartment__content-left">
            <ul>
              <li>
                {icon1}
                <span>{span1}</span>
              </li>
              <li>
                {icon2}
                <span>{span2}</span>
              </li>
              <li>
                {icon3}
                <span>{span3}</span>
              </li>
            </ul>
          </div>
          <div className="appartment__content-right">
            <ul>
              <li>
                {icon4}
                <span>{span4}</span>
              </li>
              <li>
                <button className="btn__gray">{btn}</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealCard;
