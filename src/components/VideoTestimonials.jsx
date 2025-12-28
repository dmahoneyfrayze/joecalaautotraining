import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import FadeIn from './FadeIn';

const videos = [
    {
        id: 'WwsvRD8uBnc',
        name: 'Mat Koenig',
        title: 'CEO, KonigCo',
        label: 'Speaking Session Review'
    },
    {
        id: 'pWhS8eYzB5w',
        name: 'Chris Speer',
        title: 'General Manager',
        label: 'Speaking Session Review'
    },
    {
        id: 'hjV_699gVOo',
        name: 'Mike Phillips',
        title: 'Lead Trainer',
        label: 'Speaking Session Review'
    },
    {
        id: 'OiB8WihQQ88',
        name: 'Dave Benson',
        title: 'Dealership Executive',
        label: 'Speaking Session Review'
    },
    {
        id: '3Td648dm_DE',
        name: 'Sean Dudley',
        title: 'Sales Professional',
        label: 'Speaking Session Review'
    },
    {
        id: '24JUU_zjuYs',
        name: 'Joshua Wright',
        title: 'Marketing Director',
        label: 'Speaking Session Review'
    },
    {
        id: 'AwKxshjjlOk',
        name: 'Laura & Rick Berman',
        title: 'Business Owners',
        label: 'Speaking Session Review'
    },
    {
        id: 'tv_4AQ2mh2k',
        name: 'Adriana Valencia',
        title: 'Automotive Specialist',
        label: 'Speaking Session Review'
    }
];

const VideoTestimonials = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <section className="video-testimonials" style={{ padding: '100px 0', backgroundColor: '#fff' }}>
            <div className="container">
                <FadeIn style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
                        In Their Own Words
                    </span>
                    <h2 className="section-title" style={{ color: 'var(--color-primary)' }}>Impact & Inspiration</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.8 }}>
                        See what industry leaders and professionals have to say about Joe Cala's transformative speaking sessions and training.
                    </p>
                </FadeIn>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {videos.map((video, index) => (
                        <FadeIn key={video.id} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="video-card"
                                style={{
                                    position: 'relative',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    aspectRatio: '16/9',
                                    backgroundColor: '#000'
                                }}
                                onClick={() => setSelectedVideo(video)}
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                    alt={`${video.name} Review`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, transition: 'opacity 0.3s' }}
                                    onMouseOver={(e) => e.target.style.opacity = 0.6}
                                    onMouseOut={(e) => e.target.style.opacity = 0.8}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: 'rgba(212, 175, 55, 0.9)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    boxShadow: '0 0 20px rgba(0,0,0,0.3)'
                                }}>
                                    <Play size={24} fill="currentColor" />
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    padding: '1rem',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                    color: 'white'
                                }}>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{video.name}</h4>
                                    <p style={{ fontSize: '0.85rem', opacity: 0.9, color: 'var(--color-accent)' }}>{video.label}</p>
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0,0,0,0.9)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                        onClick={() => setSelectedVideo(null)}
                    >
                        <div style={{ position: 'relative', width: '100%', maxWidth: '900px', aspectRatio: '16/9' }} onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={() => setSelectedVideo(null)}
                                style={{
                                    position: 'absolute',
                                    top: '-40px',
                                    right: 0,
                                    color: 'white',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '1rem'
                                }}
                            >
                                <span style={{ opacity: 0.8 }}>Close</span> <X size={24} />
                            </button>
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                                title={selectedVideo.name}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ borderRadius: '12px', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
                            ></iframe>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default VideoTestimonials;
