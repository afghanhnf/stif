import { useEffect, useRef, useState } from 'react';

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(domRef.current);
                }
            });
        }, { threshold: 0.1 });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    let transform = 'translateY(30px)';
    if (direction === 'down') transform = 'translateY(-30px)';
    if (direction === 'left') transform = 'translateX(30px)';
    if (direction === 'right') transform = 'translateX(-30px)';
    if (direction === 'none') transform = 'none';

    return (
        <div
            ref={domRef}
            className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
            style={{
                transitionDelay: `${delay}ms`,
                '--transform-start': transform
            }}
        >
            {children}
        </div>
    );
}
