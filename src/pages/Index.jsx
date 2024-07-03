import { useEffect, useState } from "react";
import { Loader } from "@/components/ui/loader";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a loading time of 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">CABs 24</h1>
        <Loader size="lg" />
      </div>
    );
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to CABs 24</h1>
      <p>Start your journey with us.</p>
    </div>
  );
};

export default Index;