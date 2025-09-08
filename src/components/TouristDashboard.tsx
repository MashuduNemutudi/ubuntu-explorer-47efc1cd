import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/ui/logo";
import { 
  IconMapPin, 
  IconSearch, 
  IconHeart, 
  IconStar, 
  IconNavigation,
  IconShield,
  IconTrophy,
  IconCamera,
  IconPhone,
  IconMenu,
  IconBell,
  IconUser,
  IconLogout
} from "@tabler/icons-react";
import braaiImage from "@/assets/braai-experience.jpg";
import tableMountainImage from "@/assets/table-mountain.jpg";
import potteryImage from "@/assets/pottery-workshop.jpg";

interface TouristDashboardProps {
  userData: any;
  onLogout: () => void;
}

export const TouristDashboard = ({ userData, onLogout }: TouristDashboardProps) => {
  const [activeTab, setActiveTab] = useState('explore');
  const [showEmergency, setShowEmergency] = useState(false);

  const emergencyContacts = [
    { name: "Local Police", number: "10111", icon: <IconShield className="h-5 w-5" /> },
    { name: "Medical Emergency", number: "10177", icon: <IconPhone className="h-5 w-5" /> },
    { name: "Tourist Helpline", number: "083 123 1234", icon: <IconPhone className="h-5 w-5" /> }
  ];

  const recommendations = [
    {
      id: 1,
      title: "Traditional Braai Experience",
      category: "Food & Culture",
      location: "Soweto, Johannesburg",
      rating: 4.8,
      price: "R250",
      image: braaiImage,
      description: "Authentic South African braai with local families in Soweto township.",
      host: "Nomsa's Kitchen",
      distance: "2.3 km"
    },
    {
      id: 2,
      title: "Table Mountain Sunset Hike",
      category: "Nature & Adventure",
      location: "Cape Town",
      rating: 4.9,
      price: "R150",
      image: tableMountainImage,
      description: "Guided sunset hike with spectacular views of Cape Town.",
      host: "Mountain Adventures",
      distance: "5.1 km"
    },
    {
      id: 3,
      title: "Pottery Making Workshop",
      category: "Arts & Crafts",
      location: "Hermanus",
      rating: 4.7,
      price: "R180",
      image: potteryImage,
      description: "Learn traditional pottery techniques from local artisans.",
      host: "Clay & Culture Studio",
      distance: "8.2 km"
    }
  ];

  const foodCrawlProgress = {
    completed: 3,
    total: 12,
    nextDish: "Biltong",
    location: "Local Butchery, Rosebank"
  };

  const EmergencyButton = () => (
    <Button 
      onClick={() => setShowEmergency(!showEmergency)}
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-red-500 hover:bg-red-600 shadow-lg emergency-pulse z-50"
      size="icon"
    >
      <IconShield className="h-8 w-8 text-white" />
    </Button>
  );

  const EmergencyModal = () => {
    if (!showEmergency) return null;
    
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center bg-red-50">
            <CardTitle className="text-red-600 flex items-center justify-center">
              <IconShield className="h-6 w-6 mr-2" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <a
                  key={index}
                  href={`tel:${contact.number}`}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-smooth"
                >
                  <div className="flex items-center">
                    <div className="text-red-500 mr-3">{contact.icon}</div>
                    <div>
                      <div className="font-semibold">{contact.name}</div>
                      <div className="text-sm text-muted-foreground">{contact.number}</div>
                    </div>
                  </div>
                  <Button size="sm" className="bg-red-500 hover:bg-red-600">
                    Call
                  </Button>
                </a>
              ))}
            </div>
            <Button 
              onClick={() => setShowEmergency(false)}
              variant="outline" 
              className="w-full mt-4"
            >
              Close
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-ubuntu-dark text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="sm" />
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-ubuntu-gold">
                <IconBell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-ubuntu-gold">
                <IconUser className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onLogout} className="text-white hover:text-ubuntu-gold">
                <IconLogout className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="hero-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {userData.name}! 🇿🇦
            </h1>
            <p className="text-lg opacity-90 mb-6">
              Ready to discover more of South Africa?
            </p>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <IconSearch className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Search experiences, food, places..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Crawl Progress */}
      <section className="py-8 bg-ubuntu-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-ubuntu-gold/20 to-ubuntu-gold/10 border-ubuntu-gold/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <IconTrophy className="h-8 w-8 text-ubuntu-gold mr-3" />
                  <div>
                    <h3 className="font-bold text-lg">Taste SA Food Crawl</h3>
                    <p className="text-sm text-muted-foreground">
                      {foodCrawlProgress.completed} of {foodCrawlProgress.total} dishes discovered
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-2">
                    Next: {foodCrawlProgress.nextDish}
                  </Badge>
                  <p className="text-xs text-muted-foreground">{foodCrawlProgress.location}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-ubuntu-gold h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(foodCrawlProgress.completed / foodCrawlProgress.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'explore', label: 'Explore', icon: <IconMapPin className="h-4 w-4" /> },
              { id: 'map', label: 'Map', icon: <IconNavigation className="h-4 w-4" /> },
              { id: 'saved', label: 'Saved', icon: <IconHeart className="h-4 w-4" /> },
              { id: 'photos', label: 'My Journey', icon: <IconCamera className="h-4 w-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-smooth ${
                  activeTab === tab.id
                    ? 'border-ubuntu-blue text-ubuntu-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'explore' && (
          <div>
            {/* Interest Filters */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
              <div className="flex flex-wrap gap-2">
                {userData.interests?.map((interest: string) => (
                  <Badge key={interest} variant="secondary" className="bg-ubuntu-blue/10 text-ubuntu-blue">
                    {interest.charAt(0).toUpperCase() + interest.slice(1)}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Recommendations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((item) => (
                <Card key={item.id} className="hover-lift cursor-pointer shadow-card">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      >
                        <IconHeart className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        <div className="flex items-center">
                          <IconStar className="h-4 w-4 text-ubuntu-gold fill-current mr-1" />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <IconMapPin className="h-4 w-4 mr-1" />
                          {item.distance}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-ubuntu-blue">{item.price}</span>
                          <Button size="sm" className="bg-ubuntu-gold hover:bg-ubuntu-gold/90 text-ubuntu-dark">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'map' && (
          <Card className="h-96 flex items-center justify-center">
            <CardContent>
              <div className="text-center">
                <IconMapPin className="h-16 w-16 text-ubuntu-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">
                  Map view with local businesses, attractions, and safety points coming soon!
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'saved' && (
          <Card className="h-96 flex items-center justify-center">
            <CardContent>
              <div className="text-center">
                <IconHeart className="h-16 w-16 text-ubuntu-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Saved Experiences</h3>
                <p className="text-muted-foreground">
                  Your saved experiences will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'photos' && (
          <Card className="h-96 flex items-center justify-center">
            <CardContent>
              <div className="text-center">
                <IconCamera className="h-16 w-16 text-ubuntu-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">My Journey</h3>
                <p className="text-muted-foreground">
                  Track your adventures and share your story
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Emergency Button */}
      <EmergencyButton />
      <EmergencyModal />
    </div>
  );
};