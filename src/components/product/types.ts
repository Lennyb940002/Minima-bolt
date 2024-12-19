export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  status: 'draft' | 'active' | 'archived';
  costPrice: number;
  salePrice: number;
  margin: number;
}

export interface ProductFormData {
  name: string;
  category: string;
  description: string;
  costPrice: number;
  salePrice: number;
}