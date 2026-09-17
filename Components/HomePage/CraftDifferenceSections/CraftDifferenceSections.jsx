import React from 'react';
import './CraftDifferenceSections.css';

function CraftDifferenceSections() {
  const imagesCraftDifferenceSections = [
    "/SeeTheDifference1.png",
    "/SeeTheDifference2.png",
    "/SeeTheDifference3.png",
    "/SeeTheDifference4.png"
  ];

  return (
    <div className="containerCraftDifferenceSections">
      <div className="wrapperCraftDifferenceSections">
        
        <div className="leftSideCraftDifferenceSections">
          <span className="subtitleHomeTagLineSection">THE CRAFT</span>
          <h2 className="titleCraftDifferenceSections">SEE THE<br />DIFFERENCE.</h2>
          <p className="descCraftDifferenceSections">
            It's the texture, the material and the detail<br />that give a piece its presence.
          </p>
          <a href="#" className="linkCraftDifferenceSections">
            OUR MATERIALS <span className="arrowCraftDifferenceSections">&rarr;</span>
          </a>
        </div>

        <div className="rightSideCraftDifferenceSections">
          {imagesCraftDifferenceSections.map((src, index) => (
            <div key={index} className="imageWrapperCraftDifferenceSections">
              <img src={src} alt="Craft Material" className="imgCraftDifferenceSections" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CraftDifferenceSections;