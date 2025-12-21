import { motion } from 'framer-motion';
import { Shield, Zap, BookOpen, Target } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const WhatWeDo = () => {
    const pillars = [
        {
            title: "Faith",
            icon: <Shield size={40} />,
            description: "Leadership built on a foundation of integrity, purpose, and spiritual growth. We believe true success starts from within."
        },
        {
            title: "Motivation",
            icon: <Zap size={40} />,
            description: "Cultivating the mindset and drive necessary to overcome obstacles and sustain long-term peak performance."
        },
        {
            title: "Training",
            icon: <BookOpen size={40} />,
            description: "World-class automotive sales tactics, communication strategies, and process optimization for dealerships."
        },
        {
            title: "Coaching",
            icon: <Target size={40} />,
            description: "One-on-one and group mentorship to refine skills, ensure accountability, and achieve specific professional goals."
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Our Methodology | JC Training & Development"
                description="Explore the 4 Pillars of Total Transformation: Faith, Training, Motivation, and Coaching. The framework behind the JC Growth Circle."
                keywords="sales methodology, JC Growth Circle, faith based leadership, sales pillars, motivational coaching"
            />
            <section className="page-hero" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '160px 0 100px', textAlign: 'center' }}>
                <div className="container">
                    <Breadcrumbs />
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}
                    >
                        The 4 Pillars of <span style={{ color: 'var(--color-accent)' }}>Total Transformation</span>
                    </motion.h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9 }}>
                        Our comprehensive approach combines professional excellence with personal growth, ensuring you lead with purpose and live with clarity.
                    </p>
                </div>
            </section>

            <section className="pillars">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ padding: '3rem', backgroundColor: 'white', border: '1px solid #eee', borderRadius: '8px', textAlign: 'center' }}
                            >
                                <div style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                    {pillar.icon}
                                </div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{pillar.title}</h3>
                                <p style={{ opacity: 0.8 }}>{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="growth-circle" style={{ backgroundColor: '#fcfcfc' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
                        <div style={{ flex: '1 1 400px' }}>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>The JC Growth Circle</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                                The JC Growth Circle is more than just a training program; it's a movement aimed at developing the whole person. We focus on the intersection of professional skill and spiritual discipline.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <li style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>✓</div>
                                    <div><strong>Strategic Leadership:</strong> Aligning your business goals with your core values.</div>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>✓</div>
                                    <div><strong>Performance Excellence:</strong> Mastering the mechanics of sales and management.</div>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>✓</div>
                                    <div><strong>Faith-Based Foundation:</strong> Finding clarity and peace through spiritual grounding.</div>
                                </li>
                            </ul>
                        </div>
                        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                            <img
                                src="/images/growth-circle.jpg"
                                alt="JC Growth Circle Diagram"
                                style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '20px', boxShadow: 'var(--shadow-premium)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="sales-process" style={{ padding: '120px 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="section-title">Automotive Sales Operating System</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.8 }}>
                            Our proven framework for dealership dominance, taking every lead from initial contact to final delivery with maximum efficiency and integrity.
                        </p>
                    </div>
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <img
                            src="/images/sales-process.png"
                            alt="Automotive Sales Operating System"
                            style={{ width: '100%', height: 'auto', borderRadius: '15px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}
                        />
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default WhatWeDo;
