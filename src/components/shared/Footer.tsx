
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Logo />
          <div className="mt-4 md:mt-0 text-sm text-muted-foreground">
            © 2024 Linkable. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
