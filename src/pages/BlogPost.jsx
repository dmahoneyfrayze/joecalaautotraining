import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" />;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <SEO
                title={`${post.title} | Joe Cala`}
                description={post.excerpt}
            />

            <div className="blog-post-hero" style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', padding: '160px 0 80px' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <Breadcrumbs />
                        <Link to="/blog" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', fontWeight: 600, marginTop: '1rem', textDecoration: 'none' }}>
                            <ArrowLeft size={18} /> Back to Blog
                        </Link>
                    </div>

                    <header style={{ marginBottom: '0' }}>
                        <div style={{ color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
                            {post.category}
                        </div>
                        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: 'white' }}>
                            {post.title}
                        </h1>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', opacity: 0.8, color: 'rgba(255,255,255,0.8)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <User size={18} />
                                <span style={{ color: 'white' }}>{post.author}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={18} />
                                <span style={{ color: 'white' }}>{post.date}</span>
                            </div>
                        </div>
                    </header>
                </div>
            </div>

            <article style={{ paddingBottom: '100px', paddingTop: '60px' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    <div style={{ marginBottom: '3rem', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                        <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                    <div
                        className="blog-content"
                        style={{
                            fontSize: '1.2rem',
                            lineHeight: '1.8',
                            color: '#333'
                        }}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div style={{ margin: '4rem 0', padding: '3rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Ready to Master Your Sales Skills?</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto 2rem' }}>
                            Don't just read about success—build it. Join Joe Cala's exclusive mentorship program and get direct access to world-class sales training.
                        </p>
                        <Link
                            to="/mentorship"
                            className="btn-primary"
                            style={{
                                display: 'inline-block',
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem',
                                textDecoration: 'none',
                                backgroundColor: 'var(--color-accent)',
                                color: 'white',
                                borderRadius: '50px',
                                fontWeight: 700,
                                boxShadow: '0 10px 20px rgba(255, 62, 62, 0.3)'
                            }}
                        >
                            Start Your 30-Day Free Trial
                        </Link>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.6 }}>
                            Only $27/mo after trial. Cancel anytime.
                        </p>
                    </div>

                    <footer style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid #eee' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: '1px solid #ddd', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
                                    <Share2 size={16} /> Share
                                </button>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {/* Social Share Icons placeholder */}
                            </div>
                        </div>
                    </footer>
                </div>
            </article>

            <style>{`
        .blog-content h2, .blog-content h3, .blog-content h4 {
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-primary);
        }
        .blog-content p {
          margin-bottom: 1.5rem;
        }
        .blog-content ul, .blog-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
        }
        .blog-content strong {
          color: var(--color-primary);
        }
      `}</style>
        </motion.div>
    );
};

export default BlogPost;
