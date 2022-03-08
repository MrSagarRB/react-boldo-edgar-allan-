import React from "react";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home_container}>
      <header>
        <img src="./logo.png" />
        <nav>
          <a>Product</a>
          <a>Services</a>
          <a>About</a>
          <button>Login</button>
        </nav>
      </header>

      <div className={styles.body_div}>
        <h1>Save time by building fast with Boldo Template </h1>
        <p>
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </p>
        <div className={styles.button_div}>
          <button className={styles.buy_template}>Buy template</button>
          <button className={styles.explore}> Explore </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
