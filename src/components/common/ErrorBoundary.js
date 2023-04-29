import React, { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const handleError = () => {
            setHasError(true);
        };

        window.addEventListener('error', handleError);

        return () => {
            window.removeEventListener('error', handleError);
        };
    }, []);

    if (hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
    }

    return children;
}

export default React.memo(ErrorBoundary);
