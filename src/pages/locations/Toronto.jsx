import { motion } from 'framer-motion';
import { MapPin, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import { LocalBusinessSchema } from '../../components/SchemaMarkup';

const Toronto = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <LocalBusinessSchema
                name="JC Training & Development - Canada"
                address={{
                    "@type": "PostalAddress",
                    "streetAddress": "Greater Toronto Area",
                    "addressLocality": "Toronto",
                    "addressRegion": "ON",
                    "addressCountry": "CA"
                }}
                telephone="+1-848-248-0730"
                image="https://josephacala.com/images/joe-portrait-1.jpg"
            />
            <SEO
                title="Automotive Sales Training Toronto & GTA | Joe Cala"
                description="Canada's premier automotive sales training. Trusted by Needacar.ca and Toronto Auto Group. On-site consulting for dealers in Toronto, Mississauga, and across Ontario."
                keywords="automotive sales training Toronto, car sales coaching GTA, Toronto dealership consulting, Ontario sales trainer"
            />

            <section style={{ backgroundColor: '#0F102A', color: 'white', padding: '160px 0 100px', textAlign: 'center' }}>
                <div className="container">
                    <Breadcrumbs />
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <span style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                            Serving The Greater Toronto Area
                        </span>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                            Toronto's Premier <span style={{ color: 'var(--color-accent)' }}>Automotive Sales Training</span>
                        </h1>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.9 }}>
                            From the showroom floor to the finance office, we help Canadian dealers build high-performance teams that hold gross and retain customers.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Trusted by Toronto's Leaders</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                                The Toronto market is competitive. To win, you need more than just "old school" tactics. You need a process that builds trust and authority.
                            </p>
                            <div style={{ padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '12px', borderLeft: '4px solid var(--color-primary)' }}>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', color: '#fbbf24' }}>
                                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                                </div>
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                    "Joe has worked extensively with us at <strong>Toronto Auto Group</strong> and <strong>Needacar</strong>. His training isn't just theory; it's practical, actionable, and it drives real numbers on the board."
                                </p>
                                <div style={{ fontWeight: 700 }}>— Leadership Team, Toronto Auto Group</div>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                                alt="Toronto Skyline and Dealership"
                                style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: '#f5f7fa', padding: '100px 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Why Canadian Dealers Choose JC Training</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                            <MapPin size={40} style={{ color: 'var(--color-accent)', marginBottom: '1rem' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Local Market Expertise</h3>
                            <p>We understand the nuances of the Canadian buyer and the specific compliance (OMVIC) landscape.</p>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                            <CheckCircle size={40} style={{ color: 'var(--color-accent)', marginBottom: '1rem' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Full Stack Training</h3>
                            <p>From BDC and internet leads to desking and F&I, we cover the entire road to the sale.</p>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                            <ArrowRight size={40} style={{ color: 'var(--color-accent)', marginBottom: '1rem' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Hybrid Delivery</h3>
                            <p>On-site workshops in the GTA combined with our 24/7 digital academy for continuous reinforcement.</p>
                        </div>
                    </div>


                    <div style={{ margin: '5rem auto 0', maxWidth: '800px', textAlign: 'left' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Toronto Sales Training FAQs</h2>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Is your training OMVIC aligned?</h3>
                            <p style={{ opacity: 0.8 }}>Yes. We understand the specific regulatory environment in Ontario. All our scripts and closing techniques are designed to be fully compliant with OMVIC's code of ethics and all-in pricing regulations, protecting your dealer license while maximizing gross.</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Do you service dealerships outside the GTA?</h3>
                            <p style={{ opacity: 0.8 }}>Absolutely. We actively support dealer groups across the Golden Horseshoe, including Mississauga, Oakville, Burlington, Brampton, Vaughan, and Oshawa. We also have clients in Ottawa and London.</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Can we claim the Canada-Ontario Job Grant (COJG)?</h3>
                            <p style={{ opacity: 0.8 }}>Many of our corporate training workshops qualify for the COJG, which can cover up to 83% of your training costs. We can provide the necessary curriculum documentation to assist your controller with the application.</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '5rem' }}>
                        <Link to="/contact" className="btn-primary">Schedule a Consultation</Link>
                    </div>
                </div>
            </section>
        </motion.div >
    );
};

export default Toronto;
