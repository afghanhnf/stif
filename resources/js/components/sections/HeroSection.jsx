import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@inertiajs/react';

export default function HeroSection({ locale, data }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';

    const heroes = Array.isArray(data) ? data : (data ? [data] : []);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (heroes.length <= 1) return;
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % heroes.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroes.length]);

    if (heroes.length === 0) return null;

    const currentHero = heroes[activeIndex];

    const badge = currentHero?.[`badge_${locale}`] || 'SHARIA PRIVATE EQUITY';
    const title = currentHero?.[`title_${locale}`] || 'Prosper with Purpose';
    const description1 = currentHero?.[`description_1_${locale}`] || 'Discover the power of Sharia-Compliant equity. Guided by a strict Sharia fiduciary structure, we manage every fund with the utmost duty of care.';
    const description2 = currentHero?.[`description_2_${locale}`] || 'We reject excessive uncertainty and debt-driven models, opting instead for a rock-solid, profit-sharing partnership where your capital generates sustainable growth and more importantly social impact.';
    const button1Text = currentHero?.[`button_1_text_${locale}`] || 'Pitch a project';
    const button1Url = currentHero?.button_1_url || '/contact';
    const button2Text = currentHero?.[`button_2_text_${locale}`] || 'Business Case';
    const button2Url = currentHero?.button_2_url || '/business-case';
    const verseArabic = currentHero?.verse_arabic || 'اتَّقُوا اللَّهَ وَأَجْمِلُوا فِي الطَّلَبِ';
    const verseTranslation = currentHero?.[`verse_translation_${locale}`] || '"Be mindful of Allah, and be moderate in seeking a living."';
    const image = currentHero?.image ? `/storage/${currentHero.image}` : '/images/hero-building.jpg';

    return (
        <section style={{ backgroundColor: '#F7F6F5', padding: '40px 0', overflow: 'hidden' }}>
            <div className="container">
                <style>{`
                    @keyframes heroFadeIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .hero-slide {
                        animation: heroFadeIn 0.5s ease-out forwards;
                    }
                `}</style>
                <div key={activeIndex} className="grid-hero hero-slide" style={{ gap: '24px', alignItems: 'stretch' }}>
                    {/* Left Content Card */}
                    <div style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '32px',
                        padding: 'clamp(24px, 6vw, 48px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '100%',
                        boxSizing: 'border-box'
                    }}>
                        {/* Badge */}
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            backgroundColor: 'rgba(107, 109, 15, 0.08)',
                            padding: '6px 16px',
                            borderRadius: '999px',
                            marginBottom: '24px'
                        }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#6B6D0F' }}>
                                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
                            </svg>
                            <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#6B6D0F', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                {badge}
                            </span>
                        </div>

                        <h1 className="text-display-xl text-forest" style={{ marginBottom: '24px', fontWeight: 300, lineHeight: 1.15 }}>
                            {title}
                        </h1>

                        <p className="text-body-lg text-neutral-600" style={{ marginBottom: '20px', fontSize: '15px', lineHeight: 1.6, color: '#555555' }}>
                            {description1}
                        </p>

                        <p className="text-body-lg text-neutral-600" style={{ marginBottom: '32px', fontSize: '15px', lineHeight: 1.6, color: '#555555' }}>
                            {description2}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                            <Link href={`${prefix}${button1Url}`} className="btn" style={{
                                backgroundColor: '#4F5331',
                                color: '#FFFFFF',
                                borderRadius: '999px',
                                padding: '14px 28px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                textDecoration: 'none',
                                transition: 'background-color 0.2s'
                            }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#3C4025'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#4F5331'}>
                                {button1Text}
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </Link>
                            <Link href={`${prefix}${button2Url}`} className="btn" style={{
                                backgroundColor: '#F1EFEC',
                                color: '#4F5331',
                                borderRadius: '999px',
                                padding: '14px 28px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                transition: 'background-color 0.2s'
                            }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#E5E2DE'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#F1EFEC'}>
                                {button2Text}
                            </Link>
                        </div>
                    </div>

                    {/* Right Content / Image Container */}
                    <div style={{ position: 'relative', height: '100%', minHeight: 'min(550px, 60vh)' }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '32px',
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                        }}></div>

                        {/* Overlay Verse */}
                        <div style={{
                            position: 'absolute',
                            top: 'clamp(16px, 4vw, 24px)',
                            right: 'clamp(16px, 4vw, 24px)',
                            backgroundColor: 'rgba(79, 83, 49, 0.75)',
                            backdropFilter: 'blur(10px)',
                            padding: '16px 24px',
                            borderRadius: '16px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            maxWidth: '320px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                <p style={{
                                    fontFamily: 'Amiri, serif',
                                    fontSize: '20px',
                                    color: '#FFFFFF',
                                    lineHeight: '1.4',
                                    margin: 0,
                                    direction: 'rtl',
                                    textAlign: 'center',
                                    letterSpacing: 'normal'
                                }}>
                                    {verseArabic}
                                </p>
                                <p style={{
                                    fontSize: '11px',
                                    color: '#F1EFEC',
                                    fontStyle: 'italic',
                                    lineHeight: '1.4',
                                    margin: 0,
                                    textAlign: 'center'
                                }}>
                                    {verseTranslation}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider Controls */}
                {heroes.length > 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
                        {heroes.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                style={{
                                    width: idx === activeIndex ? '24px' : '8px',
                                    height: '8px',
                                    borderRadius: '4px',
                                    backgroundColor: idx === activeIndex ? '#6B6D0F' : 'rgba(107, 109, 15, 0.2)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    padding: 0
                                }}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}
