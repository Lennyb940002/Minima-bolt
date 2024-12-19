import React from 'react';
import { Transaction } from './types';
import { formatCurrency } from '../stock/utils/stockCalculations';

interface TransactionsTableProps {
  transactions: Transaction[];
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Date</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Catégorie</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Description</th>
            <th className="px-4 py-3 text-right text-sm font-medium text-white/60">Montant</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-b border-white/10">
              <td className="px-4 py-3 text-sm text-white">{transaction.date}</td>
              <td className="px-4 py-3 text-sm text-white">{transaction.category}</td>
              <td className="px-4 py-3 text-sm text-white">{transaction.description}</td>
              <td className={`px-4 py-3 text-sm text-right ${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
                }`}>
                {transaction.type === 'expense' ? '- ' : '+ '}
                {formatCurrency(transaction.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}