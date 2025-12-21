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
                        <div style={{ flex: '1 1 300px', color: 'white' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                backgroundColor: 'rgba(212, 175, 55, 0.2)',
                                padding: '0.5rem 1rem',
                                borderRadius: '50px',
                                marginBottom: '1.5rem',
                                border: '1px solid rgba(212, 175, 55, 0.3)'
                            }}>
                                <Download size={16} color="var(--color-accent)" />
                                <span style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.9rem' }}>Free Resource</span>
                            </div>

                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                                Master the Art of <span style={{ color: 'var(--color-accent)' }}>Objection Handling</span>
                            </h2>

                            <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem', lineHeight: 1.6 }}>
                                Stop losing deals to "I need to think about it." Download our exclusive script book containing 50+ battle-tested responses to the most common customer objections.
                            </p>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                {['Word-for-word scripts', 'Price negotiation tactics', 'Psychology of closing'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                        <div style={{ backgroundColor: 'var(--color-accent)', borderRadius: '50%', padding: '2px' }}>
                                            <Check size={12} color="var(--color-primary)" strokeWidth={4} />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full-mobile" style={{ flex: '1 1 350px' }}>
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="responsive-padding-small" style={{
                                    backgroundColor: 'white',
                                    borderRadius: '16px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                                }}>
                                    <h3 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Get Instant Access</h3>

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#555' }}>First Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                borderRadius: '8px',
                                                border: '1px solid #ddd',
                                                fontSize: '1rem',
                                                backgroundColor: '#f9f9f9'
                                            }}
                                            placeholder="John"
                                        />
                                    </div>

                                    <div style={{ marginBottom: '2rem' }}>
                                        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#555' }}>Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                borderRadius: '8px',
                                                border: '1px solid #ddd',
                                                fontSize: '1rem',
                                                backgroundColor: '#f9f9f9'
                                            }}
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                                        Send Me The Guide <ArrowRight size={18} />
                                    </button>

                                    <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#888', textAlign: 'center' }}>
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
