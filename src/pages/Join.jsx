import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Google } from "lucide-react";

const Join = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleMobileSignIn = () => {
    // Handle mobile sign-in logic here
    console.log("Mobile Number:", mobileNumber);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log("Google Sign-In");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Join CABs 24</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <Input
              id="mobileNumber"
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter your mobile number"
              className="w-full"
            />
            <Button onClick={handleMobileSignIn} className="w-full mt-2">
              Sign In with Mobile
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-gray-500">or</span>
          </div>
          <Button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center space-x-2">
            <Google className="h-5 w-5" />
            <span>Sign In with Google</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Join;