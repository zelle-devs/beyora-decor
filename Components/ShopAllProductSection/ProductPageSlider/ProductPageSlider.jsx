import React from 'react';
import './ProductPageSlider.css';
import { MoveRight } from 'lucide-react';

function ProductPageSlider() {
  return (
    <div className="wrapperProductPageSlider">
      <div className="bgContainerProductPageSlider">
        <div className="gradientOverlayProductPageSlider"></div>
        
        <div className="contentProductPageSlider">
          
          <div className="leftSideProductPageSlider">
            <span className="subtitleProductPageSlider">COLLECTION</span>
            <h2 className="titleProductPageSlider">
              TEXTURED<br />WALL DECOR
            </h2>
            <h3 className="taglineProductPageSlider">Tactile. Layered. Distinct.</h3>
            <p className="descriptionProductPageSlider">
              Textured wall art brings depth, character and a sense of quiet luxury to your space. Designed to be felt as much as seen, each piece adds a dimensional element that transforms a wall into a statement.
            </p>
            <button className="exploreBtnProductPageSlider">
              EXPLORE THE COLLECTION <span className="arrowIconProductPageSlider"><MoveRight strokeWidth={1.4}/></span>
            </button>
          </div>

          <div className="rightSideProductPageSlider">
            <div className="rightTextProductPageSlider">
              <span>MORE</span>
              <span>THAN DECOR</span>
              <span className="mutedTextProductPageSlider">A DIFFERENT</span>
              <span className="mutedTextProductPageSlider">FEELING.</span>
            </div>
            <div className="verticalLineProductPageSlider"></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductPageSlider;