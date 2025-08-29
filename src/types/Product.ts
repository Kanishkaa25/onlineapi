export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  image: string;
  category: string;
  inStock: boolean;
}

export interface ApiResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}