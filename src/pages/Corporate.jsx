import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FadeIn from '../components/FadeIn';
import { CheckCircle, Users, TrendingUp, Award } from 'lucide-react';

const Corporate = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Corporate Sales Training & Dealership Consulting | Joe Cala"
                description="Scale your dealership's performance with Joe Cala's corporate training programs. On-site workshops, executive consulting, and team turnarounds."
                keywords="corporate sales training, dealership consulting, automotive sales workshops, sales team training, Joe Cala corporate"
            />

            {/* Hero Section */}
            <section className="corporate-hero" style={{ padding: '160px 0 100px', backgroundColor: 'var(--color-bg-dark)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(/images/seminar-bg.jpg) center/cover no-repeat', opacity: 0.4 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <Breadcrumbs />
                    <div style={{ maxWidth: '800px' }}>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{ display: 'block', color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}
                        >
                            For Dealerships & Groups
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '2rem' }}
                        >
                            Build a High-Performance <span className="text-gradient-gold">Sales Culture</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6, marginBottom: '3rem', maxWidth: '650px' }}
                        >
                            Standardize your sales process, reduce turnover, and increase gross profit with Joe Cala’s proven training systems. Tailored for dealership groups and corporate sales teams.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
                        >
                            <Link to="/contact" className="btn-primary">Book a Workshop</Link>
                            <Link to="#solutions" className="btn-secondary" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>View Solutions</Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Problems We Solve */}
            <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <h2 className="section-title" style={{ color: 'var(--color-primary)' }}>Why Most Training Fails</h2>
                        <p style={{ fontSize: '1.1rem', opacity: 0.7 }}>It's not a lack of talent. It's a lack of structure. We fix the core issues plaguing modern dealerships.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "High Turnover", desc: "Stop the revolving door. We build cultures where top performers want to stay." },
                            { title: "Inconsistent Process", desc: "Replace 'winging it' with a repeatable, scalable road-to-the-sale." },
                            { title: "Weak Leadership", desc: "Your managers are your most important asset. We train them to lead, not just desc." }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div style={{ padding: '2.5rem', borderRadius: '12px', backgroundColor: '#f9f9f9', height: '100%' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{item.title}</h3>
                                    <p style={{ opacity: 0.8, lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions / Services */}
            <section id="solutions" style={{ padding: '100px 0', backgroundColor: '#f4f4f4' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Corporate Solutions</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {/* Solution 1 */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <div style={{ flex: '1 1 300px' }}>
                                <div style={{ color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>On-Site Training</div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Dealership Workshops</h3>
                                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', opacity: 0.8 }}>
                                    Joe Cala comes to you. A high-energy, immersive 1-2 day workshop designed to wake up your sales floor and install enhanced selling techniques immediately.
                                </p>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={20} color="var(--color-accent)" /> <span>Modern Road-to-the-Sale</span></li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={20} color="var(--color-accent)" /> <span>Objection Handling Mastery</span></li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={20} color="var(--color-accent)" /> <span>Motivation & Mindset</span></li>
                                </ul>
                                <Link to="/contact" className="btn-primary">Inquire About Availability</Link>
                            </div>
                            <div style={{ flex: '1 1 300px' }}>
                                <img src="/images/workshop.jpg" alt="Sales Workshop" style={{ width: '100%', borderRadius: '12px', backgroundColor: '#ddd', height: '300px', objectFit: 'cover' }} />
                            </div>
                        </div>

                        {/* Solution 2 */}
                        <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '3rem', alignItems: 'center', backgroundColor: 'white', padding: '3rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <div style={{ flex: '1 1 300px' }}>
                                <img src="/images/executive.jpg" alt="Executive Coaching" style={{ width: '100%', borderRadius: '12px', backgroundColor: '#ddd', height: '300px', objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: '1 1 300px' }}>
                                <div style={{ color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Leadership</div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Executive & Ownership Consulting</h3>
                                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', opacity: 0.8 }}>
                                    Your team reflects your leadership. We work directly with Owners and Principals on **Strategy Alignment**, ensuring your vision is executed daily on the sales floor.
                                </p>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={20} color="var(--color-accent)" /> <span>Ownership Consulting</span></li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={20} color="var(--color-accent)" /> <span>Sales Manager Moulding</span></li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><CheckCircle size={20} color="var(--color-accent)" /> <span>Compensation & Pay Plans</span></li>
                                </ul>
                                <Link to="/contact" className="btn-primary">Connect with Joe</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '100px 0', backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Transform Your Dealership Today</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.2rem', opacity: 0.9 }}>
                        Don't let another month of potential profit slip away. Partner with Joe Cala to build a championship team.
                    </p>
                    <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Get a Custom Proposal</Link>
                </div>
            </section>
        </motion.div>
    );
};

export default Corporate;
