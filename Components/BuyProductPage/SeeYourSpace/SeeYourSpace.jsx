import React from 'react';
import './SeeYourSpace.css';

function SeeYourSpace() {
  return (
    <div className="sectionSeeYourSpace">
      <div className="containerSeeYourSpace">
        
        <div className="leftColSeeYourSpace">
          <div className="imageWrapperSeeYourSpace">
            <img 
              src="/SeeTheDifference3.png" 
              alt="Wall Art in Space" 
              className="mainImgSeeYourSpace" 
            />
            
            <div className="dimTopWrapperSeeYourSpace">
              <span className="dimTextSeeYourSpace">120 cm</span>
              <div className="dimLineHorizontalSeeYourSpace"></div>
            </div>
            
            <div className="dimRightWrapperSeeYourSpace">
              <span className="dimTextSeeYourSpace">80 cm</span>
              <div className="dimLineVerticalSeeYourSpace"></div>
            </div>
          </div>
        </div>

        <div className="centerColSeeYourSpace">
          <h2 className="titleSeeYourSpace">SEE IT IN YOUR SPACE.</h2>
          <p className="descSeeYourSpace">
            A statement piece designed to complement your home. Here's how Sand Dunes looks in a real space, with dimensions for reference.
          </p>
          <div className="thumbnailsSeeYourSpace">
            <img src="/HomeGridGalleryNewLayout8.png" alt="Preview 1" className="thumbImgSeeYourSpace" />
            <img src="/HomeGridGalleryNewLayout9.png" alt="Preview 2" className="thumbImgSeeYourSpace" />
            <img src="/HomeGridGalleryNewLayout1.png" alt="Preview 3" className="thumbImgSeeYourSpace" />
          </div>
        </div>

        <div className="rightColSeeYourSpace">
          <div className="quoteWrapperSeeYourSpace">
            <p className="quoteTextSeeYourSpace">
              "Art should<br />feel like it<br />belongs."
            </p>
            <div className="quoteDividerSeeYourSpace"></div>
            <span className="quoteAuthorSeeYourSpace">BEYVORA DECOR</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SeeYourSpace;