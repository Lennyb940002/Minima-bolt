export interface StockItem {
  id: string;
  product: string;
  reference: string;
  quantity: number;
  unitPrice: number;
  salePrice: number;
  category: string;
  threshold: number;
  lastUpdated: string;
}

export interface StockSummary {
  totalProducts: number;
  totalValue: number;
  pendingOrders: number;
  lowStockCount: number;
}

export interface StockFilter {
  category: string;
  searchTerm: string;
  showLowStock: boolean;
}

export interface Product {
  title: string;
  reference: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  salePrice: number;
}

// types.ts
export interface StockItem {
  id: string;
  product: string;
  reference: string;
  quantity: number;
  unitPrice: number;
  salePrice: number;
  category: string;
  threshold: number;
  lastUpdated: string;
}
