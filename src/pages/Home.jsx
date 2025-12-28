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
                title="The Authority in High-Ticket Sales Training | Joe Cala"
                description="Elite sales training & leadership coaching for Automotive, Real Estate, Tech, and Luxury Retail. Master the art of influence with Joe Cala."
                keywords="sales training, high ticket sales, automotive sales training, real estate sales coaching, tech sales training, Joe Cala"
            />
            {/* Hero Section */}
            <section className="hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--color-primary)', color: 'white', position: 'relative', overflow: 'hidden', paddingBottom: '150px' }}>
                {/* Background Decorative Elements */}
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>

                <div className="container" style={{ zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4rem' }}>
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
                            <span className="text-gradient-gold">Live With Clarity.</span>
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
                            <Link to="/mentorship" className="btn-primary" aria-label="Start Your Mentorship Journey" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}>
                                Start Your Journey <ArrowRight size={20} />
                            </Link>
                            <Link to="/what-we-do" className="btn-secondary" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                                Our Approach
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ flex: '0 1 450px', position: 'relative' }}
                    >
                        <img
                            src="/images/joe-portrait-1.jpg"
                            alt="Joe Cala - High Ticket Sales Trainer"
                            width="450"
                            height="560"
                            fetchpriority="high"
                            style={{ width: '100%', height: 'auto', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
                        />
                        <div className="glass" style={{ position: 'absolute', bottom: '30px', left: '-30px', padding: '1.5rem', borderRadius: '12px', fontWeight: 700, boxShadow: 'var(--shadow-premium)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
                            <div style={{ color: 'var(--color-accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>Trusted Authority</div>
                            <div style={{ fontSize: '1.5rem' }}>25+ Years Experience</div>
                        </div>
                    </motion.div>
                </div>

                {/* Wave Separator */}
                <div className="wave-separator-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            {/* Choose Your Path Section */}
            <section style={{ padding: '40px 0 80px', marginTop: '-60px', position: 'relative', zIndex: 10 }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Individuals Card */}
                        <FadeIn delay={0.2}>
                            <Link to="/mentorship" style={{ textDecoration: 'none' }}>
                                <div style={{
                                    backgroundColor: 'white',
                                    padding: '3rem',
                                    borderRadius: '20px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    height: '100%',
                                    transition: 'transform 0.3s ease',
                                    textAlign: 'center'
                                }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <div style={{ width: '60px', height: '60px', margin: '0 auto 1.5rem', backgroundColor: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                        <Briefcase size={28} />
                                    </div>
                                    <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>For Individuals</h2>
                                    <p style={{ opacity: 0.7, marginBottom: '1.5rem', color: 'var(--color-text)' }}>
                                        Salespeople, Managers, and Leaders looking to master their craft and accelerate their career.
                                    </p>
                                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                        Join Mentorship <ArrowRight size={18} />
                                    </span>
                                </div>
                            </Link>
                        </FadeIn>

                        {/* Groups Card */}
                        <FadeIn delay={0.4}>
                            <Link to="/corporate" style={{ textDecoration: 'none' }}>
                                <div style={{
                                    backgroundColor: 'var(--color-primary)',
                                    padding: '3rem',
                                    borderRadius: '20px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                    color: 'white',
                                    height: '100%',
                                    transition: 'transform 0.3s ease',
                                    textAlign: 'center'
                                }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <div style={{ width: '60px', height: '60px', margin: '0 auto 1.5rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                                        <Users size={28} />
                                    </div>
                                    <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1rem' }}>For Dealerships</h2>
                                    <p style={{ opacity: 0.8, marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>
                                        Dealer Principals and Groups seeking scalable training systems and culture transformation.
                                    </p>
                                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                        Corporate Solutions <ArrowRight size={18} />
                                    </span>
                                </div>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats" style={{ padding: '80px 0', borderBottom: '1px solid #f0f0f0', position: 'relative' }}>
                <FadeIn className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
                        {[
                            { value: "1,000+", label: "Students Trained" },
                            { value: "500+", label: "Dealerships Impacted" },
                            { value: "15+", label: "Years Experience" },
                            { value: "100%", label: "Commitment" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="stat-item"
                            >
                                <h2 className="text-gradient-gold" style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{stat.value}</h2>
                                <p style={{ textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, opacity: 0.6, fontSize: '0.9rem' }}>{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </FadeIn>
            </section>

            {/* Pillars Preview */}
            <section className="pillars-preview" style={{ backgroundColor: '#fcfcfc', padding: '120px 0' }}>
                <div className="container">
                    <FadeIn style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
                        <h2 className="section-title">A Foundation for Excellence</h2>
                        <p style={{ fontSize: '1.2rem', opacity: 0.8, lineHeight: 1.8 }}>We believe that professional mastery and personal integrity go hand-in-hand. Our training is built on four core pillars that ensure long-term success.</p>
                    </FadeIn>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Faith', icon: <Heart size={32} />, text: 'Rooted in purpose and spiritual integrity.' },
                            { title: 'Motivation', icon: <Users size={32} />, text: 'The fuel that drives consistent high performance.' },
                            { title: 'Training', icon: <Briefcase size={32} />, text: 'World-class tactics for the modern market.', link: '/academy' },
                            { title: 'Coaching', icon: <Star size={32} />, text: 'Direct mentorship to unlock your full potential.', link: '/mentorship' }
                        ].map((pillar, i) => (
                            <Link key={pillar.title} to={pillar.link || '#'}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="card-premium"
                                    style={{ padding: '3rem', borderRadius: '16px', textAlign: 'center', height: '100%', cursor: pillar.link ? 'pointer' : 'default', backgroundColor: 'white' }}
                                >
                                    <div style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', display: 'inline-flex', padding: '1rem', borderRadius: '50%', backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>{pillar.icon}</div>
                                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)', fontSize: '1.5rem' }}>{pillar.title}</h3>
                                    <p style={{ opacity: 0.7, color: 'var(--color-text)', lineHeight: 1.6 }}>{pillar.text}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Mentorship */}
            <section className="featured-mentorship" style={{ padding: '120px 0' }}>
                <FadeIn className="container">
                    <div className="glass-dark responsive-padding flex-responsive" style={{ borderRadius: '24px', color: 'white' }}>
                        <div style={{ flex: '1 1 400px' }}>
                            <span style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}>Exclusive Program</span>
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem' }}>Salesperson Mentorship</h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>
                                Join an elite community of high-ticket sales professionals. Get direct access to training that has generated millions in revenue across multiple industries.
                            </p>
                            <ul style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', gap: '0.8rem' }}><span style={{ color: 'var(--color-accent)' }}>✓</span> Weekly Live Coaching Calls</li>
                                <li style={{ display: 'flex', gap: '0.8rem' }}><span style={{ color: 'var(--color-accent)' }}>✓</span> Private Networking Hub</li>
                                <li style={{ display: 'flex', gap: '0.8rem' }}><span style={{ color: 'var(--color-accent)' }}>✓</span> Exclusive Script Library</li>
                            </ul>
                            <Link to="/mentorship" className="btn-primary" style={{ display: 'inline-block', textAlign: 'center', width: 'auto' }}>Enroll for $27/Month</Link>
                        </div>
                        <div className="w-full-mobile" style={{ flex: '1 1 300px', textAlign: 'center' }}>
                            <div className="text-giant">$27</div>
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
