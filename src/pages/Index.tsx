import { useState } from "react";
import { LandingPage } from "@/components/LandingPage";
import { AuthModal } from "@/components/AuthModal";
import { TouristDashboard } from "@/components/TouristDashboard";
import { BusinessDashboard } from "@/components/BusinessDashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'tourist' | 'business'>('landing');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('signup');
  const [userData, setUserData] = useState<any>(null);

  const handleSignup = () => {
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  const handleLogin = () => {
    setAuthMode('login');
    setShowAuthModal(true);
  };

  const handleAuthComplete = (userType: 'tourist' | 'business', data: any) => {
    setUserData(data);
    setCurrentView(userType);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setCurrentView('landing');
    setUserData(null);
  };

  if (currentView === 'tourist') {
    return <TouristDashboard userData={userData} onLogout={handleLogout} />;
  }

  if (currentView === 'business') {
    return <BusinessDashboard userData={userData} onLogout={handleLogout} />;
  }

  return (
    <>
      <LandingPage onSignup={handleSignup} onLogin={handleLogin} />
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onComplete={handleAuthComplete}
        initialMode={authMode}
      />
    </>
  );
};

export default Index;