import React from 'react';
import './GallaryGridHome.css';
import { MoveRight } from 'lucide-react';

function GallaryGridHome() {
  const collectionsGallaryGridHome = [
    {
      id: '01',
      title: 'TEXTURED WALL DECOR',
      desc: 'Tactile. Layered. Distinct.',
      img: 'HomeGridGalleryNewLayout7.png'
    },
    {
      id: '02',
      title: 'LED WALL DECOR',
      desc: 'Light that transforms.',
      img: 'HomeGridGalleryNewLayout5.png'
    },
    {
      id: '03',
      title: 'ISLAMIC CALLIGRAPHY',
      desc: 'Art with a deeper meaning.',
      img: 'HomeGridGalleryNewLayout2.png'
    },
    {
      id: '04',
      title: 'METAL WALL DECOR',
      desc: 'Bold forms. Lasting impressions.',
      img: 'HomeGridGalleryNewLayout3.png'
    },
    {
      id: '05',
      title: 'METAL WALL CLOCKS',
      desc: 'Function meets art.',
      img: 'HomeGridGalleryNewLayout1.png'
    },
    {
      id: '06',
      title: 'NEON WALL DECOR',
      desc: 'Personal. Playful. Expressive.',
      img: 'HomeGridGalleryNewLayout8.png'
    }
  ];

  return (
    <div className="containerGallaryGridHome">
      <div className="headerGallaryGridHome">
        <div className="headerLeftGallaryGridHome">
          <span className="subtitleGallaryGridHome">THE COLLECTIONS</span>
          <h2 className="titleGallaryGridHome">EXPLORE THE COLLECTION</h2>
        </div>
        <div className="headerRightGallaryGridHome">
          <a href="#" className="viewAllLinkGallaryGridHome">
            VIEW ALL COLLECTIONS <span className="arrowGallaryGridHome">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="gridGallaryGridHome">
        {collectionsGallaryGridHome.map((item) => (
          <div key={item.id} className="cardGallaryGridHome">
            <img src={item.img} alt={item.title} className="bgImageGallaryGridHome" />
            <div className="overlayGallaryGridHome">
              <div className="topContentGallaryGridHome">
                <span className="cardNumberGallaryGridHome">{item.id}</span>
                <h3 className="cardTitleGallaryGridHome">{item.title}</h3>
                <p className="cardDescGallaryGridHome">{item.desc}</p>
              </div>
              <div className="bottomContentGallaryGridHome">
                <a href="#" className="exploreLinkGallaryGridHome">
                  EXPLORE <span className="exploreArrowGallaryGridHome"><MoveRight size={18} strokeWidth={1.4}/></span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GallaryGridHome;