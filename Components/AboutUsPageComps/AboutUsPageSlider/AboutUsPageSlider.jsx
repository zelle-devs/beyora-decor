
import React from 'react';
import './AboutUsPageSlider.css';
import { MoveRight } from 'lucide-react';

function AboutUsPageSlider() {
  return (
    <div className="wrapperAboutUsPageSlider">
      <div className="bgContainerAboutUsPageSlider">
        <div className="gradientOverlayAboutUsPageSlider"></div>
        
        <div className="contentAboutUsPageSlider">
          
          <div className="leftSideAboutUsPageSlider">
            <span className="subtitleAboutUsPageSlider">OUR STORY</span>
            <h2 className="titleAboutUsPageSlider">
              CRAFTING<br />ELEGANCE
            </h2>
            <h3 className="taglineAboutUsPageSlider">Passionate. Authentic. Timeless.</h3>
            <p className="descriptionAboutUsPageSlider">
              We believe that every space has a story to tell. Our journey began with a simple mission: to curate exceptional, handcrafted pieces that bring warmth, character, and a sense of quiet luxury to your everyday life.
            </p>
            {/* <button className="exploreBtnAboutUsPageSlider">
              DISCOVER OUR JOURNEY <span className="arrowIconAboutUsPageSlider"><MoveRight strokeWidth={1.4}/></span>
            </button> */}
          </div>

          <div className="rightSideAboutUsPageSlider">
            <div className="rightTextAboutUsPageSlider">
              <span>MORE</span>
              <span>THAN ART</span>
              <span className="mutedTextAboutUsPageSlider">A WAY OF</span>
              <span className="mutedTextAboutUsPageSlider">LIVING.</span>
            </div>
            {/* <div className="verticalLineAboutUsPageSlider"></div> */}
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutUsPageSlider;