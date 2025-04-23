import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          "Tomato: Fast, Fresh, and Full of Flavor! Your favorite meals
          delivered to your door, Satisfy your cravings in just a tap!"
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
