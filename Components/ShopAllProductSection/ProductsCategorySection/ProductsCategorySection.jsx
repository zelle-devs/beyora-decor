"use client"


import React from 'react';
import './ProductsCategorySection.css';
import { MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
function ProductsCategorySection() {
     const router = useRouter();
  const productsProductsCategorySection = [
    {
      id: 1,
      title: "SAND DUNES",
      price: "PKR 28,000",
      img: "/HomeGridGalleryNewLayout4.png"
    },
    {
      id: 2,
      title: "GOLDEN FLOW",
      price: "PKR 32,000",
      img: "/HomeGridGalleryNewLayout5.png"
    },
    {
      id: 3,
      title: "EARTHEN LAYERS",
      price: "PKR 26,000",
      img: "/HomeGridGalleryNewLayout6.png"
    },
    {
      id: 4,
      title: "THE ARCH",
      price: "PKR 24,000",
      img: "/HomeGridGalleryNewLayout7.png"
    },
    {
      id: 5,
      title: "NATURAL FORM",
      price: "PKR 30,000",
      img: "/HomeGridGalleryNewLayout8.png"
    },
    {
      id: 6,
      title: "QUIET HARMONY",
      price: "PKR 27,000",
      img: "/HomeGridGalleryNewLayout9.png"
    }
  ];

  return (
    <div className="containerProductsCategorySection">
      
      <div className="gridProductsCategorySection">
        {productsProductsCategorySection.map((item) => (
          <div key={item.id} className="cardProductsCategorySection"  onClick={() => router.push('/buy-product')}>
            <div className="imageWrapperProductsCategorySection">
              <img src={item.img} alt={item.title} className="imageProductsCategorySection" />
              <button className="heartBtnProductsCategorySection">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            <div className="cardDetailsProductsCategorySection">
              <div className="textLeftProductsCategorySection">
                <h3 className="cardTitleProductsCategorySection">{item.title}</h3>
                <p className="cardPriceProductsCategorySection">{item.price}</p>
              </div>
              <div className="iconRightProductsCategorySection">
                <span className="arrowProductsCategorySection">&rarr;</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="promoBannerProductsCategorySection">
        
        <div className="promoImageWrapperProductsCategorySection">
          <img src="/SeeTheDifference2.png" alt="Texture Details" className="promoImageProductsCategorySection" />
          <div className="promoImageOverlayTextProductsCategorySection">
            <h3 className="promoImageTitleProductsCategorySection">IT'S IN<br/>THE DETAILS.</h3>
            <div className="promoImageLineProductsCategorySection"></div>
          </div>
        </div>

        <div className="promoTextWrapperProductsCategorySection">
          <span className="promoSubtitleProductsCategorySection">THE CRAFT</span>
          <h2 className="promoTitleProductsCategorySection">TEXTURE CREATES<br/>PRESENCE.</h2>
          <p className="promoDescProductsCategorySection">
            Each piece is crafted with layered materials, fine textures and thoughtful finishes — designed to bring depth and dimension to your walls.
          </p>
          <button className="promoBtnProductsCategorySection">
            OUR PROCESS <MoveRight strokeWidth={1.4}/>
          </button>
        </div>

        <div className="promoFeaturesWrapperProductsCategorySection">
          <div className="featureItemProductsCategorySection">
            <span className="featureIconProductsCategorySection">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </span>
            <span className="featureTextProductsCategorySection">PREMIUM<br/>MATERIALS</span>
          </div>
          <div className="featureItemProductsCategorySection">
            <span className="featureIconProductsCategorySection">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
              </svg>
            </span>
            <span className="featureTextProductsCategorySection">HANDCRAFTED<br/>DETAILS</span>
          </div>
          <div className="featureItemProductsCategorySection">
            <span className="featureIconProductsCategorySection">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a4 4 0 0 0-4 4v12a4 4 0 0 1-4 4H4"></path><path d="M4 2h3a4 4 0 0 1 4 4v12a4 4 0 0 0 4 4h3"></path>
                <circle cx="18" cy="12" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
              </svg>
            </span>
            <span className="featureTextProductsCategorySection">TIMELESS<br/>DESIGN</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductsCategorySection;