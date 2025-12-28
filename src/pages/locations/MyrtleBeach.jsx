import { motion } from 'framer-motion';
import { MapPin, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import { LocalBusinessSchema } from '../../components/SchemaMarkup';

const MyrtleBeach = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <LocalBusinessSchema
                name="JC Training & Development - HQ"
                address={{
                    "@type": "PostalAddress",
                    "streetAddress": "Myrtle Beach",
                    "addressLocality": "Myrtle Beach",
                    "addressRegion": "SC",
                    "postalCode": "29577",
                    "addressCountry": "US"
                }}
                telephone="+1-848-248-0730"
                image="https://josephacala.com/images/joe-portrait-1.jpg"
            />
            <SEO
                title="Sales Training Myrtle Beach & Charleston SC | Joe Cala"
                description="Expert sales consulting and leadership training based in Myrtle Beach. JC Training serves the Carolinas with on-site dealership workshops and keynote speaking."
                keywords="sales training Myrtle Beach, business coaching Charleston SC, dealership training South Carolina, Joe Cala"
            />

            <section style={{ backgroundColor: '#0F102A', color: 'white', padding: '160px 0 100px', textAlign: 'center' }}>
                <div className="container">
                    <Breadcrumbs />
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <span style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                            Headquarters
                        </span>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                            Myrtle Beach <span style={{ color: 'var(--color-accent)' }}>Leadership & Sales</span>
                        </h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9 }}>
                            Based in the heart of the Grand Strand, delivering world-class business consulting to local leaders and national organizations.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1576014131341-fe1486faf247?auto=format&fit=crop&q=80&w=800"
                                alt="Myrtle Beach Coastline"
                                style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                        <div>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Local Roots, Global Reach</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                                While Joe Cala travels across North America to train elite sales teams, Myrtle Beach is home. We offer exclusive access to local businesses seeking to elevate their sales processes and leadership culture.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <Users size={20} style={{ color: 'var(--color-accent)' }} />
                                    <span>In-Person Team Workshops</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <Calendar size={20} style={{ color: 'var(--color-accent)' }} />
                                    <span>Executive 1-on-1 Coaching</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <MapPin size={20} style={{ color: 'var(--color-accent)' }} />
                                    <span>On-Site Dealership Consulting</span>
                                </li>
                            </ul>
                            <Link to="/contact" className="btn-primary">Connect with Joe</Link>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default MyrtleBeach;
