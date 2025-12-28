import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title="Blog - Sales Insights & Leadership | Joe Cala"
                description="Daily insights on automotive sales tactics, faith-based leadership, and high-performance mindset."
                image="/images/joe-portrait-1.jpg"
            />

            <section className="blog-hero" style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', padding: '160px 0 80px' }}>
                <div className="container">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        style={{ fontSize: '3.5rem', marginBottom: '1rem' }}
                    >
                        Sales & Leadership <span style={{ color: 'var(--color-accent)' }}>Insights</span>
                    </motion.h1>
                    <p style={{ maxWidth: '600px', fontSize: '1.2rem', opacity: 0.9 }}>
                        Tactical advice, mindset shifts, and spiritual principles to help you dominate your market and lead with purpose.
                    </p>
                </div>
            </section>

            <section className="blog-list" style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '3rem' }}>
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="blog-card"
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Link to={`/blog/${post.slug}`} style={{ overflow: 'hidden' }}>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        style={{ width: '100%', height: '240px', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </Link>
                                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        {post.category}
                                    </div>
                                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.3' }}>
                                        <Link to={`/blog/${post.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{post.title}</Link>
                                    </h2>
                                    <p style={{ opacity: 0.7, marginBottom: '2rem', fontSize: '1rem' }}>{post.excerpt}</p>

                                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', opacity: 0.6 }}>
                                            <Calendar size={14} />
                                            <span>{post.date}</span>
                                        </div>
                                        <Link to={`/blog/${post.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                                            Read More <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Blog;
