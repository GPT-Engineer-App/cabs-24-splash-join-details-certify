import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Certify = () => {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    // Proceed to the next step or display a confirmation message
    setTimeout(() => {
      navigate("/next-step"); // Replace with the actual next step route
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Certify Your Role</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={() => handleRoleSelection("Driver")} className="w-full">
            I am a Driver
          </Button>
          <Button onClick={() => handleRoleSelection("Passenger")} className="w-full">
            I am a Passenger
          </Button>
          {role && (
            <div className="text-center mt-4">
              <p className="text-lg font-semibold">You selected: {role}</p>
              <p>Proceeding to the next step...</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Certify;