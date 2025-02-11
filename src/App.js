import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <header>
        <div className="logo">
          APPSTORE.UZ<br />
          <span>Uzbekistan</span>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Gallery</li>
            <li>News</li>
            <li>About us</li>
          </ul>
        </nav>
        <div className="cart-icon">🛒</div>
      </header>
      <main>
        <section className="harak">
          <div>
            <h1 className="title">iPhone 12 pro</h1>
            <p className="text">
              The iPhone 12 Pro and iPhone 12 Pro Max are part of Apple's <br />
              latest generation of smartphones, offering 5G connectivity, the <br />
              A14 chip for better performance,
            </p>
          </div>
          <div className="btn_wrapper">
            <button className="order">Order now</button>
            <button className="learn">Learn more</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
