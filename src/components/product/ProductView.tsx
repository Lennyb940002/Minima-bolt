import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { ProductForm } from './ProductForm';
import { ProductFormData } from './types';

export function ProductView() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (data: ProductFormData) => {
    console.log('Product data:', data);
    setShowForm(false);
  };

  return (
    <div className="p-6">
      {!showForm ? (
        <div className="text-center">
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90"
          >
            <Plus className="w-4 h-4" />
            Nouveau Produit
          </button>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">
            Création de Produit
          </h2>
          <ProductForm
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}
    </div>
  );
}