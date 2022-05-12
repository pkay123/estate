import React from "react";
import "../styles/component/ReviewItem.css";

function ReviewItem({
  img,
  name,
  title,
  icon,
  icon2,
  icon3,
  icon4,
  rate,
  content,
  more,
  numb1,
  numb2,
  read,
}) {
  return (
    <div className="app__review-card">
      <div className="img__container">
        <img src={img} alt="" />
      </div>

      <div className="app__review-cardcontent">
        <div className="top__content">
          <div className="top__left">
            <p className="subtitle">{name}</p>
            <p className="desc">{title}</p>
          </div>
          <div className="top__right">
            <p className="desc">
              {icon}
              <span>{rate}</span>
            </p>
          </div>
        </div>

        <div className="center__content">
          <p className="desc">
            {content}

            <span>{read}</span>
          </p>
        </div>

        <div className="bottom__content">
          <p className="subtitle">
            {more}
            {icon2}
          </p>

          <div className="likes">
            <div className="heart">
              <p className="desc">
                {icon3} <span>{numb1}</span>
              </p>
            </div>
            <div className="comment">
              <p className="desc">
                {icon4} <span>{numb2}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
