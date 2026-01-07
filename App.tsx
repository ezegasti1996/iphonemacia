import React, { useState, useEffect } from 'react';
import LeadFormModal from './components/LeadFormModal';
import WarningModal from './components/WarningModal';
import VideoPage from './components/VideoPage';
import TecnophonesLanding from './components/TecnophonesLanding';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Simple routing check
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  if (pathname === '/video') {
    return <VideoPage />;
  }

  const closeModal = () => setIsModalOpen(false);
  const closeWarning = () => setShowWarning(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-purple selection:text-white">
      <TecnophonesLanding onOpenModal={() => setIsModalOpen(true)} />

      <LeadFormModal isOpen={isModalOpen} onClose={closeModal} />
      <WarningModal isOpen={showWarning} onClose={closeWarning} />
    </div>
  );
}

export default App;
