// src/pages/_app.js

import { lazy, Suspense } from 'react';


// Shared layout components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// === Lazy Load All Pages ===
// These must correspond to actual files in `pages/`
const Homepage = lazy(() => import('./index'));
const PasswordGenerator = lazy(() => import('./free-password-generator'));
const About = lazy(() => import('./about'));
const Contact = lazy(() => import('./contact'));
const PrivacyPolicy = lazy(() => import('./privacy-policy'));

// Loading fallback UI
const LoadingFallback = () => <div className="loading">Loading...</div>;

// Main App Wrapper
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Suspense fallback={<LoadingFallback />}>
          <Component {...pageProps} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
