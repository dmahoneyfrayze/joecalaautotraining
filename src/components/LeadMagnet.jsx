import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Mail, Download, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const LeadMagnet = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would integrate with your email marketing tool
        setSubmitted(true);
    };

    return (
        <section className="lead-magnet" style={{ padding: '0', position: 'relative' }}>
            <div style={{ content: '""', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'var(--color-primary)', zIndex: -1 }}></div>

            <div className="container" style={{ padding: '80px 2rem' }}>
                <FadeIn>
                    <div className="responsive-padding flex-responsive" style={{
                        backgroundColor: 'var(--color-glass-white)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: 'var(--shadow-premium)'
                    }}>
                        <div style={{ flex: '1 1 400px', color: 'white', paddingRight: '2rem' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                backgroundColor: 'rgba(212, 175, 55, 0.2)',
                                padding: '0.6rem 1.2rem',
                                borderRadius: '50px',
                                marginBottom: '2rem',
                                border: '1px solid rgba(212, 175, 55, 0.3)'
                            }}>
                                <Download size={18} color="var(--color-accent)" />
                                <span style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.5px' }}>Free Resource</span>
                            </div>

                            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.1, fontFamily: 'var(--font-serif)' }}>
                                Master the Art of <br /><span style={{ color: 'var(--color-accent)' }}>Objection Handling</span>
                            </h2>

                            <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2.5rem', lineHeight: 1.7, maxWidth: '90%' }}>
                                Stop losing deals to "I need to think about it." Download our exclusive script book containing 50+ battle-tested responses to the most common customer objections.
                            </p>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                                {['Word-for-word scripts', 'Price negotiation tactics', 'Psychology of closing'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ backgroundColor: 'var(--color-accent)', borderRadius: '50%', padding: '4px', display: 'flex' }}>
                                            <Check size={14} color="var(--color-primary)" strokeWidth={4} />
                                        </div>
                                        <span style={{ fontSize: '1.1rem' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full-mobile" style={{ flex: '1 1 350px' }}>
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="responsive-padding-small" style={{
                                    backgroundColor: 'white',
                                    borderRadius: '20px',
                                    padding: '2.5rem',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
                                }}>
                                    <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '1.8rem', fontFamily: 'var(--font-serif)' }}>Get Instant Access</h3>
                                    <p style={{ marginBottom: '2rem', color: '#666', fontSize: '0.95rem' }}>Enter your details below to unlock the guide.</p>

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#444', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>First Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '1rem 1.2rem',
                                                borderRadius: '8px',
                                                border: '2px solid #eee',
                                                fontSize: '1rem',
                                                backgroundColor: '#f8f9fa',
                                                transition: 'all 0.3s'
                                            }}
                                            onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.backgroundColor = 'white'; }}
                                            onBlur={(e) => { e.target.style.borderColor = '#eee'; e.target.style.backgroundColor = '#f8f9fa'; }}
                                            placeholder="John"
                                        />
                                    </div>

                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#444', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '1rem 1.2rem',
                                                borderRadius: '8px',
                                                border: '2px solid #eee',
                                                fontSize: '1rem',
                                                backgroundColor: '#f8f9fa',
                                                transition: 'all 0.3s'
                                            }}
                                            onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.backgroundColor = 'white'; }}
                                            onBlur={(e) => { e.target.style.borderColor = '#eee'; e.target.style.backgroundColor = '#f8f9fa'; }}
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.8rem', padding: '1.2rem' }}>
                                        Send Me The Guide <ArrowRight size={20} />
                                    </button>

                                    <p style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#999', textAlign: 'center' }}>
                                        We respect your inbox. Unsubscribe at any time.
                                    </p>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{
                                        backgroundColor: 'white',
                                        padding: '3rem',
                                        borderRadius: '16px',
                                        textAlign: 'center',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                                    }}
                                >
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        backgroundColor: '#e6f4ea',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 1.5rem'
                                    }}>
                                        <Check size={40} color="#1e7e34" />
                                    </div>
                                    <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>You're In!</h3>
                                    <p style={{ color: '#666', marginBottom: '2rem' }}>
                                        Check your email inbox for your free copy of the Objection Handling Guide.
                                    </p>
                                    <button onClick={() => setSubmitted(false)} style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
                                        Back to form
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default LeadMagnet;
