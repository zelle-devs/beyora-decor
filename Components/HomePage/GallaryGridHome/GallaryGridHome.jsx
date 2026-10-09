import React from 'react';
import './GallaryGridHome.css';
import { MoveRight } from 'lucide-react';

function GallaryGridHome() {
  const collectionsGallaryGridHome = [
    {
      id: '01',
      title: 'PREMIUM WALL DECOR',
      desc: 'Tactile. Layered. Distinct.',
      img: '/products/premium-wall-decor/PremiumWallDecor1.jpeg',
      link: '/category/premium-wall-decor'
    },
    {
      id: '02',
      title: 'LED WALL DECOR',
      desc: 'Light that transforms.',
      img: '/products/led-wall-decor/LedWallDecor1.jpeg',
      link: '/category/led-wall-decor'
    },
    {
      id: '03',
      title: 'ISLAMIC CALLIGRAPHY',
      desc: 'Art with a deeper meaning.',
      img: '/products/islamic-calligraphy/IslamicCalligraphy6.jpeg',
      link: '/category/islamic-calligraphy'
    },
    {
      id: '04',
      title: 'METAL WALL DECOR',
      desc: 'Bold forms. Lasting impressions.',
      img: '/HomeGridGalleryNewLayout3.png',
      link: '/category/metal-wall-decor'
    },
    {
      id: '05',
      title: 'METAL WALL CLOCKS',
      desc: 'Function meets art.',
      img: '/HomeGridGalleryNewLayout1.png',
      link: '/category/metal-wall-clocks'
    },
    {
      id: '06',
      title: 'NEON WALL DECOR',
      desc: 'Personal. Playful. Expressive.',
      img: '/HomeGridGalleryNewLayout8.png',
      link: '/category/neon-wall-decor'
    }
  ];

  return (
    <div className="containerGallaryGridHome">
      <div className="headerGallaryGridHome">
        <div className="headerLeftGallaryGridHome">
          <span className="subtitleHomeTagLineSection">THE COLLECTIONS</span>
          <h2 className="titleGallaryGridHome">EXPLORE THE COLLECTION</h2>
        </div>
        <div className="headerRightGallaryGridHome">
          <a href="/category/premium-wall-decor" className="viewAllLinkGallaryGridHome">
            VIEW ALL COLLECTIONS <span className="arrowGallaryGridHome">&rarr;</span>
          </a>
        </div>
      </div>

      <div className="gridGallaryGridHome">
        {collectionsGallaryGridHome.map((item) => (
          <a
            href={item.link}
            key={item.id}
            className="cardGallaryGridHome"
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
          >
            <img src={item.img} alt={item.title} className="bgImageGallaryGridHome" />
            <div className="overlayGallaryGridHome">
              <div className="topContentGallaryGridHome">
                <span className="cardNumberGallaryGridHome">{item.id}</span>
                <h3 className="cardTitleGallaryGridHome">{item.title}</h3>
                <p className="cardDescGallaryGridHome">{item.desc}</p>
              </div>
              <div className="bottomContentGallaryGridHome">
                <span className="exploreLinkGallaryGridHome">
                  EXPLORE <span className="exploreArrowGallaryGridHome"><MoveRight size={18} strokeWidth={1.4}/></span>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default GallaryGridHome;