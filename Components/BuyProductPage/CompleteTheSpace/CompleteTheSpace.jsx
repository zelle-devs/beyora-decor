import React from 'react';
import './CompleteTheSpace.css';

function CompleteTheSpace() {
  const productsCompleteTheSpace = [
    {
      id: 1,
      title: 'Metal Wall Clock',
      price: 'PKR 26,000',
      img: '/HomeGridGalleryNewLayout1.png'
    },
    {
      id: 2,
      title: 'Islamic Calligraphy',
      price: 'PKR 32,000',
      img: '/HomeGridGalleryNewLayout2.png'
    },
    {
      id: 3,
      title: 'Metal Wall Decor',
      price: 'PKR 27,000',
      img: '/HomeGridGalleryNewLayout3.png'
    },
    {
      id: 4,
      title: 'LED Wall Decor',
      price: 'PKR 29,000',
      img: '/HomeGridGalleryNewLayout5.png'
    }
  ];

  return (
    <div className="sectionCompleteTheSpace">
      <div className="containerCompleteTheSpace">
        
        <div className="headerCompleteTheSpace">
          <div className="headerLeftCompleteTheSpace">
            <span className="subtitleCompleteTheSpace">YOU MAY ALSO LIKE</span>
            <h2 className="titleCompleteTheSpace">COMPLETE THE SPACE.</h2>
          </div>
          <div className="headerRightCompleteTheSpace">
            <a href="#" className="viewAllLinkCompleteTheSpace">
              VIEW ALL TEXTURED WALL DECOR <span className="arrowCompleteTheSpace">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="gridCompleteTheSpace">
          {productsCompleteTheSpace.map((product) => (
            <div key={product.id} className="cardCompleteTheSpace">
              <div className="imageWrapperCompleteTheSpace">
                <img src={product.img} alt={product.title} className="imageCompleteTheSpace" />
              </div>
              <div className="detailsCompleteTheSpace">
                <div className="textCompleteTheSpace">
                  <h3 className="cardTitleCompleteTheSpace">{product.title}</h3>
                  <p className="cardPriceCompleteTheSpace">{product.price}</p>
                </div>
                <div className="iconCompleteTheSpace">&rarr;</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CompleteTheSpace;