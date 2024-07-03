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
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
        <h1 className="text-5xl font-extrabold mb-4">CABs 24</h1>
        <Loader size="lg" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to CABs 24</h1>
      <p className="text-xl mb-8">Start your journey with us.</p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-full">Get Started</button>
    </div>
  );
};

export default Index;