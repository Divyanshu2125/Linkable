
import { NavBar } from "@/components/shared/NavBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/shared/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-16">
        <HeroSection />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
