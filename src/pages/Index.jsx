import React from 'react';
import Loader from '@/components/ui/Loader'; // Corrected import path

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">CABs 24</h1>
      <Loader />
    </div>
  );
};

export default Index;