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
        <section className="social-proof-section" style={{ padding: '120px 0', backgroundColor: '#fcfcfc' }}>
            <div className="container">
                <FadeIn direction="up">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span style={{
                            color: 'var(--color-accent)',
                            fontWeight: 700,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem',
                            display: 'block',
                            marginBottom: '1rem'
                        }}>
                            Trusted By Industry Leaders
                        </span>
                        <h2 className="section-title" style={{ color: 'var(--color-primary)' }}>Results That Speak Louder.</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.8 }}>
                            From local family-owned dealerships to Fortune 500 enterprise sales teams, our methodology delivers consistent, scalable growth.
                        </p>
                    </div>
                </FadeIn>

                {/* Logos Grid */}
                <FadeIn delay={0.2} style={{ marginBottom: '6rem' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '4rem',
                        flexWrap: 'wrap',
                        opacity: 0.5
                    }}>
                        {/* Text-based Logos for Premium Feel */}
                        {['AutoNation', 'Penske', 'Berkshire Hathaway', 'Group 1', 'Sonic Automotive', 'Lithia'].map((brand, i) => (
                            <h3 key={i} style={{
                                fontSize: '1.8rem',
                                fontFamily: 'var(--font-serif)',
                                color: '#000',
                                margin: 0,
                                filter: 'grayscale(100%)',
                                cursor: 'default'
                            }}>
                                {brand}
                            </h3>
                        ))}
                    </div>
                </FadeIn>


                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {testimonials.map((t, i) => (
                        <FadeIn key={i} delay={i * 0.1} direction="up">
                            <motion.div
                                className="card-premium"
                                style={{
                                    padding: '3.5rem',
                                    borderRadius: '16px',
                                    height: '100%',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Quote
                                    size={50}
                                    color="var(--color-accent)"
                                    style={{ position: 'absolute', top: '30px', left: '30px', opacity: 0.2 }}
                                />

                                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '2rem', color: 'var(--color-accent)', justifyContent: 'center' }}>
                                    {[...Array(t.rating)].map((_, j) => (
                                        <Star key={j} size={20} fill="currentColor" />
                                    ))}
                                </div>

                                <p style={{
                                    fontStyle: 'italic',
                                    marginBottom: '2rem',
                                    fontSize: '1.25rem',
                                    lineHeight: 1.6,
                                    color: 'var(--color-text-dark)',
                                    opacity: 0.9,
                                    textAlign: 'center'
                                }}>
                                    "{t.quote}"
                                </p>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '1.5rem', width: '100%' }}>

                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        backgroundColor: '#eee',
                                        border: '2px solid var(--color-accent)'
                                    }}>
                                        <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ textAlign: 'left' }}>
                                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)' }}>{t.name}</h4>
                                        <p style={{ fontSize: '0.85rem', opacity: 0.6, color: 'var(--color-text-dark)' }}>{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
