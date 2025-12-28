import { useState } from 'react'; // Add useState import
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Award, Globe, CheckCircle, ArrowRight, Zap, Target, Users, Book, Download, LayoutGrid, Wrench, Bike, Home, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { CourseSchema } from '../components/SchemaMarkup';
import FAQ from '../components/FAQ';
import { courses } from '../data/courses';

const Academy = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Career Pathways", "Skill Mastery", "Powersports", "Fixed Operations", "Real Estate", "Faith & Community", "Leadership & Ministry", "Bundles & Special Programs", "Free Resources"];

    const filteredCourses = selectedCategory === "All"
        ? courses
        : courses.filter(c => c.category === selectedCategory);

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

    const getIconForCategory = (cat) => {
        switch (cat) {
            case "Career Pathways": return <Target size={20} />;
            case "Real Estate": return <Home size={20} />;
            case "Faith & Community": return <Heart size={20} />;
            case "Leadership & Ministry": return <Users size={20} />;
            case "Powersports": return <Bike size={20} />;
            case "Fixed Operations": return <Wrench size={20} />;
            case "Bundles & Special Programs": return <LayoutGrid size={20} />;
            case "Free Resources": return <Download size={20} />;
            default: return <BookOpen size={20} />;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Generate Schema for top courses */}
            {courses.slice(0, 5).map(course => (
                <CourseSchema key={course.id} course={course} />
            ))}

            <SEO
                title="Online Automotive Sales Training & Certification | JC Academy"
                description="Access the #1 digital library for automotive sales professionals. Modules on CRM, BDC, Closing, and Leadership. Get certified and advance your career today."
                keywords="online car sales training, automotive sales certification, BDC training course, sales management course"
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
                            The Gold Standard for North American Sales & Leadership Training. Access <strong>hundreds of online videos, assets, playbooks, guides, and takeaways</strong> to master your craft.
                        </motion.p>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <a href="https://jctrainingacademy.thinkific.com/users/sign_up" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '1.2rem 2.5rem' }}>
                                Access All Courses <ArrowRight size={20} />
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
                                    src="/images/group-training.webp"
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

            {/* Course Catalog Grid */}
            <section style={{ padding: '100px 0', backgroundColor: '#fcfcfc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <h2 className="section-title">Comprehensive Curriculum</h2>
                        <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>Explore our extensive catalog of courses designed for every stage of your career.</p>
                    </div>

                    {/* Filter Buttons */}
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                style={{
                                    padding: '0.8rem 1.5rem',
                                    borderRadius: '50px',
                                    border: 'none',
                                    backgroundColor: selectedCategory === cat ? 'var(--color-primary)' : 'white',
                                    color: selectedCategory === cat ? 'white' : '#555',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    transition: 'all 0.3s ease',
                                    fontSize: '0.9rem'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        <AnimatePresence>
                            {filteredCourses.map((course) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    key={course.id}
                                    style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}
                                >
                                    <div style={{ padding: '2rem', flex: 1 }}>
                                        {course.id === 'internet-lead-handling' && (
                                            <div style={{ marginTop: '1rem', padding: '0.8rem', backgroundColor: '#f0f9ff', borderRadius: '6px', fontSize: '0.9rem', borderLeft: '3px solid var(--color-accent)' }}>
                                                <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.3rem', color: '#0c4a6e' }}>💡 Related Insight:</span>
                                                <Link to="/blog/frayze-growth-engine-vs-crm" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
                                                    Read about the "Speed-to-Lead" Growth Engine
                                                </Link>
                                            </div>
                                        )}
                                        {course.id === 'developing-high-performance-teams' && (
                                            <div style={{ marginTop: '1rem', padding: '0.8rem', backgroundColor: '#f0f9ff', borderRadius: '6px', fontSize: '0.9rem', borderLeft: '3px solid var(--color-accent)' }}>
                                                <span style={{ fontWeight: 600, display: 'block', marginBottom: '0.3rem', color: '#0c4a6e' }}>💡 Leadership Focus:</span>
                                                <Link to="/blog/high-turnover-dealership-culture-fix" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
                                                    Why High Turnover is destroying your store
                                                </Link>
                                            </div>
                                        )}
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>                                        <div style={{ padding: '0.8rem', backgroundColor: 'rgba(26, 27, 65, 0.05)', borderRadius: '12px', color: 'var(--color-primary)' }}>
                                            {getIconForCategory(course.category)}
                                        </div>
                                            <span style={{ fontSize: '0.85rem', fontWeight: 600, padding: '0.4rem 0.8rem', backgroundColor: course.price === 'Free' ? '#e6f4ea' : '#fff8e1', color: course.price === 'Free' ? '#1e7e34' : '#b28900', borderRadius: '8px' }}>
                                                {course.price}
                                            </span>
                                        </div>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.5px' }}>{course.lessons}</p>
                                        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', lineHeight: 1.3 }}>{course.title}</h3>
                                        <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>{course.description}</p>
                                    </div>
                                    <div style={{ padding: '1.5rem 2rem', borderTop: '1px solid #f0f0f0', backgroundColor: '#fafafa' }}>
                                        <a href="https://jctrainingacademy.thinkific.com/users/sign_up" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                                            View Course Details <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* CTA */}
                    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Looking for direct one-on-one guidance?</p>
                        <Link to="/mentorship" className="btn-primary">Explore Mentorship Programs</Link>
                    </div>
                </div>
            </section>

            <section className="speaking" style={{ padding: '120px 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 450px', order: 2 }}>
                            <img
                                src="/images/speaking.jpg"
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
