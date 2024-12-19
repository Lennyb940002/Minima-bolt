
import { SalesChartData } from './types';

interface SalesChartProps {
  data: SalesChartData[];
}

export function SalesChart({ data }: SalesChartProps) {
  const maxValue = Math.max(...data.map(d => d.sales));

  return (
    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
      <h3 className="text-lg font-medium text-white mb-4">Évolution des ventes</h3>
      <div className="h-64 flex items-end space-x-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center"
          >
            <div
              className="w-full bg-white/20 hover:bg-white/30 transition-colors rounded-t"
              style={{ height: `${(item.sales / maxValue) * 100}%` }}
            />
            <span className="text-xs text-white/60 mt-2">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}