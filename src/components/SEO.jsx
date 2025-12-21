import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, canonical }) => {
    const location = useLocation();

    useEffect(() => {
        // Update Title
        const fullTitle = `${title} | Joe Cala - Sales Training & Leadership`;
        document.title = fullTitle;

        // Update Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description || 'Master auto sales and leadership with Joe Cala. Elite training for the US and Canada markets.');

        // Update Keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', keywords || 'auto sales training, dealership consulting Canada, US auto sales, sales mentorship, Joe Cala, Auto Dealer University');

        // Update Canonical
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.rel = 'canonical';
            document.head.appendChild(linkCanonical);
        }
        const siteUrl = window.location.origin;
        linkCanonical.setAttribute('href', canonical || `${siteUrl}${location.pathname}`);

        // Update Open Graph (OG) & Twitter tags
        const ogTags = [
            { property: 'og:title', content: fullTitle },
            { property: 'og:description', content: description },
            { property: 'og:image', content: 'https://josephacala.com/images/logo.png' },
            { property: 'og:url', content: canonical || `${siteUrl}${location.pathname}` },
            { property: 'og:type', content: 'website' },
            { property: 'twitter:card', content: 'summary_large_image' },
            { property: 'twitter:title', content: fullTitle },
            { property: 'twitter:description', content: description },
            { property: 'twitter:image', content: 'https://josephacala.com/images/logo.png' },
        ];

        ogTags.forEach(tag => {
            let element = document.querySelector(`meta[property="${tag.property}"]`);
            if (!element) {
                // Try searching by name for twitter tags if property search fails (common compatibility)
                element = document.querySelector(`meta[name="${tag.property}"]`);
            }
            if (!element) {
                element = document.createElement('meta');
                // Use 'name' for twitter cards, 'property' for OG
                if (tag.property.startsWith('twitter:')) {
                    element.setAttribute('name', tag.property);
                } else {
                    element.setAttribute('property', tag.property);
                }
                document.head.appendChild(element);
            }
            element.setAttribute('content', tag.content);
        });

        // Update JSON-LD
        const scriptId = 'json-ld-seo';
        let script = document.getElementById(scriptId);
        if (script) {
            script.remove();
        }

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

        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        script.text = JSON.stringify(jsonLd);
        document.head.appendChild(script);

    }, [title, description, keywords, canonical, location]);

    return null;
};

export default SEO;
