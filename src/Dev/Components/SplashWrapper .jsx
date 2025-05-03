'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; 
import LoadingScreen from './LoadingScreen';
import Footer from './Footer';
import Header from './navbar/Header';

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
      {loading && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black text-white transition-opacity duration-1000 opacity-100"
        >
          <LoadingScreen />
        </div>
      )}

      <div
        className={`transition-opacity duration-1000 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Header />
        {children}
        <Footer key={pathname}/> 
      </div>
    </>
  );
}
