import React from 'react';
import { Calculator } from './Calculator';
import { FinancialSummaryCards } from './FinancialSummary';
import { TransactionsTable } from './TransactionsTable';
import { Transaction, FinancialSummary } from './types';

const mockTransactions: Transaction[] = [
  {
    id: '1',
    date: '2024-03-15',
    category: 'Ventes',
    description: 'Vente produit A',
    amount: 1500,
    type: 'income',
  },
  {
    id: '2',
    date: '2024-03-14',
    category: 'Fournisseurs',
    description: 'Achat stock',
    amount: 800,
    type: 'expense',
  },
];

const mockSummary: FinancialSummary = {
  revenue: 2000,
  expenses: 550,
  profit: 1450,
};

export function AccountingView() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <FinancialSummaryCards summary={mockSummary} />
        </div>
        <Calculator />
      </div>
      <TransactionsTable transactions={mockTransactions} />
    </div>
  );
}