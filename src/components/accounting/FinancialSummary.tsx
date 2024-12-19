import React from 'react';
import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react';
import { FinancialSummary } from './types';
import { formatCurrency } from '../stock/utils/stockCalculations';

interface FinancialSummaryCardsProps {
  summary: FinancialSummary;
}

export function FinancialSummaryCards({ summary }: FinancialSummaryCardsProps) {
  const cards = [
    {
      title: 'Revenus',
      value: formatCurrency(summary.revenue),
      icon: DollarSign,
      color: 'text-green-500',
    },
    {
      title: 'Dépenses',
      value: formatCurrency(summary.expenses),
      icon: TrendingDown,
      color: 'text-red-500',
    },
    {
      title: 'Bénéfices',
      value: formatCurrency(summary.profit),
      icon: TrendingUp,
      color: 'text-blue-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white/5 rounded-lg p-6 border border-white/10"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-white">{card.title}</h3>
            <card.icon className={`w-6 h-6 ${card.color}`} />
          </div>
          <p className="text-2xl font-bold text-white">{card.value}</p>
        </div>
      ))}
    </div>
  );
}