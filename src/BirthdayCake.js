// BirthdayCake.js
import React from "react";
import "./BirthdayCake.css";

const BirthdayCake = () => {
  return (
    <div className="cake-container">
      <h1>🎉 Happy Birthday! 🎂</h1>

      {/* Cake and Candles Container */}
      <div className="cake">
        {/* Candles positioned above the cake */}
        <div className="candles">
          {Array.from({ length: 15 }).map((_, idx) => (
            <div key={idx} className="candle">
              <div className="flame"></div>
            </div>
          ))}
        </div>

        {/* Cake Layers */}
        <div className="layer yellow-layer"></div>
        <div className="layer white-layer"></div>
        <div className="layer red-layer"></div>
      </div>

      <p className="message">
        Happy Birthday! May this year be filled with joy and memorable moments!
      </p>
    </div>
  );
};

export default BirthdayCake;
