import { motion } from 'framer-motion';
import { Globe, BookOpen, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

const SalesTraining = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="National Automotive Sales Training Systems | Joe Cala"
                description="Install a proven sales operating system. From 'Lead to Appointment' to 'Closing Mastery', we fix the broken processes in your dealership."
                keywords="automotive sales training system, car dealership sales process, BDC training, sales management system"
            />

            <section style={{ backgroundColor: '#0F102A', color: 'white', padding: '160px 0 100px', textAlign: 'center' }}>
                <div className="container">
                    <Breadcrumbs />
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <span style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                            United States & Canada
                        </span>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                            Systematic <span style={{ color: 'var(--color-accent)' }}>Sales Excellence</span>
                        </h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9 }}>
                            We don't just train salespeople; we install operating systems that turn dealerships into high-performance machines.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                        <h2 className="section-title">Trusted by Dealers Across the USA</h2>
                        <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
                            From single-point stores to large dealer groups, our systems scale. We have worked with "tons and tons" of dealers nationwide to solve the universal problems of turnover, compassion fatigue, and process breakdown.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ padding: '2.5rem', border: '1px solid #eee', borderRadius: '12px', textAlign: 'center' }}>
                            <Globe size={40} style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }} />
                            <h3>Remote & On-Site</h3>
                            <p style={{ marginTop: '1rem', opacity: 0.8 }}>
                                Whether you need Joe in your showroom for a 3-day boot camp or a virtual keynote for your annual meeting, we deliver energy and expertise.
                            </p>
                        </div>
                        <div style={{ padding: '2.5rem', border: '1px solid #eee', borderRadius: '12px', textAlign: 'center' }}>
                            <Laptop size={40} style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }} />
                            <h3>The Digital Academy</h3>
                            <p style={{ marginTop: '1rem', opacity: 0.8 }}>
                                Our 24/7 learning portal ensures the training sticks. New hires get onboarded faster, and veterans stay sharp.
                            </p>
                        </div>
                        <div style={{ padding: '2.5rem', border: '1px solid #eee', borderRadius: '12px', textAlign: 'center' }}>
                            <BookOpen size={40} style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }} />
                            <h3>Custom Curriculum</h3>
                            <p style={{ marginTop: '1rem', opacity: 0.8 }}>
                                We don't do "cookie cutter." We diagnose your store's specific weak points—be it closing, negotiation, or culture—and build the fix.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginTop: '8rem', marginBottom: '4rem' }}>
                        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
                            <h2 className="section-title">Core Training Modules</h2>
                            <p style={{ fontSize: '1.1rem', opacity: 0.8 }}>
                                Our curriculum evolves with the market. Here are just a few of the high-impact modules your team will master.
                            </p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {[
                                "Create an Environment for Success",
                                "Success Habits & Consistency",
                                "Importance of CRM Excellence",
                                "AI in Modern Sales",
                                "The VIP Appointment Strategy",
                                "Increasing Appointment Show Rates",
                                "Lead To Appointment Mastery",
                                "Automotive BDC Training"
                            ].map((item, i) => (
                                <div key={i} style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }}></div>
                                    <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                        <Link to="/academy" className="btn-primary">Explore the Curriculum</Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default SalesTraining;
