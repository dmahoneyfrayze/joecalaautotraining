import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (pathnames.length === 0) return null;

    return (
        <nav aria-label="Breadcrumb" className="breadcrumbs" style={{ padding: '2rem 0 1rem' }}>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontSize: '0.9rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.5rem 1rem',
                    borderRadius: '50px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: 'white'
                }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(255, 255, 255, 0.8)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}>
                        <Home size={16} />
                        <span>Home</span>
                    </Link>

                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                        return (
                            <div key={to} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                <ChevronRight size={14} style={{ opacity: 0.5 }} />
                                {last ? (
                                    <span style={{ fontWeight: 600, color: 'var(--color-accent)', textTransform: 'capitalize', letterSpacing: '0.5px' }}>
                                        {value.replace(/-/g, ' ')}
                                    </span>
                                ) : (
                                    <Link to={to} style={{ color: 'rgba(255, 255, 255, 0.8)', textTransform: 'capitalize', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}>
                                        {value.replace(/-/g, ' ')}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
