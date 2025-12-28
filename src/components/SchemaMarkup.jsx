import { Helmet } from 'react-helmet-async';

const SchemaMarkup = ({ schema }) => {
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

// ... existing imports
export const ProductSchema = ({ name, description, price, currency = 'USD' }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": name,
        "description": description,
        "image": "https://josephacala.com/images/mentorship-cover.jpg",
        "offers": {
            "@type": "Offer",
            "price": price,
            "priceCurrency": currency,
            "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "24"
        }
    };
    return <SchemaMarkup schema={schema} />;
};

export const OrganizationSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "JC Training & Development",
        "url": "https://josephacala.com",
        "logo": "https://josephacala.com/images/logo.png", // Assuming logo path, update if needed
        "sameAs": [
            "https://www.linkedin.com/in/joseph-cala-jr/",
            "https://www.instagram.com/josephacalajr/",
            // Add other social profiles here
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-848-248-0730",
            "contactType": "sales",
            "areaServed": ["US", "CA"],
            "availableLanguage": ["English"]
        }
    };
    return <SchemaMarkup schema={schema} />;
};

export const PersonSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Joe Cala",
        "jobTitle": "High-Ticket Sales Trainer & Founder",
        "worksFor": {
            "@type": "Organization",
            "name": "JC Training & Development"
        },
        "url": "https://josephacala.com",
        "image": "https://josephacala.com/images/joe-portrait-1.jpg",
        "sameAs": [
            "https://www.linkedin.com/in/joseph-cala-jr/",
            "https://www.instagram.com/josephacalajr/"
        ],
        "description": "Joe Cala is a world-class sales trainer specializing in automotive, real estate, and high-ticket sales leadership."
    };
    return <SchemaMarkup schema={schema} />;
};

export const CourseSchema = ({ course }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": course.title,
        "description": course.description,
        "provider": {
            "@type": "Organization",
            "name": "JC Training & Development",
            "sameAs": "https://josephacala.com"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": course.price.replace(/[^0-9.]/g, ''), // Naive cleanup for schema
            "category": course.category
        }
    };
    return <SchemaMarkup schema={schema} />;
};

export const LocalBusinessSchema = ({ name, address, telephone, image, areaServed }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": name,
        "image": image,
        "telephone": telephone,
        "address": address,
        "priceRange": "$$$",
        "url": "https://josephacala.com",
        ...(areaServed && { "areaServed": areaServed })
    };
    return <SchemaMarkup schema={schema} />;
};

export default SchemaMarkup;
