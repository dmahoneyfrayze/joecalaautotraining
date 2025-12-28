import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bike, Anchor, Wind, TrendingUp, CheckCircle, Award } from 'lucide-react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import FadeIn from '../../components/FadeIn';

const Powersports = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Powersports & Motorcycle Dealership Sales Training | Joe Cala"
                description="Specialized sales training for Harley-Davidson, Metric, and RV dealerships. Learn to master lifestyle selling, seasonal floor traffic, and accessory revenue."
                keywords="motorcycle sales training, powersports dealership consulting, harley davidson sales training, rv sales process, marine sales coaching"
            />

            {/* Hero Section */}
            <section style={{ padding: '160px 0 100px', backgroundColor: '#0F102A', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.2 }}>
                    {/* Abstract background representing speed/motion */}
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #000 0%, #333 100%)' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <Breadcrumbs />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '0.5rem 1.2rem', borderRadius: '50px', marginBottom: '2rem' }}
                    >
                        <Bike size={18} style={{ color: 'var(--color-accent)' }} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                            Powersports • Marine • RV
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}
                    >
                        Sell the <span className="text-gradient-gold">Freedom</span>, <br /> Not Just the Machine
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ maxWidth: '750px', margin: '0 auto 3rem', fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6 }}
                    >
                        Selling discretionary luxury toys requires a different psychological approach than selling daily drivers. We teach your team how to monetize passion.
                    </motion.p>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'var(--color-accent)', color: '#000' }}>Book a Powersports Workshop</Link>
                    </motion.div>
                </div>
            </section>

            {/* The Challenge Section */}
            <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>The "Toy Store" Fallacy</h2>
                            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#555', marginBottom: '2rem' }}>
                                Too many powersports sales floors run like a hangout spot. Salespeople talk about riding gear and specs, but fail to ask the hard closing questions because they want to be "friends" with the customer.
                            </p>
                            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#555', marginBottom: '2rem' }}>
                                <strong>The Result:</strong> Lots of great conversations, very few deposits, and drastically lower F&I penetration.
                            </p>
                            <div style={{ padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '16px', borderLeft: '4px solid var(--color-accent)' }}>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 700 }}>Our Approach:</h4>
                                <p style={{ fontStyle: 'italic', opacity: 0.8 }}>
                                    "We leverage the customer's excitement to build value, then pivot to a professional, structured close that respects their time and your bottom line."
                                </p>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            {[
                                { icon: <Bike size={30} />, title: "Motorcycles", desc: "Harley, Metric, Off-Road" },
                                { icon: <Anchor size={30} />, title: "Marine", desc: "Boats, PWC, Yachts" },
                                { icon: <Wind size={30} />, title: "RV", desc: "Towables & Motorhomes" },
                                { icon: <TrendingUp size={30} />, title: "Side-by-Sides", desc: "UTV & ATV" }
                            ].map((item, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div style={{ padding: '2rem', backgroundColor: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderRadius: '16px', textAlign: 'center', border: '1px solid #eee' }}>
                                        <div style={{ color: 'var(--color-accent)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                                        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{item.desc}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum Highlights */}
            <section style={{ padding: '100px 0', backgroundColor: '#f4f4f4' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <h2 className="section-title">Specialized Curriculum</h2>
                        <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>Beyond the basics. We tackle the specific challenges of the recreational industry.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            {
                                title: "Selling the 'Monthly Payment' on Toys",
                                desc: "How to overcome the 'cash buyer' mindset and increase finance penetration on discretionary purchases."
                            },
                            {
                                title: "Parts & Accessories Integration",
                                desc: "Stop treating P&A as an afterthought. We teach a 'Walkaround' that builds a $2,000+ accessory ticket before they even sit at the desk."
                            },
                            {
                                title: "Seasonal Urgency",
                                desc: "How to close deals in the winter and maximize margin in the summer. Managing the feast and famine cycle."
                            }
                        ].map((item, index) => (
                            <div key={index} style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 5px 15px rgba(0,0,0,0.03)' }}>
                                <div style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                    <CheckCircle size={32} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#0F102A' }}>{item.title}</h3>
                                <p style={{ lineHeight: 1.6, opacity: 0.8 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '100px 0', backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <Award size={50} style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }} />
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to Throttle Up?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.2rem', opacity: 0.9 }}>
                        Join the top powersports groups in North America who trust Joe Cala to train their teams.
                    </p>
                    <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Schedule a Strategy Call</Link>
                </div>
            </section>
        </motion.div>
    );
};

export default Powersports;
