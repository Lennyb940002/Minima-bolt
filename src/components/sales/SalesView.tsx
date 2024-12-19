import React, { useState } from 'react';
import { Package, DollarSign, TrendingUp } from 'lucide-react';
import { Period, Sale, SalesChartData } from './types';
import { SalesOverviewCard } from './SalesOverviewCard';
import { SalesChart } from './SalesChart';
import { SalesTable } from './SalesTable';

// Mock data - In a real app, this would come from an API
const mockSales: Sale[] = [
  {
    id: '1',
    product: 'Product A',
    quantity: 5,
    salePrice: 99.99,
    unitCost: 50,
    margin: 49.99,
    date: '2024-03-15',
    client: 'John Doe',
    paymentMethod: 'Card',
    status: 'completed',
  },
  // Add more mock sales...
];

const mockChartData: SalesChartData[] = [
  { date: 'Lun', sales: 150 },
  { date: 'Mar', sales: 230 },
  { date: 'Mer', sales: 180 },
  { date: 'Jeu', sales: 290 },
  { date: 'Ven', sales: 200 },
  { date: 'Sam', sales: 340 },
  { date: 'Dim', sales: 250 },
];

export function SalesView() {
  const [unitsPeriod, setUnitsPeriod] = useState<Period>('day');
  const [revenuePeriod, setRevenuePeriod] = useState<Period>('day');
  const [profitPeriod, setProfitPeriod] = useState<Period>('day');

  return (
    <div className="space-y-8 p-6 bg-gradient-to-br from-black/0 to-white/5 rounded-3xl backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SalesOverviewCard
          title="Unités vendues"
          value="1,234"
          period={unitsPeriod}
          onPeriodChange={setUnitsPeriod}
          icon={<Package className="w-6 h-6 text-white" />}
        />
        <SalesOverviewCard
          title="Chiffre d'affaires"
          value="12,345€"
          period={revenuePeriod}
          onPeriodChange={setRevenuePeriod}
          icon={<DollarSign className="w-6 h-6 text-white" />}
        />
        <SalesOverviewCard
          title="Bénéfices"
          value="6,789€"
          period={profitPeriod}
          onPeriodChange={setProfitPeriod}
          icon={<TrendingUp className="w-6 h-6 text-white" />}
        />
      </div>

      <SalesChart data={mockChartData} />

      <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl border border-white/20 backdrop-blur-md">
        <SalesTable sales={mockSales} />
      </div>
    </div>
  );
}