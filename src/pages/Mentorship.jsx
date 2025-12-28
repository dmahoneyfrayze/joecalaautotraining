import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FAQ from '../components/FAQ';
import VideoTestimonials from '../components/VideoTestimonials';

const Mentorship = () => {
    const faqItems = [
        {
            question: "How long is the mentorship commitment?",
            answer: "The mentorship is a month-to-month subscription. There are no long-term contracts; we believe the value speaks for itself."
        },
        {
            question: "When are the live coaching calls?",
            answer: "Live calls are typically held once a week. All sessions are recorded and uploaded to the private library for later viewing."
        },
        {
            question: "What makes this different from other sales coaching?",
            answer: "We focus on the human element. While we teach elite tactical skills, we also prioritize personal clarity, faith, and long-term fulfillment."
        }
    ];

    const benefits = [
        "Weekly LIVE Training Sessions",
        "Access to Private Community",
        "Sales Script Library",
        "Overcoming Objections Workshop",
        "Daily Accountability Tracking",
        "Faith-Based Leadership Principles"
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Sales Mentorship & Coaching | Joe Cala"
                description="Join an elite group of sales professionals. Weekly coaching, private scripts, and accountability to transform your career. Perfect for US and Canada dealership teams."
                keywords="sales mentorship, car sales coaching, dealership leadership, Joe Cala mentorship, automotive sales success"
            />
            {/* Mentorship Hero */}
            <section className="mentorship-hero" style={{ backgroundColor: '#0F102A', color: 'white', padding: '180px 0 150px', position: 'relative', overflow: 'hidden' }}>
                {/* Background Accent */}
                <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)', zIndex: 0, filter: 'blur(50px)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <Breadcrumbs />
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}
                        >
                            Sales Growth. Accountability. Momentum.
                        </motion.span>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: '1.2' }}
                        >
                            Free 30-Day <br /> Salesperson Mentorship
                        </motion.h1>
                        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9 }}>
                            Weekly coaching, real accountability, and a proven system to close more deals.
                        </p>

                        <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '500px', margin: '0 auto 3rem' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>First 30 Days FREE</div>
                            <div style={{ opacity: 0.8, marginBottom: '1.5rem' }}>Then only $27/month per salesperson. Cancel anytime.</div>
                            <a href="https://jctrainingacademy.thinkific.com/users/sign_up" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', display: 'block' }}>Start My Free 30 Days</a>
                            <div style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '1rem' }}>No contracts. Limited spots.</div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', opacity: 0.8, fontSize: '0.9rem' }}>
                            <span>✓ 25+ Years Experience</span>
                            <span>✓ Results, Not Theory</span>
                            <span>✓ Built for Busy Reps</span>
                        </div>
                    </div>
                </div>

                {/* Wave Separator */}
                <div className="wave-separator-bottom">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            <section id="details" className="mentorship-details" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="section-title">What You Get Every Month</h2>
                        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.8 }}>
                            A compact sales training system that improves skill, structure, and consistency.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Weekly Micro-Coaching", desc: "5–10 minutes every Monday. Topics: first impressions, trust, qualifying, presenting, follow‑up." },
                            { title: "LIVE 27‑Minute Zoom", desc: "Fast, focused coaching with Joe Cala once a month. Real Q&A. No fluff." },
                            { title: "Weekly Accountability", desc: "Simple weekly actions and a monthly reflection to lock in progress." },
                            { title: "Private Community", desc: "Ask questions, share wins, and get feedback from Joe and peers." },
                            { title: "Sales Resource Vault", desc: "Scripts, value sheets, quick guides, and PDFs. New resources monthly." },
                            { title: "Optional AI Sales Coach", desc: "Personalized tips from your CRM activity. Coming soon. +$17/month." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ padding: '2rem', backgroundColor: 'white', border: '1px solid #eee', borderRadius: '12px' }}
                            >
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{item.title}</h3>
                                <p style={{ opacity: 0.8 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Testimonials Section */}
            {/* Video Testimonials Section */}
            <VideoTestimonials style={{ backgroundColor: '#f9fafb' }} />

            <FAQ items={[
                { question: "Who is this for?", answer: "New reps who want structure and coaching. Experienced reps who want consistency. Managers who want low‑cost, high‑impact development." },
                { question: "How does the free 30 days work?", answer: "Enroll today, get full access for 30 days. After that, it’s $27/month per salesperson unless you cancel." },
                { question: "What happens in the 27‑minute Zoom mentorship?", answer: "Live coaching with Joe, focused on one core skill each month plus Q&A. You leave with one action to apply immediately." },
                { question: "Do I need to buy anything else?", answer: "No. Everything is included. The optional AI Sales Coach add‑on will be available soon." },
                { question: "What industries is this for?", answer: "Retail, automotive, real estate, SaaS, professional services, home services, and more." }
            ]} title="Frequently Asked Questions" />

            <section className="cta-banner" style={{ backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center', padding: '100px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Don’t wait another month to fix your pipeline.</h2>
                    <p style={{ marginBottom: '2.5rem', opacity: 0.8 }}>Get structure, coaching, and momentum. Free for 30 days.</p>
                    <a href="https://jctrainingacademy.thinkific.com/users/sign_up" target="_blank" rel="noopener noreferrer" className="btn-primary">Start My Free 30 Days</a>
                </div>
            </section>
        </motion.div>
    );
};

export default Mentorship;
