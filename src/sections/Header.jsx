import { BsFillCameraVideoFill } from "react-icons/bs";
import "../styles/sections/Header.css";

function Header() {
  return (
    <div className="app__header">
      <div className="app__container">
        <div className="app__header-content">
          <h1 className="block-title">Trusted Real Estate Property For You</h1>

          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad
            perferendis nemo adipisci, molestias repellat est itaque maiores
            officiis amet?
          </p>

          <div className="btns__flex">
            <button className="btn__blue">Contact Us</button>

            <button className="btn__white">
              <BsFillCameraVideoFill style={{ fontSize: "24px" }} />{" "}
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
