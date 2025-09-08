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
    <div className="min-h-screen bg-background font-poppins">
      {/* Navigation */}
      <nav className="bg-ubuntu-dark text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Logo size="md" />
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={onLogin}
                className="text-white hover:text-ubuntu-gold"
              >
                Login
              </Button>
              <Button 
                onClick={onSignup}
                className="bg-ubuntu-gold hover:bg-ubuntu-gold/90 text-ubuntu-dark font-bold shadow-gold"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient text-white pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fadeInUp">
              <div className="max-w-lg">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Discover <span className="text-ubuntu-gold">Authentic</span> G20 Experiences
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  AI-powered tourism platform connecting travelers with local communities across all G20 nations.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button 
                    onClick={onSignup}
                    size="lg"
                    className="bg-ubuntu-gold hover:bg-ubuntu-gold/90 text-ubuntu-dark font-bold py-4 px-8 text-lg shadow-gold transition-bounce"
                  >
                    Start Exploring <IconArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-ubuntu-dark py-4 px-8 text-lg"
                  >
                    <IconPlayerPlay className="mr-2 h-5 w-5" /> Watch Demo
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">S</div>
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">J</div>
                    <div className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-r from-pink-400 to-red-500 flex items-center justify-center text-white font-bold text-sm">P</div>
                  </div>
                  <div className="text-sm opacity-80">
                    <p>Trusted by <span className="font-bold">10,000+</span> travelers</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <IconStar key={i} className="h-4 w-4 text-ubuntu-gold fill-current" />
                      ))}
                      <span className="ml-1">4.9/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center animate-fadeInUp">
              <div className="relative w-full max-w-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-ubuntu-blue/20 to-ubuntu-gold/20 rounded-2xl blur-3xl transform rotate-6"></div>
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-ubuntu-blue bg-blue-100 rounded-full mb-4">
              Why Choose Ubuntu Explorer
            </div>
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
              <Card key={index} className="hover-lift shadow-card border-0 bg-card-gradient">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore G20 Like Never Before?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join thousands of travelers discovering authentic experiences while making a positive impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={onSignup}
              size="lg"
              className="bg-ubuntu-gold hover:bg-ubuntu-gold/90 text-ubuntu-dark font-bold py-4 px-8 text-lg shadow-gold animate-pulse-gold"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-ubuntu-dark py-4 px-8 text-lg"
            >
              <IconMapPin className="mr-2 h-5 w-5" /> Download App
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ubuntu-dark text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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