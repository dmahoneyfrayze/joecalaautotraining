import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '50vh', width: '100%' }}>
            <div style={{ position: 'relative' }}>
                <motion.div
                    style={{
                        width: '5rem',
                        height: '5rem',
                        borderRadius: '50%',
                        border: '2px solid rgba(212, 175, 55, 0.3)',
                        borderTopColor: '#D4AF37'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    animation: 'pulse-gold 2s infinite'
                }}></div>
            </div>
        </div>
    );
};

export default Loading;
