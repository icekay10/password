// src/pages/_app.js
import { Suspense } from 'react';
import { useRouter } from 'next/router';

// Shared layout components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Loading fallback UI
const LoadingFallback = () => (
  <div className="loading">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
    <style jsx>{`
      .loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 400px;
        padding: 2rem;
      }
      .loading-spinner {
        width: 40px;
        height: 40px;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #2563eb;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 1rem;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

// Main App Wrapper
export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Suspense fallback={<LoadingFallback />}>
          <Component {...pageProps} key={router.asPath} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}