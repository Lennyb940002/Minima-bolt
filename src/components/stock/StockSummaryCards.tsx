import React from 'react';
import { Package, EuroIcon, ShoppingCart, AlertTriangle } from 'lucide-react';
import { StockSummary } from './types';

interface StockSummaryCardsProps {
  summary: StockSummary;
}

export function StockSummaryCards({ summary }: StockSummaryCardsProps) {
  const cards = [
    {
      title: 'Total Produits',
      value: summary.totalProducts,
      color: 'text-blue-500',
    },
    {
      title: 'Valeur Stock',
      value: new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
      }).format(summary.totalValue),
      color: 'text-green-500',
    },
    {
      title: 'Commandes en Attente',
      value: summary.pendingOrders,
      color: 'text-yellow-500',
    },

  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white/5 rounded-lg p-6 border border-white/10"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-white">{card.title}</h3>
          </div>
          <p className="text-2xl font-bold text-white">{card.value}</p>
        </div>
      ))}
    </div>
  );
}