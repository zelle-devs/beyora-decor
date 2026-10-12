"use client"

import React from 'react';
import './ProductPageSlider.css';
import { MoveRight } from 'lucide-react';
import { useParams } from 'next/navigation';
import { categoriesData } from '@/app/productsData';

function ProductPageSlider() {
  const params = useParams();
  const categorySlug = params?.category;

  const category = categoriesData.find((c) => c.slug === categorySlug);

  // Agar category na mile to ye default dikhega
  const name = category?.name || 'ALL COLLECTIONS';
  const subtitle = category?.subtitle || 'Tactile. Layered. Distinct.';
  const description =
    category?.description ||
    'Explore our handcrafted wall decor, designed to bring depth, character and a sense of quiet luxury to your space.';

  // Pehla lafz upar, baqi neeche (e.g. "PREMIUM" / "WALL DECOR")
  const words = name.split(' ');
  const firstLine = words[0];
  const secondLine = words.slice(1).join(' ');

  const handleExplore = () => {
    const grid = document.querySelector('.containerProductsCategorySection');
    if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="wrapperProductPageSlider">
      <div className="bgContainerProductPageSlider">
        <div className="gradientOverlayProductPageSlider"></div>

        <div className="contentProductPageSlider">

          <div className="leftSideProductPageSlider">
            <span className="subtitleProductPageSlider">COLLECTION</span>
            <h2 className="titleProductPageSlider">
              {firstLine}
              {secondLine && (
                <>
                  <br />
                  {secondLine}
                </>
              )}
            </h2>
            <h3 className="taglineProductPageSlider">{subtitle}</h3>
            <p className="descriptionProductPageSlider">{description}</p>
            {/* <button className="exploreBtnProductPageSlider" onClick={handleExplore}>
              EXPLORE THE COLLECTION <span className="arrowIconProductPageSlider"><MoveRight strokeWidth={1.4} /></span>
            </button> */}
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