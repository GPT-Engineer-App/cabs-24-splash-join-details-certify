import React from 'react';
import { Spinner } from "@/components/ui/spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <Spinner className="h-8 w-8 text-primary" />
    </div>
  );
};

export default Loader;