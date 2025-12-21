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

        // Update Open Graph (OG) tags
        const ogTags = [
            { property: 'og:title', content: fullTitle },
            { property: 'og:description', content: description },
            { property: 'og:url', content: canonical || `${siteUrl}${location.pathname}` },
            { property: 'og:type', content: 'website' },
        ];

        ogTags.forEach(tag => {
            let element = document.querySelector(`meta[property="${tag.property}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('property', tag.property);
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
            "@type": "ProfessionalService",
            "name": "Joe Cala - JC Training & Development",
            "image": "https://josephacala.com/logo.png",
            "@id": "",
            "url": "https://josephacala.com",
            "telephone": "",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "addressCountry": "CA"
            },
            "sameAs": [
                "https://www.linkedin.com/in/josephacala/",
                "https://www.facebook.com/josephacala"
            ]
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
