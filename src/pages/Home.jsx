import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Briefcase, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SocialProof from '../components/SocialProof';
import LeadMagnet from '../components/LeadMagnet';
import FadeIn from '../components/FadeIn';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="home"
        >
            <SEO
                title="Auto Sales Training Canada & US | Dealership Consulting"
                description="Elevate your dealership's success with Joe Cala. Elite automotive sales training and leadership coaching across North America. Formerly of Auto Dealer University."
                keywords="auto sales training Canada, US dealership consulting, car sales leadership, Joe Cala training, high ticket sales training"
            />
            {/* Hero Section */}
            <section className="hero" style={{ height: '95vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-primary)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                {/* Background Decorative Elements */}
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)' }}></div>

                <div className="container" style={{ zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                    <div style={{ flex: '1 1 500px' }}>
                        <motion.span
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}
                        >
                            Excellence Through Purpose
                        </motion.span>
                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '2rem', lineHeight: 1.1 }}
                        >
                            Lead With Purpose. <br />
                            <span style={{ color: 'var(--color-accent)' }}>Live With Clarity.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', opacity: 0.9, lineHeight: 1.6 }}
                        >
                            Transform your dealership's performance and your personal trajectory with elite sales training across the <strong>United States and Canada</strong>.
                        </motion.p>
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
                        >
                            <Link to="/mentorship" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}>
                                Start Your Journey <ArrowRight size={20} />
                            </Link>
                            <Link to="/what-we-do" className="btn-secondary" style={{ color: 'white', borderColor: 'white' }}>
                                Our Approach
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ flex: '0 1 450px', position: 'relative' }}
                    >
                        <img
                            src="/src/assets/images/joe-portrait-1.jpg"
                            alt="Joe Cala"
                            style={{ width: '100%', borderRadius: '30px', boxShadow: 'var(--shadow-premium)' }}
                        />
                        <div style={{ position: 'absolute', bottom: '20px', left: '-20px', padding: '1.5rem', backgroundColor: 'var(--color-accent)', color: 'white', borderRadius: '12px', fontWeight: 700, boxShadow: 'var(--shadow-premium)' }}>
                            25+ Years Experience
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats" style={{ padding: '80px 0', borderBottom: '1px solid #f0f0f0' }}>
                <FadeIn className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
                        <div className="stat-item">
                            <h2 style={{ fontSize: '3.5rem', color: 'var(--color-primary)', fontWeight: 700 }}>1,000+</h2>
                            <p style={{ textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, opacity: 0.6 }}>Students Trained</p>
                        </div>
                        <div className="stat-item">
                            <h2 style={{ fontSize: '3.5rem', color: 'var(--color-primary)', fontWeight: 700 }}>500+</h2>
                            <p style={{ textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, opacity: 0.6 }}>Dealerships Impacted</p>
                        </div>
                        <div className="stat-item">
                            <h2 style={{ fontSize: '3.5rem', color: 'var(--color-primary)', fontWeight: 700 }}>15+</h2>
                            <p style={{ textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, opacity: 0.6 }}>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h2 style={{ fontSize: '3.5rem', color: 'var(--color-primary)', fontWeight: 700 }}>100%</h2>
                            <p style={{ textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, opacity: 0.6 }}>Commitment</p>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Pillars Preview */}
            <section className="pillars-preview" style={{ backgroundColor: '#fcfcfc' }}>
                <div className="container">
                    <FadeIn style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
                        <h2 className="section-title">A Foundation for Excellence</h2>
                        <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>We believe that professional mastery and personal integrity go hand-in-hand. Our training is built on four core pillars that ensure long-term success.</p>
                    </FadeIn>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Faith', icon: <Heart size={30} />, text: 'Rooted in purpose and spiritual integrity.' },
                            { title: 'Motivation', icon: <Users size={30} />, text: 'The fuel that drives consistent high performance.' },
                            { title: 'Training', icon: <Briefcase size={30} />, text: 'World-class tactics for the modern market.', link: '/academy' },
                            { title: 'Coaching', icon: <Star size={30} />, text: 'Direct mentorship to unlock your full potential.', link: '/mentorship' }
                        ].map((pillar, i) => (
                            <Link key={pillar.title} to={pillar.link || '#'}>
                                <FadeIn delay={i * 0.1}>
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        style={{ padding: '3rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', textAlign: 'center', height: '100%', cursor: pillar.link ? 'pointer' : 'default' }}
                                    >
                                        <div style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}>{pillar.icon}</div>
                                        <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{pillar.title}</h3>
                                        <p style={{ opacity: 0.7, color: 'var(--color-text)' }}>{pillar.text}</p>
                                    </motion.div>
                                </FadeIn>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Mentorship */}
            <section className="featured-mentorship" style={{ padding: '120px 0' }}>
                <FadeIn className="container">
                    <div className="glass-dark" style={{ padding: '5rem', borderRadius: '24px', color: 'white', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 400px' }}>
                            <span style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}>Exclusive Program</span>
                            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Salesperson Mentorship</h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>
                                Join an elite community of automotive sales professionals. Get direct access to training that has generated millions in revenue for dealerships nationwide.
                            </p>
                            <ul style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', gap: '0.8rem' }}><span style={{ color: 'var(--color-accent)' }}>✓</span> Weekly Live Coaching Calls</li>
                                <li style={{ display: 'flex', gap: '0.8rem' }}><span style={{ color: 'var(--color-accent)' }}>✓</span> Private Networking Hub</li>
                                <li style={{ display: 'flex', gap: '0.8rem' }}><span style={{ color: 'var(--color-accent)' }}>✓</span> Exclusive Script Library</li>
                            </ul>
                            <Link to="/mentorship" className="btn-primary">Enroll for $27/Month</Link>
                        </div>
                        <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
                            <div style={{ fontSize: '8rem', fontWeight: 700, color: 'var(--color-accent)', lineHeight: 1 }}>$27</div>
                            <p style={{ fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '4px', opacity: 0.6 }}>Per Month</p>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Social Proof Section - REPLACED */}
            <SocialProof />

            {/* Lead Magnet - NEW */}
            <LeadMagnet />

            {/* Final CTA */}
            <section className="final-cta" style={{ textAlign: 'center', padding: '120px 0', backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container">
                    <FadeIn>
                        <h2
                            style={{ fontSize: '3.5rem', marginBottom: '2rem' }}
                        >
                            Ready to Take the Next Step?
                        </h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto 3rem' }}>
                            Whether you're an individual salesperson or a dealership leader, we have the tools to help you reach the next level.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn-primary">Book a Consultation</Link>
                            <Link to="/mentorship" className="btn-secondary" style={{ color: 'white', borderColor: 'white' }}>Join the Mentorship</Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
