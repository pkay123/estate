import "../styles/sections/Deals.css";
import DealCard from "../components/DealCard";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { FaBed, FaSwimmingPool } from "react-icons/fa";
import { MdOutlineKitchen } from "react-icons/md";

function Deals() {
  return (
    <div className="app__deals">
      <div className="app__container">
        <>
          <div className="app__deals-header">
            <h2 className="title">We Help You To Make Better Deals</h2>

            <p className="subtitle">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>

          <ul>
            <li className="listItems">
              <p className="subtitle">Recently Added Properties</p>
            </li>
            <li className="listItems">
              <p className="subtitle">Modern Property</p>
            </li>
            <li className="listItems">
              <p className="subtitle">Heritage Property</p>
            </li>
            <li className="listItems">
              <p className="subtitle">Apartment</p>
            </li>
          </ul>

          <div className="app__deals-card-grid">
            <DealCard
              img={img1}
              header="GA, Accra(Legon)"
              icon={
                <IoLocationOutline
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              price="&#8373;200,000"
              content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita."
              read="Read More"
              icon1={
                <FaBed
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span1="3 Bedrooms"
              icon2={
                <MdOutlineKitchen
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span2="2 Bathrooms"
              icon3={
                <FaSwimmingPool
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span3="2 Swim Pools"
              icon4={
                <FaBed
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span4="2000 Sq-ft House"
              btn="View Details"
            />
            <DealCard
              img={img2}
              header="CR, AG(YB)"
              icon={
                <IoLocationOutline
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              price="&#8373;200,000"
              content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita."
              read="Read More"
              icon1={
                <FaBed
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span1="3 Bedrooms"
              icon2={
                <MdOutlineKitchen
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span2="2 Bathrooms"
              icon3={
                <FaSwimmingPool
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span3="2 Swim Pools"
              icon4={
                <FaBed
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span4="2000 Sq-ft House"
              btn="View Details"
            />
            <DealCard
              img={img3}
              header="ER, K'dua(OK)"
              icon={
                <IoLocationOutline
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              price="&#8373;200,000"
              content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita."
              read="Read More"
              icon1={
                <FaBed
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span1="3 Bedrooms"
              icon2={
                <MdOutlineKitchen
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span2="2 Bathrooms"
              icon3={
                <FaSwimmingPool
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span3="2 Swim Pools"
              icon4={
                <FaBed
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span4="2000 Sq-ft House"
              btn="View Details"
            />
            <DealCard
              img={img4}
              header="AR, K'si(AS)"
              icon={
                <IoLocationOutline
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              price="&#8373;200,000"
              content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita."
              read="Read More"
              icon1={
                <FaBed
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span1="3 Bedrooms"
              icon2={
                <MdOutlineKitchen
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span2="2 Bathrooms"
              icon3={
                <FaSwimmingPool
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span3="2 Swim Pools"
              icon4={
                <FaBed
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span4="2000 Sq-ft House"
              btn="View Details"
            />
            <DealCard
              img={img5}
              header="BA, Bono(Yonko)"
              icon={
                <IoLocationOutline
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              price="&#8373;200,000"
              content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita."
              read="Read More"
              icon1={
                <FaBed
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span1="3 Bedrooms"
              icon2={
                <MdOutlineKitchen
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span2="2 Bathrooms"
              icon3={
                <FaSwimmingPool
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span3="2 Swim Pools"
              icon4={
                <FaBed
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span4="2000 Sq-ft House"
              btn="View Details"
            />
            <DealCard
              img={img6}
              header="CR, Cape(Oguaa)"
              icon={
                <IoLocationOutline
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              price="&#8373;200,000"
              content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita."
              read="Read More"
              icon1={
                <FaBed
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span1="3 Bedrooms"
              icon2={
                <MdOutlineKitchen
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span2="2 Bathrooms"
              icon3={
                <FaSwimmingPool
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span3="2 Swim Pools"
              icon4={
                <FaBed
                  style={{ fontSize: "24px", color: "var(--colorBlue)" }}
                />
              }
              span4="2000 Sq-ft House"
              btn="View Details"
            />
          </div>
        </>

        <button className="btn__blue">Load More</button>
      </div>
    </div>
  );
}

export default Deals;
