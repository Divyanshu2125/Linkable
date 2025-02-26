
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export const DashboardNav = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={() => {
            // Add logout functionality here
          }}>
            Sign out
          </Button>
        </div>
      </div>
    </nav>
  );
};
