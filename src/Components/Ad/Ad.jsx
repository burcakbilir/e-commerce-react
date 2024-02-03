import React from "react";
import "./Ad.css";

const Ad = () => {
  return (
    <>
      <div className="ad-container">
        <div className="top-ad-container">
          <div className="top-left-ad">
            <img
              src="https://cityfurnish.com/blog/wp-content/uploads/2023/04/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg-min.jpg"
              alt=""
            />
            <div className="ad-info">
              <span>Lorem</span>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <button>Keşfet</button>
            </div>
          </div>

          <div className="top-right-ad">
            <img
              src="https://cityfurnish.com/blog/wp-content/uploads/2023/07/stylish-vintage-interior-design-living-room-with-wooden-retro-commode-plants-ships-map-elegant-personal-accessories-min.jpg"
              alt=""
            />
            <div className="ad-info">
              <span>Lorem</span>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <button>Keşfet</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ad;
