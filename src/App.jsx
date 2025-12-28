import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';
import FadeIn from './components/FadeIn';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const WhatWeDo = lazy(() => import('./pages/WhatWeDo'));
const Mentorship = lazy(() => import('./pages/Mentorship'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Academy = lazy(() => import('./pages/Academy'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const NotFound = lazy(() => import('./pages/NotFound'));


const MyrtleBeach = lazy(() => import('./pages/locations/MyrtleBeach'));
const SalesTraining = lazy(() => import('./pages/pillars/SalesTraining'));
const Corporate = lazy(() => import('./pages/Corporate'));
const Terms = lazy(() => import('./pages/Terms'));

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <Suspense fallback={<Loading />}>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* Location & Pillar Pages */}

            <Route path="/locations/myrtle-beach" element={<MyrtleBeach />} />
            <Route path="/training/automotive-sales" element={<SalesTraining />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
