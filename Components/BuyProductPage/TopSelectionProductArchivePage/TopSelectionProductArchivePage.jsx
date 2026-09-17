"use client"
import React, { useState } from 'react';
import './TopSelectionProductArchivePage.css';
import { useCartCartSidebar } from '@/app/CartContext'; // Path apne project ke hisaab se theek kar lijiye ga
  
function TopSelectionProductArchivePage() {
  const [activeImageIndexTopSelectionProductArchivePage, setActiveImageIndexTopSelectionProductArchivePage] = useState(0);
  const [selectedSizeTopSelectionProductArchivePage, setSelectedSizeTopSelectionProductArchivePage] = useState('Large');
  const [selectedFinishTopSelectionProductArchivePage, setSelectedFinishTopSelectionProductArchivePage] = useState('Natural');
  const [quantityTopSelectionProductArchivePage, setQuantityTopSelectionProductArchivePage] = useState(1);

  // 👇 Context se addItem function nikaal liya
  const { addItemCartSidebar } = useCartCartSidebar();

  const imagesTopSelectionProductArchivePage = [
    "/HomeGridGalleryNewLayout1.png",
    "/HomeGridGalleryNewLayout2.png",
    "/HomeGridGalleryNewLayout3.png",
    "/HomeGridGalleryNewLayout4.png",
    "/HomeGridGalleryNewLayout5.png",
  ];

  const sizesTopSelectionProductArchivePage = [
    { name: 'Medium', dims: '90 x 60 cm' },
    { name: 'Large', dims: '120 x 80 cm' },
    { name: 'Custom', dims: 'Tailored to your space' }
  ];

  const finishesTopSelectionProductArchivePage = [
    { name: 'Natural', desc: 'Matte finish', color: '#d2b48c' },
    { name: 'Gold', desc: 'Metallic accent', color: '#c5a059' },
    { name: 'Bronze', desc: 'Warm earthy', color: '#8c5a35' },
    { name: 'Black', desc: 'Satin smooth', color: '#222222' }
  ];

  const handlePrevImageTopSelectionProductArchivePage = () => {
    setActiveImageIndexTopSelectionProductArchivePage((prev) => 
      prev === 0 ? imagesTopSelectionProductArchivePage.length - 1 : prev - 1
    );
  };

  const handleNextImageTopSelectionProductArchivePage = () => {
    setActiveImageIndexTopSelectionProductArchivePage((prev) => 
      prev === imagesTopSelectionProductArchivePage.length - 1 ? 0 : prev + 1
    );
  };

  const decreaseQuantityTopSelectionProductArchivePage = () => {
    if (quantityTopSelectionProductArchivePage > 1) {
      setQuantityTopSelectionProductArchivePage(quantityTopSelectionProductArchivePage - 1);
    }
  };

  const increaseQuantityTopSelectionProductArchivePage = () => {
    setQuantityTopSelectionProductArchivePage(quantityTopSelectionProductArchivePage + 1);
  };

  // 👇 Add to Cart ka function jo data ko format karke Context mein bhejega
  const handleAddToCart = () => {
    const product = {
      // ID unique banani zaroori hai, isliye Size aur Finish ko add kar diya
      // Taake agar user same product alag size mein le toh wo alag item consider ho
      idCartSidebar: `sand-dunes-${selectedSizeTopSelectionProductArchivePage}-${selectedFinishTopSelectionProductArchivePage}`,
      titleCartSidebar: "SAND DUNES",
      type: "TEXTURED WALL DECOR",
      optionsCartSidebar: `Size: ${selectedSizeTopSelectionProductArchivePage}, Finish: ${selectedFinishTopSelectionProductArchivePage}`,
      priceCartSidebar: 28000, // String ki jagah Number likha hai jese humne pehle decide kiya tha
      imageCartSidebar: imagesTopSelectionProductArchivePage[0],
      quantityCartSidebar: quantityTopSelectionProductArchivePage,
    };

    addItemCartSidebar(product);
  };

  return (
    <div className="containerTopSelectionProductArchivePage">
      <div className="wrapperTopSelectionProductArchivePage">
        
        <div className="leftColTopSelectionProductArchivePage">
          <div className="mainImageWrapperTopSelectionProductArchivePage">
            <img 
              src={imagesTopSelectionProductArchivePage[activeImageIndexTopSelectionProductArchivePage]} 
              alt="Sand Dunes Textured Wall Decor" 
              className="mainImgTopSelectionProductArchivePage" 
            />
            
            <button className="navArrowTopSelectionProductArchivePage leftArrowTopSelectionProductArchivePage" onClick={handlePrevImageTopSelectionProductArchivePage}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="navArrowTopSelectionProductArchivePage rightArrowTopSelectionProductArchivePage" onClick={handleNextImageTopSelectionProductArchivePage}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            <button className="expandIconTopSelectionProductArchivePage">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            </button>
          </div>

          <div className="thumbnailsListTopSelectionProductArchivePage">
            {imagesTopSelectionProductArchivePage.map((img, index) => (
              <div 
                key={index} 
                className={`thumbItemTopSelectionProductArchivePage ${activeImageIndexTopSelectionProductArchivePage === index ? 'activeThumbTopSelectionProductArchivePage' : ''}`}
                onClick={() => setActiveImageIndexTopSelectionProductArchivePage(index)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} className="thumbImgTopSelectionProductArchivePage" />
                {index === imagesTopSelectionProductArchivePage.length - 1 && (
                  <div className="playOverlayTopSelectionProductArchivePage">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rightColTopSelectionProductArchivePage">
          <div className="productHeaderTopSelectionProductArchivePage">
            <span className="categoryTopSelectionProductArchivePage">TEXTURED WALL DECOR</span>
            <h1 className="titleTopSelectionProductArchivePage">SAND DUNES</h1>
            <h3 className="subtitleTopSelectionProductArchivePage">Tactile. Layered. Distinct.</h3>
            <p className="descTopSelectionProductArchivePage">
              A sculptural wall piece with layered textures and subtle metallic accents, designed to bring depth and character into contemporary interiors.
            </p>
          </div>

          <div className="priceReviewRowTopSelectionProductArchivePage">
            <span className="priceTopSelectionProductArchivePage">PKR 28,000</span>
            <div className="reviewsTopSelectionProductArchivePage">
              <div className="starsTopSelectionProductArchivePage">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                ))}
              </div>
              <span className="reviewCountTopSelectionProductArchivePage">(12 reviews)</span>
            </div>
          </div>

          <div className="dividerTopSelectionProductArchivePage"></div>

          <div className="sectionTopSelectionProductArchivePage">
            <span className="sectionTitleTopSelectionProductArchivePage">SIZE</span>
            <div className="sizeGridTopSelectionProductArchivePage">
              {sizesTopSelectionProductArchivePage.map((size) => (
                <div 
                  key={size.name} 
                  className={`sizeBoxTopSelectionProductArchivePage ${selectedSizeTopSelectionProductArchivePage === size.name ? 'activeSizeTopSelectionProductArchivePage' : ''}`}
                  onClick={() => setSelectedSizeTopSelectionProductArchivePage(size.name)}
                >
                  <span className="sizeNameTopSelectionProductArchivePage">{size.name}</span>
                  <span className="sizeDimsTopSelectionProductArchivePage">{size.dims}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sectionTopSelectionProductArchivePage">
            <span className="sectionTitleTopSelectionProductArchivePage">FINISH</span>
            <div className="finishGridTopSelectionProductArchivePage">
              {finishesTopSelectionProductArchivePage.map((finish) => (
                <div 
                  key={finish.name} 
                  className="finishItemTopSelectionProductArchivePage"
                  onClick={() => setSelectedFinishTopSelectionProductArchivePage(finish.name)}
                >
                  <div className={`finishColorOuterTopSelectionProductArchivePage ${selectedFinishTopSelectionProductArchivePage === finish.name ? 'activeFinishOuterTopSelectionProductArchivePage' : ''}`}>
                    <div className="finishColorInnerTopSelectionProductArchivePage" style={{ backgroundColor: finish.color }}></div>
                  </div>
                  <div className="finishTextTopSelectionProductArchivePage">
                    <span className="finishNameTopSelectionProductArchivePage">{finish.name}</span>
                    <span className="finishDescTopSelectionProductArchivePage">{finish.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sectionTopSelectionProductArchivePage">
            <span className="sectionTitleTopSelectionProductArchivePage" style={{marginBottom:'-20px', marginTop:'10px'}}>QUANTITY</span>
            
          </div>

          <div className="actionRowTopSelectionProductArchivePage">
           <div className="quantitySelectorTopSelectionProductArchivePage">
              <button className="qtyBtnTopSelectionProductArchivePage" onClick={decreaseQuantityTopSelectionProductArchivePage}>-</button>
              <span className="qtyValueTopSelectionProductArchivePage">{quantityTopSelectionProductArchivePage}</span>
              <button className="qtyBtnTopSelectionProductArchivePage" onClick={increaseQuantityTopSelectionProductArchivePage}>+</button>
            </div>
            <button className="addToCartBtnTopSelectionProductArchivePage" onClick={handleAddToCart}>
              ADD TO Cart
            </button>
            
            <button className="wishlistBtnTopSelectionProductArchivePage">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
          </div>

          <div className="trustBadgesTopSelectionProductArchivePage">
            <div className="badgeTopSelectionProductArchivePage">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              <div className="badgeTextTopSelectionProductArchivePage">
                <span className="badgeTitleTopSelectionProductArchivePage">Reliable Delivery</span>
                <span className="badgeDescTopSelectionProductArchivePage">Across Pakistan</span>
              </div>
            </div>
            <div className="badgeTopSelectionProductArchivePage">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
              <div className="badgeTextTopSelectionProductArchivePage">
                <span className="badgeTitleTopSelectionProductArchivePage">Secure Payments</span>
                <span className="badgeDescTopSelectionProductArchivePage">100% Safe & Secure</span>
              </div>
            </div>
            <div className="badgeTopSelectionProductArchivePage">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
              <div className="badgeTextTopSelectionProductArchivePage">
                <span className="badgeTitleTopSelectionProductArchivePage">Crafted with Care</span>
                <span className="badgeDescTopSelectionProductArchivePage">Premium Materials</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TopSelectionProductArchivePage;