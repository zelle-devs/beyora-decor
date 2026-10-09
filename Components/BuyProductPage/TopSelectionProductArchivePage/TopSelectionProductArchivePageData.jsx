// 👇 apni Shop All data file ka asli path likho
import shopAll from '@/Components/ShopAllProductSection/productsShopAllProductSection';

const DEFAULT_SUBTITLE = 'Tactile. Layered. Distinct.';
const DEFAULT_DESC =
  'A sculptural wall piece with layered textures and subtle metallic accents, designed to bring depth and character into contemporary interiors.';

// ---------- Category (home grid) products ----------
export const products = [
  { id: 'cat-1', title: 'SAND DUNES',     price: 28000, images: ['/HomeGridGalleryNewLayout4.png'] },
  { id: 'cat-2', title: 'GOLDEN FLOW',    price: 32000, images: ['/HomeGridGalleryNewLayout5.png'] },
  { id: 'cat-3', title: 'EARTHEN LAYERS', price: 26000, images: ['/HomeGridGalleryNewLayout6.png'] },
  { id: 'cat-4', title: 'THE ARCH',       price: 24000, images: ['/HomeGridGalleryNewLayout7.png'] },
  { id: 'cat-5', title: 'NATURAL FORM',   price: 30000, images: ['/HomeGridGalleryNewLayout8.png'] },
  { id: 'cat-6', title: 'QUIET HARMONY',  price: 27000, images: ['/HomeGridGalleryNewLayout9.png'] },
].map((p) => ({
  ...p,
  category: 'PREMIUM WALL DECOR',
  subtitle: DEFAULT_SUBTITLE,
  description: DEFAULT_DESC,
  oldPrice: 0,
  badge: '',
}));

// ---------- Shop All products ----------
// "Rs. 18,999.00" -> 18999
export const parsePrice = (str) =>
  parseFloat(String(str).replace(/rs\.?/i, '').replace(/,/g, '').trim()) || 0;

const shopProducts = shopAll.map((p) => ({
  id: `shop-${p.id}`,
  title: p.title,
  price: parsePrice(p.newPrice),
  oldPrice: parsePrice(p.oldPrice),
  badge: p.badge,
  category: p.brand,
  subtitle: DEFAULT_SUBTITLE,
  description:
    'A statement piece crafted with care, designed to bring depth and character into your space.',
  images: [p.img],
}));

const allProducts = [...products, ...shopProducts];

export const getProductById = (id) =>
  allProducts.find((p) => p.id === id) || null;

export const formatPKR = (val) => `PKR ${Number(val).toLocaleString()}`;