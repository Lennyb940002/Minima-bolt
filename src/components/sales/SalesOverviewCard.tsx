import React from 'react';
import { Period } from './types';

interface SalesOverviewCardProps {
  title: string;
  value: string;
  period: Period;
  onPeriodChange: (period: Period) => void;
  icon: React.ReactNode;
}

export function SalesOverviewCard({
  title,
  value,
}: SalesOverviewCardProps) {
  return (
    <div className="bg-gradient-to-br from-white/10 to-transparent rounded-2xl p-6 border border-white/20 backdrop-blur-sm hover:from-white/15 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center space-x-4">

          <h3 className="text-lg font-medium text-white/90">{title}</h3>
        </div>

      </div>
      <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
        {value}
      </p>
    </div>
  );
}