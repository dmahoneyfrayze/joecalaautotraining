import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';

const Mentorship = () => {
    const faqItems = [
        {
            question: "How long is the mentorship commitment?",
            answer: "The mentorship is a month-to-month subscription. There are no long-term contracts; we believe the value speaks for itself."
        },
        {
            question: "When are the live coaching calls?",
            answer: "Live calls are typically held once a week. All sessions are recorded and uploaded to the private library for later viewing."
        },
        {
            question: "What makes this different from other sales coaching?",
            answer: "We focus on the human element. While we teach elite tactical skills, we also prioritize personal clarity, faith, and long-term fulfillment."
        }
    ];

    const benefits = [
        "Weekly LIVE Training Sessions",
        "Access to Private Community",
        "Sales Script Library",
        "Overcoming Objections Workshop",
        "Daily Accountability Tracking",
        "Faith-Based Leadership Principles"
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Sales Mentorship & Coaching | Joe Cala"
                description="Join an elite group of sales professionals. Weekly coaching, private scripts, and accountability to transform your career. Perfect for US and Canada dealership teams."
                keywords="sales mentorship, car sales coaching, dealership leadership, Joe Cala mentorship, automotive sales success"
            />
            {/* Mentorship Hero */}
            <section className="mentorship-hero" style={{ backgroundColor: '#0F102A', color: 'white', padding: '180px 0 150px', position: 'relative', overflow: 'hidden' }}>
                {/* Background Accent */}
                <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)', zIndex: 0, filter: 'blur(50px)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <Breadcrumbs />
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}
                        >
                            Elite Performance Training
                        </motion.span>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            style={{ fontSize: '4rem', marginBottom: '2rem' }}
                        >
                            Master Your Sales Craft <br /> for Just <span className="text-gradient-gold">$27/Month</span>
                        </motion.h1>
                        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9 }}>
                            The Salesperson Mentorship Program is designed for high-achievers who want to dominate the automotive market while maintaining their core values.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="https://jctrainingacademy.thinkific.com/users/sign_up" target="_blank" rel="noopener noreferrer" className="btn-primary">Enroll Now</a>
                            <a href="#details" className="btn-secondary" style={{ color: 'white', borderColor: 'white' }}>Learn More</a>
                        </div>
                    </div>
                </div>

                {/* Wave Separator */}
                <div className="wave-separator-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            <section id="details" className="mentorship-details" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 400px' }}>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Why Join the Mentorship?</h2>
                            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                                Being a salesperson can be isolating. Most training is outdated or focuses purely on "closing the deal" at any cost. We do things differently. Our <Link to="/academy" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Training Academy</Link> provides the technical foundation, while this mentorship provides the personal growth.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={benefit}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}
                                    >
                                        <CheckCircle size={20} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                                        <span style={{ fontWeight: 500 }}>{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div style={{ flex: '1 1 400px' }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="glass-dark"
                                style={{ padding: '3rem', borderRadius: '15px', color: 'white', position: 'relative' }}
                            >
                                <div style={{ position: 'absolute', top: '-15px', right: '-15px', width: '80px', height: '80px', backgroundColor: 'var(--color-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '0.9rem', textAlign: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}>
                                    ONLY <br /> $27
                                </div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Monthly Subscription</h3>
                                <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
                                    No long-term contracts. Cancel anytime. We are so confident in the value of this program that we make it accessible to every salesperson ready to upgrade their life.
                                </p>
                                <ul style={{ marginBottom: '2.5rem', opacity: 0.9 }}>
                                    <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem' }}>✓ Weekly Coaching Calls</li>
                                    <li style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem' }}>✓ Direct Access to Joe Cala</li>
                                    <li>✓ Exclusive Resources & Templates</li>
                                </ul>
                                <a href="https://jctrainingacademy.thinkific.com/users/sign_up" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>Secure Your Spot <ArrowRight size={18} style={{ marginLeft: '10px' }} /></a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ items={faqItems} title="Mentorship Questions" />

            <section className="cta-banner" style={{ backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Lead With Purpose?</h2>
                    <p style={{ marginBottom: '2.5rem', opacity: 0.8 }}>Don't wait for success to happen. Build the foundation today.</p>
                    <a href="https://jctrainingacademy.thinkific.com/users/sign_up" target="_blank" rel="noopener noreferrer" className="btn-primary">Get Started Now</a>
                </div>
            </section>
        </motion.div>
    );
};

export default Mentorship;
