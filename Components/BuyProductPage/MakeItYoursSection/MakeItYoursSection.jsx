import React from 'react';
import './MakeItYoursSection.css';

function MakeItYoursSection() {
  return (
    <div className="containerMakeItYoursSection">
      <div className="wrapperMakeItYoursSection">
        
        <div className="leftColMakeItYoursSection">
          <h2 className="titleMakeItYoursSection">MAKE IT YOURS.</h2>
          <p className="descMakeItYoursSection">
            Select pieces can be tailored to your space — from dimensions and finishes to custom inscriptions, creating something truly personal.
          </p>
          <button className="btnMakeItYoursSection">
            REQUEST BEYVORA <span className="arrowMakeItYoursSection">&rarr;</span>
          </button>
        </div>

        <div className="centerColMakeItYoursSection">
          <img 
            src="/HomeGridGalleryNewLayout7.png" 
            alt="Crafting Custom Details" 
            className="imageMakeItYoursSection" 
          />
        </div>

        <div className="rightColMakeItYoursSection">
          <div className="featureItemMakeItYoursSection">
            <div className="iconMakeItYoursSection">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6"></path><path d="M9 21H3v-6"></path><path d="M21 3l-7 7"></path><path d="M3 21l7-7"></path>
              </svg>
            </div>
            <div className="featureTextMakeItYoursSection">
              <span className="featureTitleMakeItYoursSection">Custom Sizing</span>
              <span className="featureDescMakeItYoursSection">Made to fit your wall</span>
            </div>
          </div>

          <div className="featureItemMakeItYoursSection">
            <div className="iconMakeItYoursSection">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>
              </svg>
            </div>
            <div className="featureTextMakeItYoursSection">
              <span className="featureTitleMakeItYoursSection">Personalized Details</span>
              <span className="featureDescMakeItYoursSection">Calligraphy, patterns or text</span>
            </div>
          </div>

          <div className="featureItemMakeItYoursSection">
            <div className="iconMakeItYoursSection">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>
              </svg>
            </div>
            <div className="featureTextMakeItYoursSection">
              <span className="featureTitleMakeItYoursSection">Bespoke Finishes</span>
              <span className="featureDescMakeItYoursSection">A finish that belongs in your space</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MakeItYoursSection;