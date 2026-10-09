// Existing images (baad mein apni images yahan replace kar dena)
const imagePool = [
  "/HomeGridGalleryNewLayout1.png",
  "/HomeGridGalleryNewLayout2.png",
  "/HomeGridGalleryNewLayout3.png",
  "/HomeGridGalleryNewLayout4.png",
  "/HomeGridGalleryNewLayout5.png",
  "/HomeGridGalleryNewLayout6.png",
  "/HomeGridGalleryNewLayout7.png",
  "/HomeGridGalleryNewLayout8.png",
  "/HomeGridGalleryNewLayout9.png",
];

// Main image + 4 aur images gallery ke liye
const buildImages = (main) => [main, ...imagePool.filter((i) => i !== main).slice(0, 4)];

// Har category ke 6 products ke main images (abhi wohi purani images)
const mainImages = [
  "/HomeGridGalleryNewLayout4.png",
  "/HomeGridGalleryNewLayout5.png",
  "/HomeGridGalleryNewLayout6.png",
  "/HomeGridGalleryNewLayout7.png",
  "/HomeGridGalleryNewLayout8.png",
  "/HomeGridGalleryNewLayout9.png",
];

export const categoriesData = [
 {
    slug: "premium-wall-decor",
    name: "PREMIUM WALL DECOR",
    subtitle: "Tactile. Layered. Distinct.",
    description:
      "A sculptural wall piece with layered textures and subtle metallic accents, designed to bring depth and character into contemporary interiors.",
    products: [
      { title: "SAND DUNES", price: 28000, img: "/products/premium-wall-decor/PremiumWallDecor1.jpeg" },
      { title: "GOLDEN FLOW", price: 32000, img: "/products/premium-wall-decor/PremiumWallDecor2.jpeg" },
      { title: "EARTHEN LAYERS", price: 26000, img: "/products/premium-wall-decor/PremiumWallDecor3.jpeg" },
      { title: "THE ARCH", price: 24000, img: "/products/premium-wall-decor/PremiumWallDecor4.jpeg" },
      { title: "NATURAL FORM", price: 30000, img: "/products/premium-wall-decor/PremiumWallDecor5.jpeg" },
      { title: "QUIET HARMONY", price: 27000, img: "/products/premium-wall-decor/PremiumWallDecor6.jpeg" },
    ],
  },
{
    slug: "led-wall-decor",
    name: "LED WALL DECOR",
    subtitle: "Light that transforms.",
    description:
      "Soft, glowing LED wall art that turns any wall into a warm focal point and sets the mood of your room.",
    products: [
      { title: "LED WALL DECOR 1", price: 18500, img: "/products/led-wall-decor/LedWallDecor1.jpeg" },
      { title: "LED WALL DECOR 2", price: 21000, img: "/products/led-wall-decor/LedWallDecor2.jpeg" },
      { title: "LED WALL DECOR 3", price: 24500, img: "/products/led-wall-decor/LedWallDecor3.jpeg" },
      { title: "LED WALL DECOR 4", price: 16000, img: "/products/led-wall-decor/LedWallDecor4.jpeg" },
      { title: "LED WALL DECOR 5", price: 27000, img: "/products/led-wall-decor/LedWallDecor5.jpeg" },
      { title: "LED WALL DECOR 6", price: 19500, img: "/products/led-wall-decor/LedWallDecor6.jpeg" },
    ],
  },
{
    slug: "islamic-calligraphy",
    name: "ISLAMIC CALLIGRAPHY",
    subtitle: "Art with a deeper meaning.",
    description:
      "Beautifully crafted Islamic calligraphy that brings peace, meaning and elegance to your home.",
    products: [
      { title: "ISLAMIC CALLIGRAPHY 1", price: 12500, img: "/products/islamic-calligraphy/IslamicCalligraphy1.jpeg" },
      { title: "ISLAMIC CALLIGRAPHY 2", price: 15000, img: "/products/islamic-calligraphy/IslamicCalligraphy2.jpeg" },
      { title: "ISLAMIC CALLIGRAPHY 3", price: 9800, img: "/products/islamic-calligraphy/IslamicCalligraphy3.jpeg" },
      { title: "ISLAMIC CALLIGRAPHY 4", price: 18000, img: "/products/islamic-calligraphy/IslamicCalligraphy4.jpeg" },
      { title: "ISLAMIC CALLIGRAPHY 5", price: 14500, img: "/products/islamic-calligraphy/IslamicCalligraphy5.jpeg" },
      { title: "ISLAMIC CALLIGRAPHY 6", price: 21000, img: "/products/islamic-calligraphy/IslamicCalligraphy6.jpeg" },
    ],
  },
  {
    slug: "metal-wall-decor",
    name: "METAL WALL DECOR",
    subtitle: "Bold forms. Lasting impressions.",
    description:
      "Strong, finely finished metal wall pieces designed to make a lasting statement in any space.",
    products: [
      { title: "METAL WALL DECOR 1", price: 22000 },
      { title: "METAL WALL DECOR 2", price: 26500 },
      { title: "METAL WALL DECOR 3", price: 19000 },
      { title: "METAL WALL DECOR 4", price: 31000 },
      { title: "METAL WALL DECOR 5", price: 24000 },
      { title: "METAL WALL DECOR 6", price: 28500 },
    ],
  },
  {
    slug: "metal-wall-clocks",
    name: "METAL WALL CLOCKS",
    subtitle: "Function meets art.",
    description:
      "Statement metal wall clocks that keep perfect time while adding style and character to your wall.",
    products: [
      { title: "METAL WALL CLOCK 1", price: 8500 },
      { title: "METAL WALL CLOCK 2", price: 11000 },
      { title: "METAL WALL CLOCK 3", price: 9500 },
      { title: "METAL WALL CLOCK 4", price: 13500 },
      { title: "METAL WALL CLOCK 5", price: 7800 },
      { title: "METAL WALL CLOCK 6", price: 15000 },
    ],
  },
  {
    slug: "neon-wall-decor",
    name: "NEON WALL DECOR",
    subtitle: "Personal. Playful. Expressive.",
    description:
      "Vibrant neon wall pieces that add personality and a playful glow to your room.",
    products: [
      { title: "NEON WALL DECOR 1", price: 14000 },
      { title: "NEON WALL DECOR 2", price: 16500 },
      { title: "NEON WALL DECOR 3", price: 12000 },
      { title: "NEON WALL DECOR 4", price: 18500 },
      { title: "NEON WALL DECOR 5", price: 15500 },
      { title: "NEON WALL DECOR 6", price: 20000 },
    ],
  },
];

// Flat list (36 products) - baki sab files isi ko use karti hain
export const productsData = categoriesData.flatMap((cat, catIndex) =>
  cat.products.map((p, i) => {
    const id = catIndex * 6 + i + 1; // 1 se 36 tak unique id

    // Card wali image (agar nahi di to purani placeholder)
    const mainImg = p.img || mainImages[i];

    return {
      id,
      category: cat.slug,
      title: p.title,
      type: cat.name,
      subtitle: cat.subtitle,
      description: cat.description,
      price: p.price,
      reviews: 5 + ((id * 7) % 12),
      img: mainImg,                       // card, cart, checkout, confirmation
      images: buildImages(mainImg),       // product page: 1st = mainImg, baqi 4 purani
    };
  })
);