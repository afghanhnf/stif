import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const iconMap = {
    'shield': <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    'home': (
        <>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </>
    ),
    'trend-up': (
        <>
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
        </>
    ),
    'credit-card': (
        <>
            <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
        </>
    )
};

export default function ServicesSection({ services, locale }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';
    const [hoveredIdx, setHoveredIdx] = useState(null);

    // If services not passed or empty, provide defaults with slugs
    const displayServices = services && services.length > 0 ? services : [
        { id: 1, slug: 'shariah', name_en: 'Sharia Foundation', subtitle_en: 'Flexible capital solutions tailored to Islamic ethics.' },
        { id: 2, slug: 'trust-fund', name_en: 'Trust Fund', subtitle_en: 'Secure management of wealth aligned with Sharia principles.' },
        { id: 3, slug: 'investment', name_en: 'Investment', subtitle_en: 'Strategic guidance on M&A, restructuring, and expansion.' },
        { id: 4, slug: 'financing', name_en: 'Financing', subtitle_en: 'Direct investments in high-growth, ethical enterprises.' }
    ];

    const orderedServices = [...displayServices].sort((a, b) => {
        const orderA = a.order !== undefined && a.order !== null ? Number(a.order) : 999;
        const orderB = b.order !== undefined && b.order !== null ? Number(b.order) : 999;
        return orderA - orderB;
    });

    return (
        <section style={{ backgroundColor: '#F7F6F5', padding: '40px 0' }}>
            <div className="container">
                <div style={{
                    backgroundColor: '#EEF2EB',
                    borderRadius: '40px',
                    padding: 'clamp(32px, 5vw, 60px) clamp(20px, 5vw, 48px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.01)'
                }}>
                    {/* Header */}
                    <div className="flex-row-responsive" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                        <div>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                backgroundColor: '#232C1E',
                                padding: '6px 16px',
                                borderRadius: '999px',
                                marginBottom: '16px'
                            }}>
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#FFFFFF' }}>
                                    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
                                </svg>
                                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#FFFFFF', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                    {t('services_preview.badge')}
                                </span>
                            </div>
                            <h2 className="text-display-s text-forest" style={{ margin: 0, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 300, lineHeight: 1.2 }}>
                                {t('services_preview.headline')} <span style={{ fontStyle: 'italic', color: '#6B6D0F' }}>{t('services_preview.headline_italic')}</span>
                            </h2>
                        </div>
                        <Link href={`${prefix}/services`} className="btn" style={{
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
                            {t('services_preview.explore_all')}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </Link>
                    </div>

                    {/* Grid of Cards */}
                    <div className="grid-2" style={{ gap: '24px' }}>
                        {orderedServices.slice(0, 4).map((service, idx) => {
                            const isHovered = hoveredIdx === idx;
                            
                            const sNum = String(idx + 1).padStart(2, '0');
                            const sTitle = locale === 'id' && service.name_id ? service.name_id : service.name_en;
                            const sBadge = 'SERVICES'; // Or read from db if you want
                            const sDesc = locale === 'id' ? (service.description_id || service.subtitle_id) : (service.description_en || service.subtitle_en);
                            
                            // Map icon
                            let sIcon = <path d="M12 2L2 7l10 5 10-5-10-5z" />;
                            if (service.slug === 'shariah' || service.slug === 'sharia' || service.slug === 'sharia-foundation') sIcon = iconMap['shield'];
                            else if (service.slug === 'trust-fund') sIcon = iconMap['home'];
                            else if (service.slug === 'investment') sIcon = iconMap['trend-up'];
                            else if (service.slug === 'financing') sIcon = iconMap['credit-card'];

                            return (
                                <Link
                                    key={service.id}
                                    href={`${prefix}/services/${service.slug}`}
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                    style={{
                                        textDecoration: 'none',
                                        padding: 'clamp(20px, 5vw, 32px)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        backgroundColor: isHovered ? '#232C1E' : '#FFFFFF',
                                        borderRadius: '20px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.01)',
                                        transition: 'all 0.3s ease',
                                        height: '100%',
                                        boxSizing: 'border-box'
                                    }}
                                >
                                    {/* Icon & Number Row */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                        <div style={{
                                            width: '44px',
                                            height: '44px',
                                            backgroundColor: isHovered ? '#C4D19E' : '#232C1E',
                                            borderRadius: '12px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: isHovered ? '#232C1E' : '#FFFFFF',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {sIcon}
                                            </svg>
                                        </div>
                                        <span style={{
                                            fontSize: '13px',
                                            fontWeight: 'bold',
                                            color: isHovered ? 'rgba(255,255,255,0.4)' : '#6B6D0F',
                                            transition: 'color 0.3s ease'
                                        }}>
                                            {sNum}
                                        </span>
                                    </div>

                                    {/* Badge */}
                                    <div style={{
                                        display: 'inline-flex',
                                        padding: '4px 10px',
                                        borderRadius: '4px',
                                        backgroundColor: isHovered ? 'rgba(255,255,255,0.1)' : 'rgba(107, 109, 15, 0.08)',
                                        fontSize: '10px',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        marginBottom: '16px',
                                        alignSelf: 'flex-start',
                                        color: isHovered ? '#C4D19E' : '#6B6D0F',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        {sBadge}
                                    </div>

                                    {/* Title */}
                                    <h3 style={{
                                        fontSize: '22px',
                                        fontWeight: '600',
                                        color: isHovered ? '#FFFFFF' : '#232C1E',
                                        marginBottom: '12px',
                                        fontFamily: 'Josefin Sans',
                                        lineHeight: '1.3',
                                        transition: 'color 0.3s ease'
                                    }}>
                                        {sTitle}
                                    </h3>

                                    {/* Description */}
                                    <p style={{
                                        fontSize: '14px',
                                        lineHeight: '1.6',
                                        color: isHovered ? '#A3A8A0' : '#555555',
                                        marginBottom: '24px',
                                        marginTop: 0,
                                        transition: 'color 0.3s ease',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {sDesc}
                                    </p>

                                    {/* Link */}
                                    <div style={{
                                        color: isHovered ? '#C4D19E' : '#6B6D0F',
                                        fontWeight: 'bold',
                                        fontSize: '14px',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        marginTop: 'auto',
                                        transition: 'color 0.3s ease'
                                    }} className="hover-primary">
                                        {t('services_preview.learn_more')}
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
