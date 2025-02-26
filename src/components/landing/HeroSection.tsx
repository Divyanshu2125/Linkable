
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="container px-4 py-20 text-center">
        <div className="inline-block animate-fade-down">
          <span className="px-3 py-1 text-sm font-medium bg-secondary rounded-full">
            Launch Offer: Get Started Free
          </span>
        </div>
        <h1 className="mt-8 text-4xl md:text-6xl font-bold tracking-tight animate-fade-up">
          One Link to Share
          <br />
          <span className="text-primary">Everything You Create</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up">
          Create a beautiful landing page to showcase your links, social profiles, and content.
          Share your digital presence elegantly.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <Link to="/register">
            <Button size="lg" className="w-full sm:w-auto">
              Create Your Page
            </Button>
          </Link>
          <Link to="/examples">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Examples
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
