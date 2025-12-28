import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const StickyMobileCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 9999,
                        width: '90%',
                        maxWidth: '400px',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '50px',
                        padding: '10px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                        border: '1px solid rgba(0,0,0,0.1)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '10px'
                    }}
                    className="mobile-only-cta" // Only show on mobile via CSS
                >
                    <Link to="/mentorship" style={{
                        flex: 1,
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        borderRadius: '40px',
                        padding: '12px',
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        textDecoration: 'none'
                    }}>
                        <Users size={16} /> Mentorship
                    </Link>
                    <Link to="/contact" style={{
                        flex: 1,
                        backgroundColor: 'var(--color-accent)',
                        color: 'var(--color-primary)',
                        borderRadius: '40px',
                        padding: '12px',
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        textDecoration: 'none'
                    }}>
                        <Phone size={16} /> Book Call
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyMobileCTA;
