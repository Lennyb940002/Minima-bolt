export type Period = 'day' | 'week' | 'month';

export interface SalesSummary {
  totalUnits: number;
  revenue: number;
  profit: number;
}

export interface Sale {
  id: string;
  product: string;
  quantity: number;
  salePrice: number;
  unitCost: number;
  margin: number;
  date: string;
  client: string;
  paymentMethod: string;
  status: 'pending' | 'completed' | 'cancelled';
  notes?: string;
}

export interface SalesChartData {
  date: string;
  sales: number;
}