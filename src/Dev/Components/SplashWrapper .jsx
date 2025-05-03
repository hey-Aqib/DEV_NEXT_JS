'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; 
import LoadingScreen from './LoadingScreen';
import Header from './navbar/Header';
import Footer from './Footer';

export default function SplashWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Loading Screen with transition only for fading out */}
      {loading && (
        <div className={`fixed inset-0 z-10 flex items-center justify-center bg-black text-white transition-opacity duration-1000 ${loading ? 'opacity-100' : 'opacity-0'}`}>
          <LoadingScreen />
        </div>
      )}

      {/* Main content with transition opacity based on loading state */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          <Header />
          {!loading && children}
          <Footer key={pathname} />
      </div>
    </>
  );
}
