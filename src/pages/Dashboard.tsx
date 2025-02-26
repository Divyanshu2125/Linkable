
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardNav } from "@/components/shared/DashboardNav";
import { useToast } from "@/hooks/use-toast";
import { Copy, Users } from "lucide-react";

const Dashboard = () => {
  const { toast } = useToast();
  const referralCode = "USER123"; // This should come from your user's data
  const referralCount = 0; // This should come from your user's data
  const credits = 0; // This should come from your user's data

  const copyReferralCode = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/register?ref=${referralCode}`
    );
    toast({
      title: "Referral link copied!",
      description: "Share it with your friends to earn credits.",
    });
  };

  return (
    <div className="min-h-screen">
      <DashboardNav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Referral Code</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                <code className="text-lg">{referralCode}</code>
                <Button variant="ghost" size="icon" onClick={copyReferralCode}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Referral Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>Total Referrals</span>
                  </div>
                  <span className="font-semibold">{referralCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Credits Earned</span>
                  <span className="font-semibold">{credits}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
