import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Watch, Monitor, Diamond, TrendingUp, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import FadeIn from '../../components/FadeIn';

const HighTicket = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="High-Ticket Retail & Tech Sales Training | Joe Cala"
                description="Specialized sales training for Luxury Retail, Furniture, Jewelry, and Tech. Move from transaction-based clerking to relationship-based closing."
                keywords="luxury retail sales training, high ticket sales coaching, furniture sales training, jewelry sales training, tech sales coaching"
                image="/images/success-metrics.webp"
            />

            {/* Hero Section */}
            <section className="hero animated-gradient" style={{ padding: '160px 0 100px', color: 'white', textAlign: 'center', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="container">
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}>
                        Industry Solutions: High-Ticket
                    </span>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}
                    >
                        Stop Clerking. <br />
                        <span className="text-gradient-gold">Start Consulting.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6 }}
                    >
                        Whether it's a $10,000 sofa, a $50,000 diamond, or Enterprise SaaS, the psychology is the same. Transactional salespeople starve; Consultative closers feast.
                    </motion.p>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link to="/contact" className="btn-primary">Book a Retail Workshop</Link>
                    </motion.div>
                </div>
            </section>

            {/* The Problem Section */}
            <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>The "Digital Clerk" Epidemic</h2>
                            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2rem', opacity: 0.8 }}>
                                In luxury retail and tech, product knowledge is often mistaken for sales skill. Your team knows every spec, every fabric, and every feature.
                            </p>
                            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2rem', opacity: 0.8 }}>
                                But when the customer says "I need to think about it," they fold. Why? Because they haven't built <strong>emotional value</strong> that exceeds the price tag.
                            </p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                            <div className="card-premium" style={{ padding: '2rem', textAlign: 'center' }}>
                                <ShoppingBag size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Furniture</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Selling the "Lifestyle", not the wood.</p>
                            </div>
                            <div className="card-premium" style={{ padding: '2rem', textAlign: 'center' }}>
                                <Diamond size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Jewelry</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Selling the "Moment", not the carat.</p>
                            </div>
                            <div className="card-premium" style={{ padding: '2rem', textAlign: 'center' }}>
                                <Monitor size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Tech / SaaS</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Selling the "Solution", not the code.</p>
                            </div>
                            <div className="card-premium" style={{ padding: '2rem', textAlign: 'center' }}>
                                <TrendingUp size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Solar / Home</h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Selling the "Savings", not the panels.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#f9fafb' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="section-title">Universal High-Ticket Principles</h2>
                        <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto' }}>If it costs more than $1,000, it requires a professional sales process.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Value Stacking', desc: "Price is only an issue in the absence of value. We teach how to 'stack' intangible benefits until the price feels small." },
                            { title: 'The Take-Away Close', desc: "Luxury requires exclusivity. Learn how to pull the deal away slightly to increase desire. 'This might not be for you...' is a powerful tool." },
                            { title: 'Objection Isolation', desc: "Is it price? Or is it value? We teach the 'If I could, would you?' framework tailored for high-end retail." }
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
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Elevate Your Average Ticket</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
                        Stop letting your customers walk out the door to check Amazon. Give them a reason to buy from YOU.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                        <Link to="/mentorship" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Sales Team Training</Link>
                        <Link to="/contact" className="btn-secondary" style={{ color: 'white', borderColor: 'white' }}>Consulting Inquiry</Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default HighTicket;
