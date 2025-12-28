import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, TrendingUp, Users, Target, BookOpen } from 'lucide-react';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import FadeIn from '../../components/FadeIn';

const DealershipGrowth = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Automotive Dealership Growth Strategies 2025 | Joe Cala"
                description="A comprehensive guide to scaling your car dealership. Learn how to fix broken sales processes, reduce turnover, and increase gross profit per unit."
                keywords="dealership growth strategies, automotive sales management, showroom traffic, F&I profit, bdc training"
                image="/images/sales-process.webp"
            />

            {/* Pillar Hero */}
            <section style={{ backgroundColor: '#0F102A', color: 'white', padding: '160px 0 100px', textAlign: 'center' }}>
                <div className="container">
                    <Breadcrumbs />
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <span style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                            Executive Guide
                        </span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                            The 4 Pillars of <span className="text-gradient-gold">Dealership Growth</span>
                        </h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', opacity: 0.9, lineHeight: '1.6' }}>
                            Growth isn't just about more leads. It's about better people, tighter processes, and ethical leadership. Here is the blueprint for sustainable scale.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                            The automotive industry is shifting. The old "churn and burn" model of sales floor management is dead. Modern buying habits, shrinking margins, and inventory challenges mean that <strong>efficiency and retention</strong> are now the primary drivers of net profit.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '4rem' }}>
                            To grow in 2025 and beyond, Dealer Principals and GMs must master four key areas.
                        </p>
                    </div>

                    {/* Pillar 1: Recruitment & Culture */}
                    <FadeIn>
                        <div id="culture" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ padding: '1rem', backgroundColor: 'var(--color-accent)', color: '#0F102A', borderRadius: '50%', fontSize: '1.5rem', fontWeight: 700 }}>1</div>
                                    <h2 style={{ fontSize: '2rem' }}>Recruitment & Culture</h2>
                                </div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                    You cannot build a high-performance dealership on a foundation of high turnover. The cost of replacing a salesperson is estimated at $15,000+, not including lost sales.
                                </p>
                                <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={20} color="var(--color-accent)" /> Stop hiring for "experience," hire for character.</li>
                                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={20} color="var(--color-accent)" /> Create a clear career path from BDC/Sales to F&I or Management.</li>
                                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={20} color="var(--color-accent)" /> Implement "Sales Manager Moulding" to ensure leaders are actually leading.</li>
                                </ul>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                                    <Link to="/corporate" className="btn-secondary" style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>Fix Your Culture</Link>
                                    <Link to="/blog/high-turnover-dealership-culture-fix" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--color-primary)', fontWeight: 600 }}>
                                        <BookOpen size={18} /> Read the Article
                                    </Link>
                                </div>
                            </div>
                            <div style={{
                                backgroundColor: '#f9fafb',
                                padding: '1.5rem',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                            }}>
                                <img
                                    src="/images/team-collaboration.webp"
                                    alt="Team Collaboration and Culture"
                                    style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                                />
                            </div>
                        </div>
                    </FadeIn>

                    {/* Pillar 2: Process Consistency */}
                    <FadeIn>
                        <div id="process" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                            <div style={{ order: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ padding: '1rem', backgroundColor: 'var(--color-accent)', color: '#0F102A', borderRadius: '50%', fontSize: '1.5rem', fontWeight: 700 }}>2</div>
                                    <h2 style={{ fontSize: '2rem' }}>Process Consistency</h2>
                                </div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                    Talent wins games, but process wins championships. If your top guy has a different road-to-the-sale than your green pea, you don't have a dealership—you have a collection of independent contractors.
                                </p>
                                <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={20} color="var(--color-accent)" /> Standardize the Greeting, Needs Analysis, and Test Drive.</li>
                                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={20} color="var(--color-accent)" /> 100% turnover to Management (TO) on every deal.</li>
                                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={20} color="var(--color-accent)" /> Daily 20-minute training sessions, non-negotiable.</li>
                                </ul>
                                <Link to="/training/automotive-sales" className="btn-secondary" style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>View The System</Link>
                            </div>
                            <div style={{
                                backgroundColor: '#f9fafb',
                                padding: '1.5rem',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                order: 0,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                            }}>
                                <img
                                    src="/images/sales-process.webp"
                                    alt="Automotive Sales Process"
                                    style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                                />
                            </div>
                        </div>
                    </FadeIn>

                    {/* Pillar 3: Lead Management (Speed + Quality) */}
                    <FadeIn>
                        <div id="leads" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ padding: '1rem', backgroundColor: 'var(--color-accent)', color: '#0F102A', borderRadius: '50%', fontSize: '1.5rem', fontWeight: 700 }}>3</div>
                                    <h2 style={{ fontSize: '2rem' }}>Lead Maximization</h2>
                                </div>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                    Most dealerships don't need more leads; they need to stop burning the ones they have. Bad follow-up is expensive.
                                </p>
                                <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={20} color="var(--color-accent)" /> Speed-to-lead must be under 5 minutes.</li>
                                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={20} color="var(--color-accent)" /> Use video follow-up to humanize the interaction.</li>
                                    <li style={{ display: 'flex', gap: '10px' }}><CheckCircle size={20} color="var(--color-accent)" /> Leverage tools like <strong>Frayze</strong> to automate initial engagement.</li>
                                </ul>
                                <Link to="/blog/frayze-growth-engine-vs-crm" className="btn-secondary" style={{ color: 'var(--color-primary)', borderColor: 'var(--color-primary)' }}>Automate Follow-Up</Link>
                            </div>
                            <div style={{
                                backgroundColor: '#f9fafb',
                                padding: '1.5rem',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                            }}>
                                <img
                                    src="/images/crm-planning.webp"
                                    alt="CRM Planning and Lead Management"
                                    style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                                />
                            </div>
                        </div>
                    </FadeIn>

                    {/* CTA Section */}
                    <div style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '4rem', borderRadius: '24px', textAlign: 'center', marginTop: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Install This System?</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9 }}>
                            We don't just teach this theory. We fly to your store and install it.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Book a Strategy Call</Link>
                            <Link to="/academy" className="btn-secondary" style={{ color: 'white', borderColor: 'white' }}>View Training Modules</Link>
                        </div>
                    </div>

                </div>
            </section>
        </motion.div>
    );
};

export default DealershipGrowth;
