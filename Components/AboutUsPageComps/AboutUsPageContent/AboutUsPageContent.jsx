import React from "react";
import {
  Sparkle,
  Heart,
  Gem,
  Droplet,
  Tag,
  Feather,
  Truck,
  PackageCheck,
  Headphones,
  ShieldCheck,
  CircleCheck,
} from "lucide-react";
import "./AboutUsPageContent.css";

function AboutUsPageContent() {
  return (
    <div className="aboutUsPageContent">
      {/* Decor showcase - alternating image / text grid */}
      <section className="hijabShowcaseAboutUsPageContent">
        <div className="showcaseGridAboutUsPageContent">
          {/* Top-left image */}
          <div className="showcaseImgWearAboutUsPageContent">
            <img
              src="/abouruspagecontent1image.jpg"
              alt="Beautiful textured wall art in a modern living space"
              className="showcaseImageAboutUsPageContent"
            />
          </div>

          {/* Top-right text */}
          <div className="showcaseTextExploreAboutUsPageContent">
        
            <h2 className="showcaseHeadingAboutUsPageContent">
              Explore Distinctive Decor
            </h2>
            <p className="showcaseParaAboutUsPageContent">
              Discover our premium collection of textured wall decor, LED art, and modern metal clocks. Each piece is designed to bring depth, character, and a sense of luxury to your space.
            </p>

            <ul className="showcaseFeatureListAboutUsPageContent">
              <li className="showcaseFeatureItemAboutUsPageContent">
                <Gem
                  className="showcaseFeatureIconAboutUsPageContent"
                  size={18}
                  strokeWidth={1.5}
                />
                <span className="showcaseFeatureTextAboutUsPageContent">
                  Tactile, layered, and distinct textured designs.
                </span>
              </li>
              <li className="showcaseFeatureItemAboutUsPageContent">
                <Droplet
                  className="showcaseFeatureIconAboutUsPageContent"
                  size={18}
                  strokeWidth={1.5}
                />
                <span className="showcaseFeatureTextAboutUsPageContent">
                  Elegant Islamic calligraphy for contemporary homes.
                </span>
              </li>
              <li className="showcaseFeatureItemAboutUsPageContent">
                <Tag
                  className="showcaseFeatureIconAboutUsPageContent"
                  size={18}
                  strokeWidth={1.5}
                />
                <span className="showcaseFeatureTextAboutUsPageContent">
                  Exclusive neon and glowing LED wall art collections.
                </span>
              </li>
              <li className="showcaseFeatureItemAboutUsPageContent">
                <Feather
                  className="showcaseFeatureIconAboutUsPageContent"
                  size={18}
                  strokeWidth={1.5}
                />
                <span className="showcaseFeatureTextAboutUsPageContent">
                  Transform your blank walls into striking statement pieces.
                </span>
              </li>
            </ul>

            <button className="showcaseBtnAboutUsPageContent">
              Shop Collections
            </button>
          </div>

          {/* Bottom-left text */}
          <div className="showcaseTextWearAboutUsPageContent">
           
            <h2 className="showcaseHeadingAboutUsPageContent">
              Less Decor. More Presence.
            </h2>
            <p className="showcaseParaAboutUsPageContent">
              Our thoughtfully crafted wall art brings an elemental aesthetic that transforms any room. Experience how intricate texture creates presence and adds something truly unique to your daily life.
            </p>
            <button className="showcaseBtnAboutUsPageContent">
              Explore Now
            </button>
          </div>

          {/* Bottom-right image */}
          <div className="showcaseImgExploreAboutUsPageContent">
            <img
              src="/abouruspagecontent2image.jpg"
              alt="Glowing LED wall art mounted above a sophisticated sofa"
              className="showcaseImageAboutUsPageContent"
            />
          </div>
        </div>
      </section>

      {/* Exquisite Collections + stats */}
      <section className="collectionsStatsAboutUsPageContent">
        <div className="collectionsTextAboutUsPageContent">
          <h3 className="collectionsHeadingAboutUsPageContent">
            Artistry in Every Detail
          </h3>
          <p className="collectionsParaAboutUsPageContent">
            From sand dunes to golden flows, our exquisite collections of textured and illuminated wall art are meticulously crafted to elevate your interior design experience.
          </p>
        </div>

        <div className="statsRowAboutUsPageContent">
          <div className="statItemAboutUsPageContent">
            <span className="statNumberAboutUsPageContent">10+</span>
            <span className="statLabelAboutUsPageContent">
              Design Categories
            </span>
          </div>
          <div className="statItemAboutUsPageContent">
            <span className="statNumberAboutUsPageContent">100%</span>
            <span className="statLabelAboutUsPageContent">Original Craft</span>
          </div>
          <div className="statItemAboutUsPageContent">
            <span className="statNumberAboutUsPageContent">5K+</span>
            <span className="statLabelAboutUsPageContent">
              Happy Homeowners
            </span>
          </div>
          <div className="statItemAboutUsPageContent">
            <span className="statNumberAboutUsPageContent">4.9</span>
            <span className="statLabelAboutUsPageContent">Customer Rating</span>
          </div>
        </div>
      </section>

      {/* Personalize It */}
      <section className="personalizeSectionAboutUsPageContent">
        <div className="personalizeTextAboutUsPageContent">
          <p className="personalizeIntroAboutUsPageContent">
            Every living space tells a beautiful story. Enhance yours with high-quality pieces that speak directly to your unique aesthetic and personality.
          </p>

          <div className="personalizeScriptWrapAboutUsPageContent">
            <span className="personalizeScriptAboutUsPageContent">
              Curate Your Space!
            </span>
            {/* <Heart
              className="personalizeHeartIconAboutUsPageContent"
              size={20}
              strokeWidth={1.5}
            /> */}
          </div>
          <span className="personalizeSubAboutUsPageContent">
            For Your Dream Home
          </span>

          <p className="personalizeParaAboutUsPageContent">
            Whether it is the warm glow of neon art, the spiritual touch of Islamic calligraphy, or the sophisticated finish of metal clocks, Beyvora Decor provides original creations to complete your vision.
          </p>

          <button className="personalizeBtnAboutUsPageContent">
            Discover More
          </button>
        </div>

        <div className="personalizeImageAboutUsPageContent">
          <img
            src="/abouruspagecontent3image.jpg"
            alt="Close up detail of a premium textured wall art piece"
            className="showcaseImageAboutUsPageContent"
          />
        </div>
      </section>

      {/* Feature icons row */}
      {/* <section className="featuresAboutUsPageContent">
        <div className="featureItemAboutUsPageContent">
          <Truck
            className="featureIconAboutUsPageContent"
            size={26}
            strokeWidth={1.4}
          />
          <h4 className="featureTitleAboutUsPageContent">Timely Delivery</h4>
          <p className="featureTextAboutUsPageContent">
            Fast and reliable shipping to deliver your art safely to your door.
          </p>
        </div>
        <div className="featureItemAboutUsPageContent">
          <PackageCheck
            className="featureIconAboutUsPageContent"
            size={26}
            strokeWidth={1.4}
          />
          <h4 className="featureTitleAboutUsPageContent">Premium Packaging</h4>
          <p className="featureTextAboutUsPageContent">
            Carefully packed to ensure your decor arrives in pristine condition.
          </p>
        </div>
        <div className="featureItemAboutUsPageContent">
          <Headphones
            className="featureIconAboutUsPageContent"
            size={26}
            strokeWidth={1.4}
          />
          <h4 className="featureTitleAboutUsPageContent">24/7 Support</h4>
            <p className="featureTextAboutUsPageContent">
            Our dedicated customer service team is always here to assist you.
          </p>
        </div>
        <div className="featureItemAboutUsPageContent">
          <ShieldCheck
            className="featureIconAboutUsPageContent"
            size={26}
            strokeWidth={1.4}
          />
          <h4 className="featureTitleAboutUsPageContent">Secured Payment</h4>
          <p className="featureTextAboutUsPageContent">
            Industry-leading encryption to keep your personal data completely safe.
          </p>
        </div>
        <div className="featureItemAboutUsPageContent">
          <CircleCheck
            className="featureIconAboutUsPageContent"
            size={26}
            strokeWidth={1.4}
          />
          <h4 className="featureTitleAboutUsPageContent">Safe Check Out</h4>
          <p className="featureTextAboutUsPageContent">
            Multiple trusted payment options for a smooth and easy experience.
          </p>
        </div>
      </section> */}
    </div>
  );
}

export default AboutUsPageContent;