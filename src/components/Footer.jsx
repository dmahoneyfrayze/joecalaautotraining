import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundColor: '#0F102A', color: 'white', padding: '80px 0 40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '60px' }}>
                    <div>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1.5rem' }}>JOE<span style={{ color: 'var(--color-accent)' }}>CALA</span></h2>
                        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
                            Transforming lives and businesses through purpose-driven leadership and world-class training.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <a href="https://www.facebook.com/josephacalajr" target="_blank" rel="noopener noreferrer" className="social-link"><Facebook size={20} /></a>
                            <a href="https://www.linkedin.com/company/jc-training-and-development/" target="_blank" rel="noopener noreferrer" className="social-link"><Linkedin size={20} /></a>
                            <a href="https://www.youtube.com/@josephacalajr" target="_blank" rel="noopener noreferrer" className="social-link"><Youtube size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Training & Resources</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.8 }}>
                            <li><Link to="/academy">JC Training Academy</Link></li>
                            <li><Link to="/mentorship">Sales Mentorship</Link></li>
                            <li><a href="https://jctrainingacademy.thinkific.com/users/sign_up" target="_blank" rel="noopener noreferrer">Student Login</a></li>
                            <li><Link to="/what-we-do">Methodology</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Experience</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.8 }}>
                            <li><Link to="/about">About Joe Cala</Link></li>
                            <li><span style={{ color: 'var(--color-accent)' }}>Formerly:</span> Auto Dealer University</li>
                            <li><span style={{ color: 'var(--color-accent)' }}>Specialty:</span> NA Auto Sales</li>
                            <li><Link to="/contact">Consultation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>North American Hub</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', opacity: 0.8 }}>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <MapPin size={18} style={{ color: 'var(--color-accent)' }} />
                                <span>Serving Canada & United States</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Mail size={18} style={{ color: 'var(--color-accent)' }} />
                                <span>josephacalajr@gmail.com</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Globe size={18} style={{ color: 'var(--color-accent)' }} />
                                <span>Nationwide Consulting</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ pt: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} JC Training & Development. All Rights Reserved.</p>
                </div>
            </div>
            <style>{`
        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }
        .social-link:hover {
          background-color: var(--color-accent);
          border-color: var(--color-accent);
          transform: translateY(-3px);
        }
        .footer ul li a:hover {
          color: var(--color-accent);
          padding-left: 5px;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
