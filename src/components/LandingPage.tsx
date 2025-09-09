import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { 
  IconWorld, 
  IconMapPin, 
  IconShield, 
  IconUsers, 
  IconStar,
  IconArrowRight,
  IconPlayerPlay
} from "@tabler/icons-react";
import heroImage from "@/assets/hero-image.jpg";

interface LandingPageProps {
  onSignup: () => void;
  onLogin: () => void;
}

export const LandingPage = ({ onSignup, onLogin }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-ubuntu-dark text-white shadow-lg sticky top-0 z-50">
        <div className="container">
          <div className="flex justify-between items-center" style={{ height: '4rem' }}>
            <Logo size="md" />
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onLogin} className="text-white">
                Login
              </Button>
              <Button onClick={onSignup} variant="gold">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fadeInUp">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Discover <span className="text-ubuntu-gold">Authentic</span> G20 Experiences
              </h1>
              <p className="text-xl mb-8 opacity-90">
                AI-powered tourism platform connecting travelers with local communities across all G20 nations.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button onClick={onSignup} size="lg" variant="hero">
                  Start Exploring <IconArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-ubuntu-dark">
                  <IconPlayerPlay className="mr-2 h-5 w-5" /> Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center animate-fadeInUp">
              <Card className="relative bg-white/10 backdrop-blur-lg border-white/20 shadow-ubuntu p-6 transform rotate-1 animate-float overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                  <img src={heroImage} alt="Ubuntu Explorer" className="w-full h-full object-cover rounded-xl" />
                </div>
                <CardContent className="p-0 relative z-10">
                  <h3 className="text-xl font-semibold mb-4 text-center text-white">Select a G20 Country</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { flag: "🇿🇦", name: "South Africa" },
                      { flag: "🇧🇷", name: "Brazil" },
                      { flag: "🇮🇳", name: "India" },
                      { flag: "🇨🇳", name: "China" }
                    ].map((country) => (
                      <div key={country.name} className="bg-white/20 hover:bg-white/30 rounded-lg p-4 text-center cursor-pointer transition-smooth flex flex-col items-center text-white backdrop-blur-sm">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                          <span className="text-2xl">{country.flag}</span>
                        </div>
                        <div className="text-sm font-medium">{country.name}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">AI-Powered Tourism Revolution</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with authentic local experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <IconWorld className="h-8 w-8" />,
                title: "Smart Personalization",
                description: "Our AI learns your preferences to recommend truly unique experiences tailored just for you across any G20 destination."
              },
              {
                icon: <IconUsers className="h-8 w-8" />,
                title: "Community Impact", 
                description: "85% of your spending goes directly to local providers, creating real economic benefits in the communities you visit."
              },
              {
                icon: <IconShield className="h-8 w-8" />,
                title: "Travel Safety",
                description: "Real-time safety alerts, emergency contacts, and verified local guides ensure you explore with confidence."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover-lift shadow-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore G20 Like Never Before?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of travelers discovering authentic experiences while making a positive impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button onClick={onSignup} size="lg" variant="hero">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-ubuntu-dark">
              <IconMapPin className="mr-2 h-5 w-5" /> Download App
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ubuntu-dark text-white pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <Logo size="md" />
              <p className="text-gray-400 text-sm mb-4 mt-4">
                AI-powered tourism platform connecting travelers with authentic experiences across G20 countries.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-smooth">Countries</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-smooth">Experiences</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-smooth">Local Guides</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-smooth">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-smooth">Safety</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-smooth">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-ubuntu-gold transition-smooth">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-ubuntu-gold transition-smooth">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Ubuntu Explorer. Built with the philosophy of Ubuntu - "I am because we are"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};