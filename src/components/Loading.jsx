import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', width: '100%' }}>
            <motion.div
                style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    border: '4px solid #e2e8f0',
                    borderTopColor: '#D4AF37'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export default Loading;
