import React from 'react';
import Loader from '@/components/Loader';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-4">CABs 24</h1>
      <Loader />
    </div>
  );
};

export default Index;