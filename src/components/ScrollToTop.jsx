import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll the App Shell container
        document.getElementById('root')?.scrollTo(0, 0);
        // Fallback for standard scrolling
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
