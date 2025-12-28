import { useEffect } from 'react';

const ReviewWidget = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            const script = document.createElement('script');
            script.src = "https://reputationhub.site/reputation/assets/review-widget.js";
            script.async = true;
            document.body.appendChild(script);

            return () => {
                if (document.body.contains(script)) {
                    document.body.removeChild(script);
                }
            }
        }, 3000); // Defer loading by 3 seconds to unblock initial render

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="review-widget-container" style={{ width: '100%', marginTop: '2rem' }}>
            <iframe
                className='lc_reviews_widget'
                src='https://reputationhub.site/reputation/widgets/review_widget/f6pWH5k6mL7SlsUHrfvh'
                frameBorder='0'
                scrolling='no'
                title="Customer Reviews"
                style={{ minWidth: '100%', width: '100%', border: 'none', overflow: 'hidden', minHeight: '400px' }} // Added minHeight to reduce shift
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default ReviewWidget;
