import React from "react";
import "../styles/sections/Why.css";
import { WhyGrid } from "../components";
import { BsHouseDoor, BsArrowRightShort } from "react-icons/bs";
import { SiTaxbuzz } from "react-icons/si";
import { GiTakeMyMoney } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function Why() {
  return (
    <div className="app__why">
      <div className="app__container">
        <div className="app__why-grid">
          <div className="app__left">
            <h2 className="title">Why Choose Us ?</h2>

            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              numquam laboriosam, accusantium, qui nihil velit quos laudantium
              repudiandae voluptatibus ab iure aperiam nostrum corrupti.
              <br />
              neque nostrum? Reprehenderit beatae eaque praesentium,
              consequuntur sint minima tempora maxime asperiores error hic
              dolor? <br />
              <br />
              Aperiam ea odit ullam consequuntur dolor aliquid autem quasi non
              nemo.
            </p>

            <button className="btn__blue">Buy Now</button>
          </div>
          <div className="app__right-grid">
            <WhyGrid
              icon={
                <BsHouseDoor style={{ fontSize: "24px", color: "#1a5fea" }} />
              }
              title="01. Property Insurance"
              content="The best on the net! Software development saved my business. I use
        Software development often. I am really satisfied with my Software
        Development."
              read="Read"
              arrow={<BsArrowRightShort style={{ fontSize: "24px" }} />}
            />
            <WhyGrid
              icon={
                <GiTakeMyMoney style={{ fontSize: "24px", color: "#c0eaff" }} />
              }
              title="02. Tax Advancement"
              content="The best on the net! Software development saved my business. I use
        Software development often. I am really satisfied with my Software
        Development."
              read="Read"
              arrow={<BsArrowRightShort style={{ fontSize: "24px" }} />}
            />
            <WhyGrid
              icon={
                <SiTaxbuzz style={{ fontSize: "24px", color: "#1a5fea" }} />
              }
              title="03. Lowest Commission"
              content="The best on the net! Software development saved my business. I use
        Software development often. I am really satisfied with my Software
        Development."
              read="Read"
              arrow={<BsArrowRightShort style={{ fontSize: "24px" }} />}
            />
            <WhyGrid
              icon={
                <VscWorkspaceTrusted
                  style={{ fontSize: "24px", color: "#1a5fea" }}
                />
              }
              title="04. Most Trusted Service"
              content="The best on the net! Software development saved my business. I use
        Software development often. I am really satisfied with my Software
        Development."
              read="Read"
              arrow={<BsArrowRightShort style={{ fontSize: "24px" }} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
