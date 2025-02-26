
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2, Palette, Share2 } from "lucide-react";

const features = [
  {
    title: "Unified Links",
    description: "Combine all your important links in one beautiful page.",
    icon: Link2,
  },
  {
    title: "Custom Design",
    description: "Personalize your page with custom themes and styles.",
    icon: Palette,
  },
  {
    title: "Easy Sharing",
    description: "Share your page with a single link across all platforms.",
    icon: Share2,
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Everything you need</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Create your perfect landing page in minutes
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card animate-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
