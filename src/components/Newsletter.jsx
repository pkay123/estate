import "../styles/component/Newsletter.css";

function Newsletter() {
  return (
    <div className="app__newsletter">
      <div className="app__container">
        <div className="app__newsletter-header">
          <h2 className="title">Subscribe For Latest News</h2>

          <p className="subtitle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            incidunt dolorem omnis sequi voluptates blanditiis modi. Inventore
            deleniti enim ad?
          </p>
        </div>

        <div className="app__newsletter-card">
          <div className="newsletter__content">
            <input type="email" placeholder="Enter Your Email Address" />
            <button className="btn__blue blue">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
