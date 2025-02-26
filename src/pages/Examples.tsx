
import { Card, CardContent } from "@/components/ui/card";
import { NavBar } from "@/components/shared/NavBar";
import { Footer } from "@/components/shared/Footer";

const examples = [
  {
    name: "John Doe",
    username: "johndoe",
    description: "Digital Creator & Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Jane Smith",
    username: "janesmith",
    description: "Content Creator & Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Alex Johnson",
    username: "alexj",
    description: "Photographer & Traveler",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop"
  }
];

const Examples = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl font-bold text-center mb-12">Example Profiles</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={example.image}
                alt={example.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg">{example.name}</h3>
                <p className="text-sm text-muted-foreground">@{example.username}</p>
                <p className="mt-2 text-sm">{example.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Examples;
