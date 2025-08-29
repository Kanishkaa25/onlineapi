import { Product, ApiResponse } from '../types/Product';
import mascaraImg from '../assets/mascara.jpg';
import eyeshadowImg from '../assets/eyeshadow-palette.jpg';
import powderImg from '../assets/powder-canister.jpg';
import lipstickImg from '../assets/lipstick.jpg';
import foundationImg from '../assets/foundation.jpg';
import brushSetImg from '../assets/brush-set.jpg';
import blushImg from '../assets/blush.jpg';
import concealerImg from '../assets/concealer.jpg';
import highlighterImg from '../assets/highlighter.jpg';

// Mock product data
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Essence Mascara Lash Princess',
    brand: 'Essence',
    description: 'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic, full lashes with this cult-favorite formula.',
    price: 9.99,
    originalPrice: 12.99,
    discountPercentage: 23,
    image: mascaraImg,
    category: 'mascara',
    inStock: true,
  },
  {
    id: '2',
    name: 'Eyeshadow Palette with Mirror',
    brand: 'Glamour Beauty',
    description: 'The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. Perfect for both day and night makeup.',
    price: 19.99,
    originalPrice: 24.99,
    discountPercentage: 20,
    image: eyeshadowImg,
    category: 'eyeshadow',
    inStock: true,
  },
  {
    id: '3',
    name: 'Powder Canister',
    brand: 'Velvet Touch',
    description: 'The Powder Canister is a finely milled setting powder designed to set makeup and provide a smooth, flawless finish. Long-lasting formula for all-day wear.',
    price: 14.99,
    originalPrice: 17.99,
    discountPercentage: 17,
    image: powderImg,
    category: 'powder',
    inStock: true,
  },
  {
    id: '4',
    name: 'Luxury Velvet Lipstick',
    brand: 'Rouge Elite',
    description: 'Experience luxurious color with our premium velvet lipstick. Rich pigmentation meets comfortable wear in this sophisticated formula that lasts all day.',
    price: 24.99,
    originalPrice: 29.99,
    discountPercentage: 17,
    image: lipstickImg,
    category: 'lipstick',
    inStock: true,
  },
  {
    id: '5',
    name: 'Flawless Coverage Foundation',
    brand: 'Perfect Base',
    description: 'Achieve a flawless complexion with our full-coverage foundation. Buildable formula provides natural-looking coverage while nourishing your skin all day long.',
    price: 32.99,
    originalPrice: 39.99,
    discountPercentage: 18,
    image: foundationImg,
    category: 'foundation',
    inStock: true,
  },
  {
    id: '6',
    name: 'Professional Brush Set',
    brand: 'Artisan Tools',
    description: 'Complete your makeup routine with this professional-grade brush set. Includes all essential brushes for face and eye makeup in an elegant travel case.',
    price: 49.99,
    originalPrice: 64.99,
    discountPercentage: 23,
    image: brushSetImg,
    category: 'brushes',
    inStock: true,
  },
  {
    id: '7',
    name: 'Natural Glow Blush',
    brand: 'Bloom Beauty',
    description: 'Add a natural flush to your cheeks with our silky blush compact. Buildable color that blends seamlessly for a healthy, radiant glow.',
    price: 16.99,
    originalPrice: 21.99,
    discountPercentage: 23,
    image: blushImg,
    category: 'blush',
    inStock: true,
  },
  {
    id: '8',
    name: 'High Coverage Concealer',
    brand: 'Cover Perfect',
    description: 'Conceal imperfections with ease using our lightweight, high-coverage concealer. Long-wearing formula that doesn\'t crease or fade throughout the day.',
    price: 18.99,
    originalPrice: 22.99,
    discountPercentage: 17,
    image: concealerImg,
    category: 'concealer',
    inStock: false,
  },
  {
    id: '9',
    name: 'Illuminating Highlighter Palette',
    brand: 'Glow Studios',
    description: 'Create stunning highlights with our multi-dimensional highlighter palette. Features four complementary shades for a customizable glow.',
    price: 28.99,
    originalPrice: 35.99,
    discountPercentage: 19,
    image: highlighterImg,
    category: 'highlighter',
    inStock: true,
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Fake API service
export class ProductService {
  static async fetchProducts(page = 1, limit = 10): Promise<ApiResponse> {
    // Simulate network delay
    await delay(800);
    
    const start = (page - 1) * limit;
    const end = start + limit;
    const products = MOCK_PRODUCTS.slice(start, end);
    
    return {
      products,
      total: MOCK_PRODUCTS.length,
      page,
      limit,
    };
  }
  
  static async fetchProductById(id: string): Promise<Product | null> {
    await delay(500);
    return MOCK_PRODUCTS.find(product => product.id === id) || null;
  }
  
  static async fetchProductsByCategory(category: string): Promise<Product[]> {
    await delay(600);
    return MOCK_PRODUCTS.filter(product => product.category === category);
  }
}