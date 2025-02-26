
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NavBar } from "@/components/shared/NavBar";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const referralCode = searchParams.get('ref');

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [couponCode, setCouponCode] = useState("");

  const validateCouponCode = (code: string) => {
    // This is a mock validation - replace with actual coupon validation
    const validCoupons = ["WELCOME10", "SPECIAL20"];
    return validCoupons.includes(code);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (couponCode && !validateCouponCode(couponCode)) {
      toast({
        title: "Invalid coupon code",
        description: "Please enter a valid coupon code or leave it empty",
        variant: "destructive",
      });
      return;
    }

    if (username && email && password) {
      // Simulating successful registration
      toast({
        title: "Registration successful",
        description: "Welcome to your new account!",
      });
      
      // If there's a referral code, we would update the referrer's credits here
      if (referralCode) {
        // In a real app, this would be an API call to update the referrer's credits
        console.log(`Adding credit to user with referral code: ${referralCode}`);
      }
      
      navigate("/dashboard");
    } else {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="container mx-auto px-4 pt-24">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Get started with your profile</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Coupon Code (Optional)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
              </div>
              {referralCode && (
                <div>
                  <Input
                    type="text"
                    value={referralCode}
                    readOnly
                    className="bg-muted"
                  />
                </div>
              )}
              <Button type="submit" className="w-full">
                Create account
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Register;
