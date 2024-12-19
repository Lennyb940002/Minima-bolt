import React, { useState } from 'react';
import { StockItem, StockFilter, StockSummary } from './types';
import { StockSummaryCards } from './StockSummaryCards';
import { StockTable } from './StockTable';
import { calculateTotalValue, getLowStockItems } from './utils/stockCalculations';

// Mock data - In a real app, this would come from an API
const mockItems: StockItem[] = [
  {
    id: '1',
    product: 'Laptop Pro X',
    reference: 'LAP-001',
    quantity: 15,
    unitPrice: 899.99,
    salePrice: 1299.99,
    category: 'Électronique',
    threshold: 20,
    lastUpdated: '2024-03-15',
  },
  {
    id: '2',
    product: 'Smartphone Y',
    reference: 'SPH-002',
    quantity: 8,
    unitPrice: 399.99,
    salePrice: 599.99,
    category: 'Électronique',
    threshold: 10,
    lastUpdated: '2024-03-14',
  },
  // Add more mock items...
];

const categories = ['Électronique', 'Accessoires', 'Périphériques'];

export function StockView() {
  const [filters, setFilters] = useState<StockFilter>({
    category: '',
    searchTerm: '',
    showLowStock: false,
  });

  // Calculate summary
  const summary: StockSummary = {
    totalProducts: mockItems.length,
    totalValue: calculateTotalValue(mockItems),
    pendingOrders: 15, // Mock value
    lowStockCount: getLowStockItems(mockItems).length,
  };

  // Filter items
  const filteredItems = mockItems.filter((item) => {
    if (filters.showLowStock && item.quantity > item.threshold) return false;
    if (filters.category && item.category !== filters.category) return false;
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      return (
        item.product.toLowerCase().includes(searchLower) ||
        item.reference.toLowerCase().includes(searchLower)
      );
    }
    return true;
  });

  return (
    <div className="p-6 space-y-6">
      <StockSummaryCards summary={summary} />
      <StockTable items={filteredItems} />
    </div>
  );
}