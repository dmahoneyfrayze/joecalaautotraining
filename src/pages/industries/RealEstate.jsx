import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Key, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import FadeIn from '../../components/FadeIn';

const RealEstate = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Real Estate Sales Training | Close More Homes | Joe Cala"
                description="Stop just showing houses. Start closing homes. Advanced negotiation and emotional selling mastery for top-producing Realtors and Brokers."
                keywords="real estate sales training, realtor coaching, real estate negotiation training, joe cala real estate"
            />

            {/* Hero Section */}
            <section className="hero animated-gradient" style={{ padding: '160px 0 100px', color: 'white', textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="container">
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}>
                        Industry Solutions: Real Estate
                    </span>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}
                    >
                        Don't Just Show Houses. <br />
                        <span className="text-gradient-gold">Close Homes.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6 }}
                    >
                        The top 1% of agents don't sell square footage. They sell a vision of the future. Learn the emotional influence strategies that separate Top Producers from tour guides.
                    </motion.p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link to="/contact" className="btn-primary">Book a Brokerage Training</Link>
                    </motion.div>
                </div>
            </section>

            {/* The Problem Section */}
            <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Stop Being a "Door Opener"</h2>
                            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2rem', opacity: 0.8 }}>
                                Most real estate training teaches you how to fill out contracts or use the MLS. None of that matters if you can't control the conversation.
                            </p>
                            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2rem', opacity: 0.8 }}>
                                In a shifting market, buyers are hesitant and sellers are unrealistic. Your job isn't to take orders; it's to lead them to a decision.
                            </p>
                            <div style={{ padding: '2rem', backgroundColor: '#fff5f5', borderRadius: '12px', borderLeft: '4px solid #e74c3c' }}>
                                <h4 style={{ color: '#c0392b', marginBottom: '0.5rem', fontWeight: 700 }}>The Reality Check:</h4>
                                <p style={{ margin: 0, opacity: 0.9 }}>87% of all real estate agents fail within 5 years. Why? Not because they lack market knowledge, but because they lack <strong>sales skill</strong>.</p>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                            <div className="card-premium" style={{ padding: '2rem', textAlign: 'center' }}>
                                <Home size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Listing Mastery</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Win the listing at your price, without cutting commissions.</p>
                            </div>
                            <div className="card-premium" style={{ padding: '2rem', textAlign: 'center' }}>
                                <Key size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Buyer Urgency</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Turn "we're just looking" into "where do we sign?".</p>
                            </div>
                            <div className="card-premium" style={{ padding: '2rem', textAlign: 'center' }}>
                                <TrendingUp size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Negotiation</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Protect your client's equity and your own commission check.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#f9fafb' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="section-title">The "Joe Cala" Methodology for Realtors</h2>
                        <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto' }}>We adapted our automotive "road-to-the-sale" into a powerful framework for property transactions.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: '1. The Needs Analysis', desc: "Stop asking 'how many bedrooms?' and start uncovering the 'why'. The pain of their current home is the fuel for the new one." },
                            { title: '2. The Tour Presentation', desc: "Don't just point at feature. Present benefits. 'This open layout means you can cook while watching the kids' vs 'This is an open concept'." },
                            { title: '3. The Trial Close', desc: "Learn to test the water in every room. 'Can you see your furniture here?' eliminates surprises at the offer table." }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.2}>
                                <div style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '16px', height: '100%', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                                    <div style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1rem' }}>{item.title}</div>
                                    <p style={{ opacity: 0.8, lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '120px 0', backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to Dominate Your Market?</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
                        Join the agents who are doubling their GCI with the Cala System.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                        <Link to="/mentorship" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Join Mentorship</Link>
                        <Link to="/contact" className="btn-secondary" style={{ color: 'white', borderColor: 'white' }}>Brokerage Training</Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default RealEstate;
