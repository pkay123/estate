import React from "react";
import { Navbar, Newsletter, Footer, Copy } from "./components";
import "./global.css";
import { Deals, Header, Review, Why } from "./sections";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Why />
      <Deals />
      <Review />
      <Newsletter />
      <Footer />
      <Copy />
    </div>
  );
}

export default App;
