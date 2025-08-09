import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-foreground">
              Your Project
            </div>
            <Button variant="outline" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Welcome to Your
              <span className="block text-primary">Blank Canvas</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A beautiful foundation for your next project. Clean, modern, and ready for your ideas.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 border-0 shadow-subtle hover:shadow-medium transition-all duration-300 bg-background/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mb-4 mx-auto flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Modern Design
              </h3>
              <p className="text-muted-foreground text-sm">
                Built with Tailwind CSS and a thoughtful design system
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-subtle hover:shadow-medium transition-all duration-300 bg-background/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg mb-4 mx-auto flex items-center justify-center">
                <div className="w-6 h-6 bg-accent-foreground rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Developer Ready
              </h3>
              <p className="text-muted-foreground text-sm">
                TypeScript, React, and modern tooling configured
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-subtle hover:shadow-medium transition-all duration-300 bg-background/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-primary-lighter rounded-lg mb-4 mx-auto flex items-center justify-center">
                <div className="w-6 h-6 bg-primary rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Fully Responsive
              </h3>
              <p className="text-muted-foreground text-sm">
                Looks great on desktop, tablet, and mobile devices
              </p>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="bg-background/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Ready to build something amazing?
            </h2>
            <p className="text-muted-foreground mb-6">
              This clean foundation gives you everything you need to start creating.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="shadow-medium hover:shadow-large transition-all duration-300">
                Start Building
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-sm text-muted-foreground">
            Built with ❤️ using modern web technologies
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;