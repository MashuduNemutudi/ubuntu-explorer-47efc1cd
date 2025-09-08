import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/ui/logo";
import { 
  IconBuilding, 
  IconUsers, 
  IconTrendingUp, 
  IconStar, 
  IconEye,
  IconHeart,
  IconMapPin,
  IconPhone,
  IconWorld,
  IconCamera,
  IconPlus,
  IconEdit,
  IconBell,
  IconUser,
  IconLogout
} from "@tabler/icons-react";

interface BusinessDashboardProps {
  userData: any;
  onLogout: () => void;
}

export const BusinessDashboard = ({ userData, onLogout }: BusinessDashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  const businessStats = {
    views: 1247,
    favorites: 89,
    bookings: 156,
    rating: 4.7,
    reviews: 23
  };

  const recentBookings = [
    {
      id: 1,
      customerName: "Sarah K.",
      experience: "Traditional Braai Experience",
      date: "2025-01-15",
      status: "confirmed",
      amount: "R250"
    },
    {
      id: 2,
      customerName: "James T.",
      experience: "Pottery Workshop",
      date: "2025-01-18",
      status: "pending",
      amount: "R180"
    },
    {
      id: 3,
      customerName: "Priya M.",
      experience: "Cultural Tour",
      date: "2025-01-20",
      status: "completed",
      amount: "R320"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
      <section className="bg-gradient-to-r from-ubuntu-gold/20 to-ubuntu-gold/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {userData.businessName || 'Your Business'}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {userData.businessCategory} • {userData.businessLocation}
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <IconStar className="h-5 w-5 text-ubuntu-gold fill-current mr-1" />
                  <span className="font-semibold">{businessStats.rating}</span>
                  <span className="text-muted-foreground ml-1">({businessStats.reviews} reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Verified Business
                </Badge>
              </div>
            </div>
            <Button 
              onClick={() => setIsEditing(true)}
              className="bg-ubuntu-gold hover:bg-ubuntu-gold/90 text-ubuntu-dark"
            >
              <IconEdit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <IconEye className="h-8 w-8 text-ubuntu-blue mx-auto mb-2" />
                <h3 className="text-2xl font-bold">{businessStats.views.toLocaleString()}</h3>
                <p className="text-sm text-muted-foreground">Profile Views</p>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <IconHeart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h3 className="text-2xl font-bold">{businessStats.favorites}</h3>
                <p className="text-sm text-muted-foreground">Favorites</p>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <IconUsers className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h3 className="text-2xl font-bold">{businessStats.bookings}</h3>
                <p className="text-sm text-muted-foreground">Total Bookings</p>
              </CardContent>
            </Card>
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <IconTrendingUp className="h-8 w-8 text-ubuntu-gold mx-auto mb-2" />
                <h3 className="text-2xl font-bold">+23%</h3>
                <p className="text-sm text-muted-foreground">This Month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: <IconBuilding className="h-4 w-4" /> },
              { id: 'bookings', label: 'Bookings', icon: <IconUsers className="h-4 w-4" /> },
              { id: 'profile', label: 'Profile', icon: <IconEdit className="h-4 w-4" /> },
              { id: 'analytics', label: 'Analytics', icon: <IconTrendingUp className="h-4 w-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-smooth ${
                  activeTab === tab.id
                    ? 'border-ubuntu-gold text-ubuntu-gold'
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
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold">{booking.customerName}</h4>
                            <Badge className={getStatusColor(booking.status)}>
                              {booking.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{booking.experience}</p>
                          <p className="text-xs text-muted-foreground">{booking.date}</p>
                        </div>
                        <div className="text-right ml-4">
                          <p className="font-bold text-ubuntu-gold">{booking.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Bookings
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-ubuntu-gold hover:bg-ubuntu-gold/90 text-ubuntu-dark">
                    <IconPlus className="h-4 w-4 mr-2" />
                    Add New Experience
                  </Button>
                  <Button variant="outline" className="w-full">
                    <IconCamera className="h-4 w-4 mr-2" />
                    Upload Photos
                  </Button>
                  <Button variant="outline" className="w-full">
                    <IconStar className="h-4 w-4 mr-2" />
                    Manage Reviews
                  </Button>
                  <Button variant="outline" className="w-full">
                    <IconWorld className="h-4 w-4 mr-2" />
                    Update Availability
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <IconMapPin className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm">{userData.businessLocation}</span>
                  </div>
                  <div className="flex items-center">
                    <IconPhone className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm">+27 11 123 4567</span>
                  </div>
                  <div className="flex items-center">
                    <IconWorld className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm">www.yourbusiness.co.za</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <Card>
            <CardHeader>
              <CardTitle>All Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-6 border rounded-lg hover:shadow-card transition-smooth">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-lg">{booking.customerName}</h4>
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-1">{booking.experience}</p>
                      <p className="text-sm text-muted-foreground">{booking.date}</p>
                    </div>
                    <div className="text-right ml-6">
                      <p className="font-bold text-xl text-ubuntu-gold mb-2">{booking.amount}</p>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">View Details</Button>
                        <Button size="sm" className="bg-ubuntu-gold hover:bg-ubuntu-gold/90 text-ubuntu-dark">
                          Contact
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input id="businessName" value={userData.businessName} readOnly />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" value={userData.businessCategory} readOnly />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" value={userData.businessLocation} readOnly />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Tell visitors about your business..."
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-ubuntu-gold hover:bg-ubuntu-gold/90 text-ubuntu-dark">
                  Update Information
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Photos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <IconCamera className="h-8 w-8 text-gray-400" />
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  <IconPlus className="h-4 w-4 mr-2" />
                  Add Photos
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span>Profile Views</span>
                    <span className="font-bold">{businessStats.views}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Booking Conversion</span>
                    <span className="font-bold">12.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Repeat Customers</span>
                    <span className="font-bold">34%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average Rating</span>
                    <span className="font-bold flex items-center">
                      {businessStats.rating}
                      <IconStar className="h-4 w-4 text-ubuntu-gold fill-current ml-1" />
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <IconTrendingUp className="h-16 w-16 mx-auto mb-4" />
                  <p>Detailed analytics coming soon!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};