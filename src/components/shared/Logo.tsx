
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-bold">L</span>
      </div>
      <span className="font-semibold text-xl">Linkable</span>
    </Link>
  );
};
