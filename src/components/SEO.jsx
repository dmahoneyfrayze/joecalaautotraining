import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, canonical, image }) => {
    const location = useLocation();

    // Construct full title
    const fullTitle = `${title} | Joe Cala - Sales Training & Leadership`;

    // Construct image path
    let imagePath = image || '/images/logo.png';
    if (imagePath.startsWith('/')) {
        imagePath = `https://josephacala.com${imagePath}`;
    }
    const socialImage = imagePath;

    // Construct Canonical URL
    const siteUrl = window.location.origin;
    let canonicalPath = canonical || `${siteUrl}${location.pathname}`;
    if (!canonicalPath.endsWith('/')) {
        canonicalPath += '/';
    }

    // Default Schema
    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "Consultant",
        "name": "Joe Cala - JC Training & Development",
        "image": "https://josephacala.com/images/logo.png",
        "@id": "https://josephacala.com/#organization",
        "url": "https://josephacala.com",
        "telephone": "+1 848-248-0730",
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Myrtle Beach",
                "addressRegion": "SC",
                "postalCode": "29577",
                "addressCountry": "US"
            },
            {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "addressCountry": "CA"
            }
        ],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.6891",
            "longitude": "-78.8867"
        },
        "sameAs": [
            "https://www.linkedin.com/in/josephacala/",
            "https://www.facebook.com/josephacala",
            "https://www.youtube.com/@JosephCala-SalesLeadership",
            "https://jctrainingacademy.thinkific.com/"
        ],
        "priceRange": "$$$"
    };

    // Course Schema conditional logic
    const jsonLd = {
        "@context": "https://schema.org",
        ...(title.includes("Academy") ? {
            "@type": "Course",
            "name": "JC Training Academy",
            "description": description,
            "provider": {
                "@type": "Person",
                "name": "Joe Cala"
            }
        } : defaultSchema)
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || 'Master auto sales and leadership with Joe Cala. Elite training for the US and Canada markets.'} />
            <meta name="keywords" content={keywords || 'auto sales training, dealership consulting Canada, US auto sales, sales mentorship, Joe Cala'} />
            <link rel="canonical" href={canonicalPath} />

            {/* Facebook / Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical || `${siteUrl}${location.pathname}`} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={socialImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={socialImage} />

            {/* JSON-LD Schema */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};

export default SEO;
