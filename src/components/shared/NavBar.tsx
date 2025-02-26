
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost">Sign in</Button>
          </Link>
          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
