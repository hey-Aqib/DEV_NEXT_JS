'use client';
import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import Footer from './Footer';
import Header from './navbar/Header';

export default function SplashWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-10 flex items-center justify-center bg-black text-white transition-opacity duration-1000 ${
          loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <LoadingScreen/>
      </div>

      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header/>
        {children}
        <Footer/>
      </div>
    </>
  );
}
