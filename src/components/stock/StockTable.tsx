import React from 'react';
import { MoreHorizontal, AlertTriangle } from 'lucide-react';
import { StockItem } from './types';
import { formatCurrency } from './utils/stockCalculations';

interface StockTableProps {
  items: StockItem[];
}

export function StockTable({ items }: StockTableProps) {
  return (
    <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Produit</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Référence</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Catégorie</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Quantité</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Prix Unitaire</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Prix Total</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Prix de Vente</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Dernière MàJ</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-white/10">
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    {item.quantity <= item.threshold && (
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    )}
                    <span className="text-white">{item.product}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-white">{item.reference}</td>
                <td className="px-4 py-3 text-sm text-white">{item.category}</td>
                <td className="px-4 py-3 text-sm text-white">{item.quantity}</td>
                <td className="px-4 py-3 text-sm text-white">{formatCurrency(item.unitPrice)}</td>
                <td className="px-4 py-3 text-sm text-white">
                  {formatCurrency(item.quantity * item.unitPrice)}
                </td>
                <td className="px-4 py-3 text-sm text-white">{formatCurrency(item.salePrice)}</td>
                <td className="px-4 py-3 text-sm text-white">{item.lastUpdated}</td>
                <td className="px-4 py-3 text-sm">
                  <button className="p-1 hover:bg-white/10 rounded">
                    <MoreHorizontal className="w-4 h-4 text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}