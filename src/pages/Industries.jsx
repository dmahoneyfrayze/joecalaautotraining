import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, Home, Anchor, ShoppingBag, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FadeIn from '../components/FadeIn';

const Industries = () => {
    const industries = [
        {
            title: "Automotive",
            icon: <Car size={40} />,
            desc: "Our core expertise. From showroom floor process to F&I turnovers and BDC lead management. We have trained over 500 dealerships to increase gross profit and retention.",
            link: "/corporate",
            linkText: "View Automotive Solutions",
            color: "var(--color-primary)"
        },
        {
            title: "Real Estate",
            icon: <Home size={40} />,
            desc: "Move beyond 'showing houses' to 'closing homes'. Learn the art of emotional discovery, negotiation leverage, and building a referral-based fortress.",
            link: "/industries/real-estate",
            linkText: "View Real Estate Courses",
            color: "#2ecc71"
        },
        {
            title: "Powersports, RV & Marine",
            icon: <Anchor size={40} />,
            desc: "High-ticket leisure sales require a different pace. Learn to sell the 'lifestyle' and handle the unique objections of the luxury recreation buyer.",
            link: "/industries/powersports",
            linkText: "View Powersports Training",
            color: "#3498db"
        },
        {
            title: "High-Ticket Retail",
            icon: <ShoppingBag size={40} />,
            desc: "Whether it's furniture, jewelry, or technology, the psychology of the consultative close remains the same. Stop clerking and start closing.",
            link: "/mentorship",
            linkText: "Join Sales Mentorship",
            color: "#9b59b6"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Sales Training by Industry | Automotive, Real Estate, Marine | Joe Cala"
                description="Joe Cala's high-performance sales training tailored for Automotive, Real Estate, RV/Marine, and High-Ticket Retail sectors. Universal principles, specific applications."
                keywords="automotive sales training, real estate sales coaching, rv sales training, marine sales training, high ticket sales"
            />

            {/* Hero Section */}
            <section style={{ padding: '160px 0 100px', backgroundColor: 'var(--color-bg-dark)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <Breadcrumbs />
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}
                    >
                        Universal Principles, <span className="text-gradient-gold">Tailored Application</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6 }}
                    >
                        The psychology of influence doesn't change, but your customer's context does. We adapt our elite sales frameworks to fit your specific industry.
                    </motion.p>
                </div>
            </section>

            {/* Industries Grid */}
            <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {industries.map((industry, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="industry-card" style={{
                                    padding: '3rem',
                                    borderRadius: '20px',
                                    backgroundColor: '#f9fafb',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        backgroundColor: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '2rem',
                                        color: industry.color,
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                                    }}>
                                        {industry.icon}
                                    </div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{industry.title}</h3>
                                    <p style={{ fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.8, marginBottom: '2rem', flexGrow: 1 }}>{industry.desc}</p>
                                    <Link to={industry.link} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: industry.color, fontSize: '0.95rem' }}>
                                        {industry.linkText} <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why It Works Section */}
            <section style={{ padding: '100px 0', backgroundColor: '#f4f4f4' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ flex: '1 1 500px' }}>
                            <h2 className="section-title">Why "Car Sales" Training Works Everywhere</h2>
                            <p style={{ fontSize: '1.15rem', marginBottom: '2rem', lineHeight: 1.8, opacity: 0.8 }}>
                                Automotive sales is the most competitive, high-pressure, and complex sales environment on earth. It involves handling rapid objections, negotiating high-ticket items, managing financing, and building emotional desire—all in less than 2 hours.
                            </p>
                            <p style={{ fontSize: '1.15rem', marginBottom: '2rem', lineHeight: 1.8, opacity: 0.8 }}>
                                If you can sell a car ethically and effectively, you can sell <strong>anything</strong>.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '1.1rem' }}>
                                    <TrendingUp color="var(--color-accent)" /> <span>Universal Objection Handling</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '1.1rem' }}>
                                    <TrendingUp color="var(--color-accent)" /> <span>Speed-to-Lead Psychology</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '1.1rem' }}>
                                    <TrendingUp color="var(--color-accent)" /> <span>Negotiation & Value Stacking</span>
                                </li>
                            </ul>
                        </div>
                        <div style={{ flex: '1 1 400px' }}>
                            {/* Placeholder for future specific industry image, utilizing existing abstract one for now */}
                            <div style={{ background: 'var(--color-primary)', padding: '3rem', borderRadius: '20px', color: 'white', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>+30%</h3>
                                <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Average Gross Profit Increase</p>
                                <div style={{ height: '1px', background: 'rgba(255,255,255,0.2)', margin: '2rem 0' }}></div>
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>1000+</h3>
                                <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Students Certified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '100px 0', backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Don't See Your Industry?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.2rem', opacity: 0.9 }}>
                        Sales is sales. If you have humans selling to humans, we can help you build a process that wins.
                    </p>
                    <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Get a Custom Consultation</Link>
                </div>
            </section>
        </motion.div>
    );
};

export default Industries;
