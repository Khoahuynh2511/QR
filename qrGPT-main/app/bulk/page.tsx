'use client';

import BulkGeneration from '@/components/BulkGeneration';

export default function BulkPage() {
  const isPremium = true; // Make bulk generation free for everyone

  const handleUpgrade = () => {
    // No longer needed since bulk is free
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BulkGeneration 
          isPremium={isPremium}
          onUpgrade={handleUpgrade}
        />
      </div>
    </div>
  );
} 