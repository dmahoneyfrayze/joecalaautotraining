import { ShieldCheck, TrendingUp, Users, Award, Zap, BookOpen } from 'lucide-react';
import FadeIn from './FadeIn';

const TrustStrip = ({ theme = 'light' }) => {
    const isDark = theme === 'dark';
    const textColor = isDark ? 'white' : 'var(--color-primary)';

    const items = [
        { icon: <ShieldCheck size={24} />, text: "Ethical Sales Process" },
        { icon: <TrendingUp size={24} />, text: "Data-Driven Results" },
        { icon: <Users size={24} />, text: "Weekly Group Training" },
        { icon: <BookOpen size={24} />, text: "500+ Assets & Plays" },
        { icon: <Zap size={24} />, text: "Modern CRM Mastery" },
    ];

    return (
        <section style={{
            padding: '40px 0',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#fff'
        }}>
            <div className="container">
                <FadeIn>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        gap: '2rem',
                        alignItems: 'center'
                    }}>
                        {items.map((item, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                opacity: 0.8,
                                color: textColor
                            }}>
                                <div style={{ color: 'var(--color-accent)' }}>{item.icon}</div>
                                <span style={{ fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default TrustStrip;
