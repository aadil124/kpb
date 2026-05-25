export interface Product {
  _id: string;

  name: string;

  description: string;

  category: string;

  images: string[];

  price: number;

  material: string;

  stock: number;

  featured: boolean;
}