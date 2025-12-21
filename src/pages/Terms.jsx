import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const Terms = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container"
            style={{ padding: '160px 2rem 80px' }}
        >
            <SEO
                title="Terms & Conditions | JC Training & Development"
                description="Our specific terms and conditions for using the JC Training & Development website and services."
                keywords="terms and conditions, legal, JC Training"
            />
            <Breadcrumbs />
            <h1 style={{ marginBottom: '2rem' }}>Terms & Conditions</h1>
            <div style={{ lineHeight: '1.8', opacity: 0.8 }}>
                <p style={{ marginBottom: '1.5rem' }}>Last Updated: December 20, 2025</p>

                <h3 style={{ marginBottom: '1rem', color: 'black' }}>1. Introduction</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    Welcome to JC Training & Development. These terms and conditions outline the rules and regulations for the use of our company's website.
                    By accessing this website we assume you accept these terms and conditions. Do not continue to use JC Training & Development if you do not agree to take all of the terms and conditions stated on this page.
                </p>

                <h3 style={{ marginBottom: '1rem', color: 'black' }}>2. Use License</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    Permission is granted to temporarily download one copy of the materials (information or software) on JC Training & Development's website for personal, non-commercial transitory viewing only.
                    This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul style={{ marginBottom: '1.5rem', listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li>Modify or copy the materials;</li>
                    <li>Use the materials for any commercial purpose or for any public display;</li>
                    <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
                    <li>Remove any copyright or other proprietary notations from the materials; or</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>

                <h3 style={{ marginBottom: '1rem', color: 'black' }}>3. Disclaimer</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    The materials on JC Training & Development's website are provided on an 'as is' basis. JC Training & Development makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h3 style={{ marginBottom: '1rem', color: 'black' }}>4. Limitations</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    In no event shall JC Training & Development or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on JC Training & Development's website.
                </p>

                <h3 style={{ marginBottom: '1rem', color: 'black' }}>5. Governing Law</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    These terms and conditions are governed by and construed in accordance with the laws of South Carolina and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
            </div>
        </motion.div>
    );
};

export default Terms;
