import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (pathnames.length === 0) return null;

    return (
        <nav aria-label="Breadcrumb" className="breadcrumbs" style={{ padding: '1rem 0', marginBottom: '2rem' }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', opacity: 0.7 }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'inherit' }}>
                    <Home size={14} />
                    <span>Home</span>
                </Link>

                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return (
                        <div key={to} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <ChevronRight size={14} />
                            {last ? (
                                <span style={{ fontWeight: 600, color: 'var(--color-accent)', textTransform: 'capitalize' }}>
                                    {value.replace(/-/g, ' ')}
                                </span>
                            ) : (
                                <Link to={to} style={{ color: 'inherit', textTransform: 'capitalize' }}>
                                    {value.replace(/-/g, ' ')}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </nav>
    );
};

export default Breadcrumbs;
