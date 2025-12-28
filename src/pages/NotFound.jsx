import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Search, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '100px 2rem',
                backgroundColor: '#f9f9f9'
            }}
        >
            <SEO
                title="Page Not Found | Joe Cala"
                description="The page you are looking for does not exist."
            />
            <div className="container" style={{ maxWidth: '600px' }}>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1, marginBottom: '1rem' }}>404</h1>
                    <p style={{ fontSize: '1.5rem', marginBottom: '3rem', opacity: 0.7 }}>Oops! It looks like you've taken a wrong turn.</p>
                </motion.div>

                <div style={{ display: 'grid', gap: '1rem', justifyContent: 'center' }}>
                    <Link to="/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
                        <Home size={20} /> Back to Home
                    </Link>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
                        <Link to="/academy" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-dark)', fontWeight: 600 }}>
                            <BookOpen size={18} /> Training Academy
                        </Link>
                        <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-dark)', fontWeight: 600 }}>
                            <Search size={18} /> Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default NotFound;
