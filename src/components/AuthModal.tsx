import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Logo } from "@/components/ui/logo";
import { IconX, IconUser, IconBuilding, IconMapPin, IconWorld } from "@tabler/icons-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (userType: 'tourist' | 'business', data: any) => void;
  initialMode?: 'login' | 'signup';
}

export const AuthModal = ({ isOpen, onClose, onComplete, initialMode = 'signup' }: AuthModalProps) => {
  const [mode, setMode] = useState<'login' | 'signup' | 'role-select' | 'tourist-setup' | 'business-setup'>(initialMode);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    userType: '' as 'tourist' | 'business' | '',
    interests: [] as string[],
    country: '',
    businessName: '',
    businessCategory: '',
    businessLocation: ''
  });

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setMode('role-select');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setMode('role-select');
  };

  const handleRoleSelect = (userType: 'tourist' | 'business') => {
    setFormData(prev => ({ ...prev, userType }));
    if (userType === 'tourist') {
      setMode('tourist-setup');
    } else {
      setMode('business-setup');
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleTouristComplete = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete('tourist', formData);
  };

  const handleBusinessComplete = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete('business', formData);
  };

  const interests = [
    { id: 'food', label: 'Food & Drinks', icon: '🍽️' },
    { id: 'nature', label: 'Nature & Wildlife', icon: '🌿' },
    { id: 'culture', label: 'Culture & Heritage', icon: '🏛️' },
    { id: 'adventure', label: 'Adventure Sports', icon: '🏔️' },
    { id: 'art', label: 'Arts & Crafts', icon: '🎨' },
    { id: 'music', label: 'Music & Dance', icon: '🎵' }
  ];

  const countries = [
    { value: 'south-africa', label: '🇿🇦 South Africa' },
    { value: 'brazil', label: '🇧🇷 Brazil' },
    { value: 'india', label: '🇮🇳 India' },
    { value: 'china', label: '🇨🇳 China' },
    { value: 'usa', label: '🇺🇸 United States' },
    { value: 'germany', label: '🇩🇪 Germany' },
    { value: 'japan', label: '🇯🇵 Japan' },
    { value: 'uk', label: '🇬🇧 United Kingdom' }
  ];

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="relative max-w-md w-full max-h-[90vh] overflow-y-auto">
        <Card className="shadow-ubuntu border-0">
          <CardHeader className="relative">
            <button 
              onClick={onClose}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-smooth"
            >
              <IconX className="h-5 w-5" />
            </button>
            <div className="flex justify-center mb-4">
              <Logo size="sm" />
            </div>
            
            {mode === 'login' && (
              <CardTitle className="text-center text-ubuntu-blue">Welcome Back</CardTitle>
            )}
            {mode === 'signup' && (
              <CardTitle className="text-center text-ubuntu-blue">Create Account</CardTitle>
            )}
            {mode === 'role-select' && (
              <CardTitle className="text-center text-ubuntu-blue">Choose Your Role</CardTitle>
            )}
            {mode === 'tourist-setup' && (
              <CardTitle className="text-center text-ubuntu-blue">Tell Us Your Interests</CardTitle>
            )}
            {mode === 'business-setup' && (
              <CardTitle className="text-center text-ubuntu-blue">Business Information</CardTitle>
            )}
          </CardHeader>
          
          <CardContent>
            {/* Login Form */}
            {mode === 'login' && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password"
                    type="password" 
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    required 
                  />
                </div>
                <Button type="submit" className="w-full bg-ubuntu-gold hover:bg-ubuntu-gold/90 text-ubuntu-dark font-bold">
                  Continue
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('signup')}
                    className="text-ubuntu-blue hover:underline"
                  >
                    Sign up
                  </button>
                </p>
              </form>
            )}

            {/* Signup Form */}
            {mode === 'signup' && (
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password"
                    type="password" 
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    required 
                  />
                </div>
                <Button type="submit" className="w-full bg-ubuntu-gold hover:bg-ubuntu-gold/90 text-ubuntu-dark font-bold">
                  Create Account
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="text-ubuntu-blue hover:underline"
                  >
                    Login
                  </button>
                </p>
              </form>
            )}

            {/* Role Selection */}
            {mode === 'role-select' && (
              <div className="space-y-4">
                <p className="text-center text-muted-foreground mb-6">
                  How would you like to use Ubuntu Explorer?
                </p>
                <div className="grid gap-4">
                  <Card 
                    className="cursor-pointer border-2 hover:border-ubuntu-blue hover:shadow-card transition-smooth"
                    onClick={() => handleRoleSelect('tourist')}
                  >
                    <CardContent className="p-6 text-center">
                      <IconUser className="h-12 w-12 text-ubuntu-blue mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-2">I'm a Tourist</h3>
                      <p className="text-sm text-muted-foreground">
                        Discover authentic experiences and connect with local communities
                      </p>
                    </CardContent>
                  </Card>
                  <Card 
                    className="cursor-pointer border-2 hover:border-ubuntu-gold hover:shadow-gold transition-smooth"
                    onClick={() => handleRoleSelect('business')}
                  >
                    <CardContent className="p-6 text-center">
                      <IconBuilding className="h-12 w-12 text-ubuntu-gold mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-2">I'm a Business Owner</h3>
                      <p className="text-sm text-muted-foreground">
                        Showcase my business and connect with travelers
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Tourist Setup */}
            {mode === 'tourist-setup' && (
              <form onSubmit={handleTouristComplete} className="space-y-6">
                <div>
                  <Label className="text-base font-semibold mb-4 block">What interests you most?</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <div 
                        key={interest.id}
                        className={`border-2 rounded-lg p-3 cursor-pointer transition-smooth ${
                          formData.interests.includes(interest.id) 
                            ? 'border-ubuntu-blue bg-blue-50' 
                            : 'border-border hover:border-ubuntu-blue'
                        }`}
                        onClick={() => handleInterestToggle(interest.id)}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-1">{interest.icon}</div>
                          <div className="text-sm font-medium">{interest.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="country">Which country will you visit?</Label>
                  <Select value={formData.country} onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-ubuntu-gold hover:bg-ubuntu-gold/90 text-ubuntu-dark font-bold"
                  disabled={formData.interests.length === 0 || !formData.country}
                >
                  Complete Setup
                </Button>
              </form>
            )}

            {/* Business Setup */}
            {mode === 'business-setup' && (
              <form onSubmit={handleBusinessComplete} className="space-y-4">
                <div>
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input 
                    id="businessName"
                    placeholder="Enter your business name"
                    value={formData.businessName}
                    onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="businessCategory">Category</Label>
                  <Select 
                    value={formData.businessCategory} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, businessCategory: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select business category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restaurant">Restaurant & Food</SelectItem>
                      <SelectItem value="accommodation">Accommodation</SelectItem>
                      <SelectItem value="tour">Tour & Activities</SelectItem>
                      <SelectItem value="transport">Transportation</SelectItem>
                      <SelectItem value="retail">Retail & Shopping</SelectItem>
                      <SelectItem value="cultural">Cultural Experience</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="businessLocation">Location</Label>
                  <Input 
                    id="businessLocation"
                    placeholder="City, Country"
                    value={formData.businessLocation}
                    onChange={(e) => setFormData(prev => ({ ...prev, businessLocation: e.target.value }))}
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-ubuntu-gold hover:bg-ubuntu-gold/90 text-ubuntu-dark font-bold"
                  disabled={!formData.businessName || !formData.businessCategory || !formData.businessLocation}
                >
                  Complete Setup
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};