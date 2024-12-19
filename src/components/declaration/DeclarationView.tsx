import React from 'react';
import { DeclarationList } from './DeclarationList';
import { Declaration } from './types';

const mockDeclarations: Declaration[] = [
  {
    id: '1',
    type: 'TVA Mensuelle',
    dueDate: '2024-03-31',
    amount: 2500,
    status: 'pending',
  },
  {
    id: '2',
    type: 'Cotisations Sociales',
    dueDate: '2024-03-15',
    amount: 1200,
    status: 'submitted',
    submissionDate: '2024-03-14',
  },
];

export function DeclarationView() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Mes Déclarations</h2>
      <DeclarationList declarations={mockDeclarations} />
    </div>
  );
}