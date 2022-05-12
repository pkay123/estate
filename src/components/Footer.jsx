import "../styles/component/Footer.css";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialPinterest,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { BsArrowRightShort } from "react-icons/bs";

function Footer() {
  return (
    <div className="app__footer">
      <div className="app__container">
        <div className="app__footer-grid">
          <div className="app__footer-first">
            <p className="subtitle bold">Built</p>

            <p className="subtitle  bold">For Contact</p>

            <p className="subtitle">Address: 234 Agona Swedru</p>

            <p className="subtitle">Phone: +233 233 2333 333</p>

            <p className="subtitle">Email: paadev.gmail.com</p>

            <div className="social__links">
              <p className="subtitle  bold">Follow us on:</p>

              <div className="links__icons">
                <TiSocialFacebook style={{ fontSize: "24px" }} />
                <TiSocialInstagram style={{ fontSize: "24px" }} />
                <TiSocialTwitter style={{ fontSize: "24px" }} />
                <TiSocialPinterest style={{ fontSize: "24px" }} />
                <TiSocialYoutube style={{ fontSize: "24px" }} />
              </div>
            </div>
          </div>
          <div className="app__footer-second">
            <p className="subtitle  bold">Useful Links</p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>What We Do</span>
            </p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>Our Project</span>
            </p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>FAQ</span>
            </p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>News and Actions</span>
            </p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>Support Team</span>
            </p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>Events</span>
            </p>
          </div>
          <div className="app__footer-third">
            <p className="subtitle  bold">Pages</p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>Home</span>
            </p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>About Us</span>
            </p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>Our App</span>
            </p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>Categories</span>
            </p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>Contact Us</span>
            </p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>Events</span>
            </p>
          </div>

          <div className="app__footer-fourth">
            <p className="subtitle  bold">Other Links</p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>Customer Review</span>
            </p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>Blogs</span>
            </p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>Favourite</span>
            </p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>News and Actions</span>
            </p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>Support Team</span>
            </p>

            <p className="subtitle">
              <BsArrowRightShort /> <span>Events</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
