import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ReviewWidget from '../components/ReviewWidget';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Contact Joe Cala | Book Your Sales Training Discovery Call"
                description="Ready to transform your sales results? Contact JC Training & Development for mentorship, corporate workshops, or speaking engagements. Based in Myrtle Beach & Toronto."
            />
            <section className="contact-hero" style={{ padding: '160px 0 60px', backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Get In Touch</h1>
                    <p style={{ opacity: 0.8, fontSize: '1.2rem' }}>Ready to transform your dealership or career? Let's start the conversation.</p>
                </div>
            </section>

            <section className="contact-content">
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
                        {/* Contact Info */}
                        <div style={{ flex: '1 1 300px' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Contact Information</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(26, 27, 65, 0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.2rem' }}>Email Us</h4>
                                        <p style={{ opacity: 0.7 }}>josephacalajr@gmail.com</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(26, 27, 65, 0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.2rem' }}>Call Us</h4>
                                        <p style={{ opacity: 0.7 }}>+1 848-248-0730</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(26, 27, 65, 0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.2rem' }}>Location</h4>
                                        <p style={{ opacity: 0.7, marginBottom: '0.2rem' }}><strong>Myrtle Beach, SC</strong> (HQ)</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '12px', borderLeft: '4px solid var(--color-accent)' }}>
                                <h4 style={{ marginBottom: '1rem' }}>Book a Consultation</h4>
                                <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', opacity: 0.8 }}>Prefer a scheduled call? Use our booking calendar to find a time that works for you.</p>
                                <a href="#" className="btn-secondary" style={{ display: 'inline-block', textAlign: 'center' }}>Schedule Discovery Call</a>
                            </div>

                            <ReviewWidget />
                        </div>

                        {/* Contact Form */}
                        <div style={{ flex: '1 1 450px' }}>
                            <div className="glass" style={{ padding: '3rem', borderRadius: '15px', border: '1px solid #eee', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Send a Message</h3>
                                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div className="form-group">
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Full Name</label>
                                            <input type="text" placeholder="John Doe" style={inputStyle} />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Email Address</label>
                                            <input type="email" placeholder="john@example.com" style={inputStyle} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Subject</label>
                                        <select style={inputStyle}>
                                            <option>Automotive Sales Training</option>
                                            <option>Mentorship Program</option>
                                            <option>Faith-Based Coaching</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>Message</label>
                                        <textarea placeholder="How can we help you?" style={{ ...inputStyle, height: '150px', resize: 'none' }}></textarea>
                                    </div>
                                    <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                        Send Message <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease'
};

export default Contact;
