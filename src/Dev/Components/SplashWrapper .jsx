'use client';
import { useState, useEffect, lazy, Suspense } from 'react';
import { usePathname } from 'next/navigation'; 
import LoadingScreen from './LoadingScreen';
import Loader from './ui/Loader';

const Header = lazy(() => import('./navbar/Header'));
const Footer = lazy(() => import('./Footer'));


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
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black text-white transition-opacity duration-1000 opacity-100">
          <LoadingScreen />
        </div>
      )}

      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Suspense fallback={<Loader />}>
          <Header />
          {!loading && children}
          <Footer key={pathname}/> 
        </Suspense>
      </div>
    </>
  );
}
