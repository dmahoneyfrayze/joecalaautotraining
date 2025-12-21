import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="About Joe Cala | Founder of JC Training & Development"
                description="Learn about Joe Cala's journey from Auto Dealer University to building a premier sales training and leadership coaching firm serving Canada and the US."
                keywords="Joe Cala bio, sales training expert, Auto Dealer University, automotive leadership coach, faith based business training"
            />
            <section className="about-hero" style={{ padding: '160px 0 100px', backgroundColor: 'var(--color-bg-dark)', color: 'white' }}>
                <div className="container">
                    <Breadcrumbs />
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 450px' }}>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}
                            >
                                The Man Behind the Mission
                            </motion.span>
                            <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem', color: 'white' }}>About Joe Cala</h1>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem', opacity: 0.9, color: 'rgba(255, 255, 255, 0.9)' }}>
                                With over a decade of experience in automotive sales leadership and professional ministry, Joseph Acala brings a unique, purpose-driven perspective to the world of consulting and training.
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.8, color: 'rgba(255, 255, 255, 0.8)' }}>
                                Joe's authority in the industry was solidified during his time at <strong>Auto Dealer University</strong>, where he developed many of the training protocols still in use across North America today.
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.8, color: 'rgba(255, 255, 255, 0.8)' }}>
                                He has worked with over 500 dealerships and mentored more than 1,000 individuals across the <strong>United States and Canada</strong>, helping them bridge the gap between financial success and personal fulfillment.
                            </p>
                        </div>
                        <div style={{ flex: '1 1 400px', position: 'relative' }}>
                            <div style={{ width: '100%', borderRadius: '15px', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                                <img
                                    src="/images/joe-portrait-2.jpg"
                                    alt="Joe Cala Professional Portrait"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>
                            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', padding: '1.5rem', backgroundColor: 'var(--color-accent)', color: 'white', borderRadius: '8px', fontWeight: 700, boxShadow: 'var(--shadow-premium)' }}>
                                Founder & Lead Mentor
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mission" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '100px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 className="section-title" style={{ color: 'white' }}>Our Mission</h2>
                        <p style={{ fontSize: '1.5rem', fontStyle: 'italic', marginBottom: '3rem', opacity: 0.9 }}>
                            "To empower leaders and professionals to reach their highest potential by integrating faith, discipline, and world-class training."
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--color-accent)', fontSize: '1.5rem', marginBottom: '1rem' }}>Integrity</h4>
                                <p style={{ opacity: 0.7 }}>Doing the right thing, even when no one is watching.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--color-accent)', fontSize: '1.5rem', marginBottom: '1rem' }}>Excellence</h4>
                                <p style={{ opacity: 0.7 }}>Striving for the best in every interaction and every process.</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--color-accent)', fontSize: '1.5rem', marginBottom: '1rem' }}>Impact</h4>
                                <p style={{ opacity: 0.7 }}>Leaving every person and every business better than we found them.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="story" style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', padding: '100px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title" style={{ textAlign: 'left', color: 'white' }}>A Purpose-Driven Journey</h2>
                        <p style={{ marginBottom: '1.5rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            Joseph's journey began with a simple observation: the most successful people in business weren't always the most fulfilled. He saw high-performing sales teams that were burnt out, and successful leaders who felt a lack of purpose.
                        </p>
                        <p style={{ marginBottom: '1.5rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            By combining his expertise in the automotive industry with his deep commitment to faith and ministry, Joe developed a training framework that addresses both the "how" of business and the "why" of leadership.
                        </p>
                        <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            Today, through JC Training & Development, Joseph continues to inspire and equip the next generation of automotive professionals to lead with purpose and live with clarity. Explore our <Link to="/what-we-do" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>methodology</Link> to see how we can transform your career.
                        </p>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
