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
                areaServed={["Myrtle Beach", "North Myrtle Beach", "Conway", "Charleston", "Wilmington"]}
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

            {/* Service Areas */}
            <section style={{ padding: '80px 0', backgroundColor: '#f9fafb' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="section-title">Serving The Grand Strand & Beyond</h2>
                        <p style={{ opacity: 0.8 }}>Available for on-site consulting throughout the Carolinas.</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                        {['Myrtle Beach', 'North Myrtle Beach', 'Conway', 'Surfside Beach', 'Murrells Inlet', 'Charleston, SC', 'Wilmington, NC', 'Florence, SC'].map(city => (
                            <span key={city} style={{ padding: '0.5rem 1.2rem', backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '50px', fontSize: '0.9rem', color: '#4b5563' }}>
                                {city}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Destination Training */}
            <section style={{ padding: '100px 0', backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>The Ultimate Training Retreat</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9, lineHeight: 1.8 }}>
                                Why not combine business growth with team bonding? Bring your executive team or top sales performers to Myrtle Beach for a <strong>Training Retreat</strong>.
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9, lineHeight: 1.8 }}>
                                We host strategy sessions in the morning, leaving your afternoons free to enjoy world-class golf, dining, and the beach. It’s the perfect environment to recharge and refocus.
                            </p>
                            <Link to="/contact" className="btn-secondary" style={{ color: 'white', borderColor: 'white' }}>Plan Your Retreat</Link>
                        </div>
                        <div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <img src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=400" alt="Golf Course" style={{ width: '100%', borderRadius: '12px', height: '200px', objectFit: 'cover' }} />
                                <img src="https://images.unsplash.com/photo-1543615682-16c873afda6d?auto=format&fit=crop&q=80&w=400" alt="Boardroom Strategy" style={{ width: '100%', borderRadius: '12px', height: '200px', objectFit: 'cover', marginTop: '2rem' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default MyrtleBeach;
