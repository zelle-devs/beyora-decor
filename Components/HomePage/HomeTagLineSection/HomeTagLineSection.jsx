import React from 'react';
import './HomeTagLineSection.css';

function HomeTagLineSection() {
  return (
    <div className="containerHomeTagLineSection">
      <div className="contentHomeTagLineSection">
        
        <div className="leftSideHomeTagLineSection">
          <span className="subtitleHomeTagLineSection">BEYVORA DECOR</span>
          <h2 className="titleHomeTagLineSection">
            DESIGNED FOR SPACES<br />THAT DESERVE MORE.
          </h2>
        </div>

        <div className="rightSideHomeTagLineSection">
          <p className="descriptionHomeTagLineSection">
            Beyvora brings together tactile wall art, architectural metalwork, illuminated pieces and expressive details designed to become part of the spaces they inhabit.
          </p>
          <a href="#" className="linkHomeTagLineSection">
            OUR STORY <span className="arrowHomeTagLineSection">&rarr;</span>
          </a>
        </div>

      </div>
    </div>
  );
}

export default HomeTagLineSection;