import { motion } from 'framer-motion';
import { BookOpen, Award, Globe, CheckCircle, ArrowRight, Zap, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';

const Academy = () => {
    const faqItems = [
        {
            question: "What industries do you specialize in?",
            answer: "While our heritage is in automotive (US and Canada), our sales principles are universal and have been successfully applied in real estate, B2B services, and ministries."
        },
        {
            question: "Is the training available for individual sales people?",
            answer: "Absolutely. The JC Training Academy is designed for both individual professionals looking to level up their personal income and entire dealership teams looking to standardize their sales process."
        },
        {
            question: "Do you offer in-person training?",
            answer: "Yes, we offer on-site dealership consulting across North America. For more information on in-person training, please contact us via the consultation link."
        }
    ];

    const trainingModules = [
        {
            title: "Automotive Mastery",
            description: "Advanced closing techniques, objection handling, and inventory management for the modern North American market.",
            icon: <Zap size={24} />
        },
        {
            title: "General Sales Training",
            description: "Universal sales principles applicable to B2B, B2C, and high-ticket service industries across any sector.",
            icon: <Target size={24} />
        },
        {
            title: "Leadership & Culture",
            description: "Building high-performance teams that lead with integrity and achieve consistent month-over-month growth.",
            icon: <Users size={24} />
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="JC Training Academy | Elite Auto Sales Training"
                description="Access professional automotive and general sales training portals. Built by Joe Cala, formerly of Auto Dealer University. Scale your success in the US and Canada."
                keywords="sales training academy, car sales portal, dealership training Canada, US auto sales coaching, Thinkific sales course"
            />
            {/* Academy Hero */}
            <section className="academy-hero" style={{ backgroundColor: '#0A0B1A', color: 'white', padding: '180px 0 150px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)', zIndex: 0, filter: 'blur(50px)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <Breadcrumbs />
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(212, 175, 55, 0.1)', padding: '0.5rem 1.2rem', borderRadius: '50px', border: '1px solid rgba(212, 175, 55, 0.3)', marginBottom: '2rem' }}
                        >
                            <Award size={18} style={{ color: 'var(--color-accent)' }} />
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                                Official Training Portal
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}
                        >
                            JC Training <span className="text-gradient-gold">Academy</span>
                        </motion.h1>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9, lineHeight: 1.6 }}
                        >
                            The Gold Standard for North American Sales & Leadership Training. Rooted in elite automotive history, built for modern professional dominance.
                        </motion.p>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <a href="https://jctrainingacademy.thinkific.com/users/sign_up" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '1.2rem 2.5rem' }}>
                                Access Training Portal <ArrowRight size={20} />
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Wave Separator */}
                <div className="wave-separator-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            {/* Authority Section */}
            <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ flex: '1 1 500px' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: '50px', height: '2px', backgroundColor: 'var(--color-accent)' }}></div>
                                <span style={{ fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--color-primary)' }}>Heritage of Excellence</span>
                            </div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Formerly of Auto Dealer University</h2>
                            <p style={{ fontSize: '1.15rem', color: '#444', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                Joseph Cala's impact on the automotive industry began at <strong>Auto Dealer University</strong>, where he pioneered sales frameworks that are still used by hundreds of dealerships today.
                            </p>
                            <p style={{ fontSize: '1.15rem', color: '#444', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                                Today, he has expanded that authority across Canada and the United States, providing a bridge between tactical sales mastery and purpose-driven leadership. Whether you are in Toronto or Texas, the principles of elite sales remain the same.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div style={{ borderLeft: '4px solid var(--color-accent)', paddingLeft: '1.5rem' }}>
                                    <h4 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>500+</h4>
                                    <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>North American Dealerships</p>
                                </div>
                                <div style={{ borderLeft: '4px solid var(--color-accent)', paddingLeft: '1.5rem' }}>
                                    <h4 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>1k+</h4>
                                    <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>Elite Students Trained</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ flex: '1 1 400px' }}
                        >
                            <div className="glass-light" style={{ padding: '3rem', borderRadius: '24px', border: '1px solid #f0f0f0', boxShadow: '0 20px 60px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
                                <img
                                    src="/src/assets/images/group-training.jpg"
                                    alt="Joe Cala Group Training Session"
                                    style={{ width: '100%', borderRadius: '15px', marginBottom: '2rem' }}
                                />
                                <h3 style={{ marginBottom: '1.5rem' }}>Market Dominance</h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                    <li style={{ display: 'flex', gap: '0.8rem' }}>
                                        <CheckCircle size={20} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                                        <span>Serving Canada's Top Auto Groups</span>
                                    </li>
                                    <li style={{ display: 'flex', gap: '0.8rem' }}>
                                        <CheckCircle size={20} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                                        <span>US Dealership Consulting & Training</span>
                                    </li>
                                    <li style={{ display: 'flex', gap: '0.8rem' }}>
                                        <CheckCircle size={20} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                                        <span>Cross-Industry Sales Principles</span>
                                    </li>
                                    <li style={{ display: 'flex', gap: '0.8rem' }}>
                                        <CheckCircle size={20} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                                        <span>High-Ticket Service Optimization</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Modules Grid */}
            < section style={{ padding: '120px 0', backgroundColor: '#fcfcfc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
                        <h2 className="section-title">Beyond Just Automotive</h2>
                        <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>Our curriculum is built on the foundation of high-ticket sales, applicable to any industry that requires influence, integrity, and elite communication.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                        {trainingModules.map((module, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                style={{ padding: '3rem', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', position: 'relative' }}
                            >
                                <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                                    {module.icon}
                                </div>
                                <h3 style={{ marginBottom: '1.2rem' }}>{module.title}</h3>
                                <p style={{ opacity: 0.7, lineHeight: 1.6 }}>{module.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Looking for direct one-on-one guidance?</p>
                        <Link to="/mentorship" className="btn-primary">Explore Mentorship Programs</Link>
                    </div>
                </div>
            </section >

            <section className="speaking" style={{ padding: '120px 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 450px', order: 2 }}>
                            <img
                                src="/src/assets/images/speaking.jpg"
                                alt="Joe Cala Public Speaking"
                                style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-premium)' }}
                            />
                        </div>
                        <div style={{ flex: '1 1 450px', order: 1 }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Inspiring Excellence Across Stages</h2>
                            <p style={{ fontSize: '1.15rem', color: '#444', marginBottom: '2rem', lineHeight: 1.8 }}>
                                Joe Cala is not just a consultant; he is a requested speaker for dealerships, sales rallies, and leadership conferences across North America. His ability to connect faith-based principles with high-stakes sales results makes him a unique voice in the industry.
                            </p>
                            <Link to="/contact" className="btn-primary">Book Joe for Your Event</Link>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ items={faqItems} title="Academy Details & FAQ" />

            {/* Portal CTA */}
            <section style={{ padding: '120px 0', backgroundColor: 'var(--color-primary)', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to Scale Your Success?</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Join the hundreds of professionals currently training in our Thinkific portal. Get the same scripts and strategies used by the top 1% of sales leaders.
                    </p>
                    <a href="https://jctrainingacademy.thinkific.com/users/sign_up" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ color: 'white', borderColor: 'white', padding: '1.2rem 3rem' }}>
                        Enroll in the Academy
                    </a>
                </div>
            </section>
        </motion.div >
    );
};

export default Academy;
