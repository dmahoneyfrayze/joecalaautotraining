import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Academy', path: '/academy' },
    { name: 'Mentorship', path: '/mentorship' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: var(--transition-smooth);
        }
        .header.scrolled {
          padding: 1rem 0;
          background: var(--color-glass-dark);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--color-text-light);
        }
        .logo span {
          color: var(--color-accent);
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
        }
        .nav-link {
          color: var(--color-text-light);
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.9rem;
          opacity: 0.8;
        }
        .nav-link:hover, .nav-link.active {
          opacity: 1;
          color: var(--color-accent);
        }
        .mobile-menu-btn {
          display: none;
          color: white;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
        
        /* Mobile Overlay */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--color-primary);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          z-index: 1001;
          transform: translateY(-100%);
          transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
        }
        .mobile-overlay.open {
          transform: translateY(0);
        }
        .mobile-link {
          font-size: 2rem;
          font-family: var(--font-serif);
          color: white;
        }
      `}</style>

      <div className="container nav-container">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/src/assets/images/logo.png" alt="Joe Cala Logo" style={{ height: '50px', width: 'auto' }} />
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      <div className={`mobile-overlay ${isOpen ? 'open' : ''}`}>
        <button
          style={{ position: 'absolute', top: '2rem', right: '2rem', color: 'white' }}
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="mobile-link"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
