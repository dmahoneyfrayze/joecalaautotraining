import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const PrivacyPolicy = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container"
            style={{ padding: '160px 2rem 80px' }}
        >
            <SEO
                title="Privacy Policy | JC Training & Development"
                description="Our privacy policy details how we handle and protect your data at JC Training & Development."
                keywords="privacy policy, data protection, JC Training"
                image="/images/logo.png"
            />
            <Breadcrumbs />
            <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
            <div style={{ lineHeight: '1.8', opacity: 0.8 }}>
                <p style={{ marginBottom: '1.5rem' }}>Last Updated: December 20, 2025</p>
                <h3 style={{ marginBottom: '1rem', color: 'black' }}>1. Introduction</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    At JC Training & Development, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
                <h3 style={{ marginBottom: '1rem', color: 'black' }}>2. Data We Collect</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Identity Data, Contact Data, Financial Data, and Transaction Data.
                </p>
                <h3 style={{ marginBottom: '1rem', color: 'black' }}>3. How We Use Your Data</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you, or where it is necessary for our legitimate interests.
                </p>
                <h3 style={{ marginBottom: '1rem', color: 'black' }}>4. Your Rights</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                    Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, or restriction of your personal data.
                </p>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicy;
