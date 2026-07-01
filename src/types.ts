export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  type: 'wear' | 'shoes' | 'accessories';
  color: string;
  material?: string;
  strap?: string;
  waterResistant?: boolean;
  uvProtection?: boolean;
  sizes?: string[];
  imageUrl: string;
  description: string;
  rating: number;
  isBestSeller?: boolean;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: string;
  imageUrl: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  avatar: string;
  role: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
