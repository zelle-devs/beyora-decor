import React from 'react';
import './CustomizationSectionHome.css';
import { MoveRight } from 'lucide-react';

function CustomizationSectionHome() {
  return (
    <div className="sectionCustomizationSectionHome">
      <div className="containerCustomizationSectionHome">
        <div className="leftSideCustomizationSectionHome">
          <img 
            src="./HomeGridGalleryNewLayout7.png" 
            alt="Room Customization" 
            className="imageCustomizationSectionHome" 
          />
        </div>
        <div className="rightSideCustomizationSectionHome">
          
          <div className="textContentCustomizationSectionHome">
            <span className="subtitleHomeTagLineSection">CUSTOMIZATION</span>
            <h2 className="titleCustomizationSectionHome">YOUR WALL.<br />YOUR STATEMENT.</h2>
            <p className="descCustomizationSectionHome">
              Select pieces can be tailored to your space — from dimensions and finishes to calligraphy, colors and lighting — creating something truly personal.
            </p>
            <button className="buttonCustomizationSectionHome">
              EXPLORE Beyvora <MoveRight strokeWidth={1.4}/>
            </button>
          </div>

          <div className="featuresContentCustomizationSectionHome">
            <div className="featureItemCustomizationSectionHome">
              <div className="iconCustomizationSectionHome">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 3l-6 6"/><path d="M21 3v6"/><path d="M21 3h-6"/><path d="M3 21l6-6"/><path d="M3 21v-6"/><path d="M3 21h6"/><path d="M15 21l6-6"/><path d="M21 15v6"/><path d="M15 21h6"/><path d="M9 3L3 9"/><path d="M9 3H3"/><path d="M3 3v6"/>
                </svg>
              </div>
              <div className="featureTextCustomizationSectionHome">
                <span className="featureTitleCustomizationSectionHome">SIZE</span>
                <span className="featureDescCustomizationSectionHome">Made to fit your space</span>
              </div>
            </div>

            <div className="featureItemCustomizationSectionHome">
              <div className="iconCustomizationSectionHome">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
                </svg>
              </div>
              <div className="featureTextCustomizationSectionHome">
                <span className="featureTitleCustomizationSectionHome">FINISH</span>
                <span className="featureDescCustomizationSectionHome">A palette that belongs</span>
              </div>
            </div>

            <div className="featureItemCustomizationSectionHome">
              <div className="iconCustomizationSectionHome">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                </svg>
              </div>
              <div className="featureTextCustomizationSectionHome">
                <span className="featureTitleCustomizationSectionHome">DETAIL</span>
                <span className="featureDescCustomizationSectionHome">Add a personal touch</span>
              </div>
            </div>

            <div className="featureItemCustomizationSectionHome">
              <div className="iconCustomizationSectionHome">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/>
                </svg>
              </div>
              <div className="featureTextCustomizationSectionHome">
                <span className="featureTitleCustomizationSectionHome">LIGHTING</span>
                <span className="featureDescCustomizationSectionHome">Set the perfect mood</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CustomizationSectionHome;