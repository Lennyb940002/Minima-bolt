
import { Sale } from './types';
import { MoreHorizontal, Check, Clock, X } from 'lucide-react';

interface SalesTableProps {
  sales: Sale[];
}

const statusIcons = {
  completed: <Check className="w-4 h-4 text-green-500" />,
  pending: <Clock className="w-4 h-4 text-yellow-500" />,
  cancelled: <X className="w-4 h-4 text-red-500" />,
};

export function SalesTable({ sales }: SalesTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Produit</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Quantité</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Prix de vente</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Coût unitaire</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Marge</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Date</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Client</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Paiement</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Statut</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-white/60">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id} className="border-b border-white/10">
              <td className="px-4 py-3 text-sm text-white">{sale.product}</td>
              <td className="px-4 py-3 text-sm text-white">{sale.quantity}</td>
              <td className="px-4 py-3 text-sm text-white">{sale.salePrice}€</td>
              <td className="px-4 py-3 text-sm text-white">{sale.unitCost}€</td>
              <td className="px-4 py-3 text-sm text-white">{sale.margin}€</td>
              <td className="px-4 py-3 text-sm text-white">{sale.date}</td>
              <td className="px-4 py-3 text-sm text-white">{sale.client}</td>
              <td className="px-4 py-3 text-sm text-white">{sale.paymentMethod}</td>
              <td className="px-4 py-3 text-sm text-white">
                <div className="flex items-center space-x-1">
                  {statusIcons[sale.status]}
                  <span>{sale.status}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-white">
                <button className="p-1 hover:bg-white/10 rounded">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}