import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import FadeIn from './FadeIn';

const testimonials = [
    {
        name: 'David Mitchell',
        role: 'General Manager, West Coast Auto Group',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100',
        quote: "Joe's training didn't just increase our numbers; it transformed our entire culture. The focus on purpose-driven leadership is a game-changer for our sales floor.",
        rating: 5
    },
    {
        name: 'Sarah Lewis',
        role: 'Sales Consultant',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100',
        quote: "The mentorship program is the best investment I make every month. The scripts and the community support helped me double my monthly closings in just 90 days.",
        rating: 5
    },
    {
        name: 'Michael Ross',
        role: 'Fleet Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=100&h=100',
        quote: "In 20 years of automotive sales, I've never seen a trainer who balances tactical excellence with such strong personal values. Joe changes lives, not just sales stats.",
        rating: 5
    }
];

const SocialProof = () => {
    return (
        <section className="social-proof-section" style={{ padding: '100px 0', backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <FadeIn direction="up">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <span style={{
                            color: 'var(--color-accent)',
                            fontWeight: 700,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem',
                            display: 'block',
                            marginBottom: '1rem'
                        }}>
                            Trusted By Leaders
                        </span>
                        <h2 className="section-title">Success Stories</h2>
                    </div>
                </FadeIn>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {testimonials.map((t, i) => (
                        <FadeIn key={i} delay={i * 0.1} direction="up">
                            <motion.div
                                whileHover={{ y: -5 }}
                                style={{
                                    padding: '3rem',
                                    backgroundColor: 'white',
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    height: '100%',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <Quote
                                    size={60}
                                    color="var(--color-accent)"
                                    style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.1 }}
                                />

                                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
                                    {[...Array(t.rating)].map((_, j) => (
                                        <Star key={j} size={18} fill="currentColor" />
                                    ))}
                                </div>

                                <p style={{
                                    fontStyle: 'italic',
                                    marginBottom: '2rem',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.6,
                                    color: 'var(--color-text-dark)',
                                    opacity: 0.85
                                }}>
                                    "{t.quote}"
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
                                    {/* Placeholder avatar if image fails to load, but we use the url provided */}
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        backgroundColor: '#eee'
                                    }}>
                                        <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{t.name}</h4>
                                        <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>

                {/* Trusted By Logos Strip (Abstract/Text for now) */}
                <FadeIn delay={0.4} direction="up" style={{ marginTop: '6rem', opacity: 0.6 }}>
                    <p style={{ textAlign: 'center', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '2rem' }}>
                        Trusted by professionals from top dealerships
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '4rem',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        filter: 'grayscale(100%)',
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        color: '#aaa'
                    }}>
                        <span>AutoNation</span>
                        <span>Penske</span>
                        <span>Group 1</span>
                        <span>Lithia</span>
                        <span>Hendrick</span>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default SocialProof;
