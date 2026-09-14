"use client"
import React, { useState } from 'react';
import './TheDetailsMetters.css';

function TheDetailsMetters() {
  const [openIndexTheDetailsMetters, setOpenIndexTheDetailsMetters] = useState(0);

  const accordionDataTheDetailsMetters = [
    { title: 'Product Details', content: 'Discover the intricate details and inspiration behind this exclusive piece.' },
    { title: 'Materials & Finish', content: 'Crafted with premium textures, heavy gels, and gold leaf accents for a luxurious finish.' },
    { title: 'Dimensions', content: 'Available in standard and custom sizes to perfectly fit your space.' },
    { title: 'Installation', content: 'Comes with pre-installed hanging hardware and an easy-to-follow guide.' },
    { title: 'Care Instructions', content: 'Dust gently with a soft, dry cloth. Avoid direct sunlight and moisture.' },
    { title: 'Shipping & Returns', content: 'Securely packaged and shipped worldwide. 14-day return policy applies.' }
  ];

  const toggleAccordionTheDetailsMetters = (index) => {
    setOpenIndexTheDetailsMetters(openIndexTheDetailsMetters === index ? null : index);
  };

  return (
    <div className="sectionTheDetailsMetters">
      <div className="containerTheDetailsMetters">
        
        <div className="leftColTheDetailsMetters">
          <h2 className="titleTheDetailsMetters">THE DETAIL<br />MATTERS.</h2>
          <p className="descTheDetailsMetters">
            Every layer, every texture, every finish is considered — designed to create depth, dimension and a lasting presence in your space.
          </p>
          <button className="btnTheDetailsMetters">
            OUR CRAFTSMANSHIP <span className="arrowTheDetailsMetters">&rarr;</span>
          </button>
        </div>

        <div className="centerColTheDetailsMetters">
          <div className="imageWrapperTheDetailsMetters">
            <img 
              src="/SeeTheDifference1.png" 
              alt="Texture Detail" 
              className="mainImgTheDetailsMetters" 
            />
          </div>
        </div>

        <div className="rightColTheDetailsMetters">
          <div className="accordionTheDetailsMetters">
            {accordionDataTheDetailsMetters.map((item, index) => (
              <div key={index} className="accordionItemTheDetailsMetters">
                <button 
                  className={`accordionHeaderTheDetailsMetters ${openIndexTheDetailsMetters === index ? 'activeHeaderTheDetailsMetters' : ''}`}
                  onClick={() => toggleAccordionTheDetailsMetters(index)}
                >
                  <span className="accordionTitleTheDetailsMetters">{item.title}</span>
                  <span className="accordionIconTheDetailsMetters">
                    {openIndexTheDetailsMetters === index ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    )}
                  </span>
                </button>
                <div className={`accordionContentTheDetailsMetters ${openIndexTheDetailsMetters === index ? 'openContentTheDetailsMetters' : ''}`}>
                  <div className="accordionTextTheDetailsMetters">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default TheDetailsMetters;