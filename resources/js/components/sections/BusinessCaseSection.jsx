import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function BusinessCaseSection({ portfolios, locale }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';

    const dummyPortfolios = [
        {
            id: 1,
            slug: 'agriculture',
            category: 'AGRICULTURE',
            title: 'Seasonal crop working capital',
            akad: 'Salam',
            size: 'USD 1B',
            image: '/images/case-agriculture.png'
        },
        {
            id: 2,
            slug: 'trade-fmcg',
            category: 'TRADE & FMCG',
            title: 'Consumer goods trade financing',
            akad: 'Murabahah',
            size: 'USD 2B',
            image: '/images/case-trade.png'
        },
        {
            id: 3,
            slug: 'manufacturing',
            category: 'MANUFACTURING',
            title: 'Biodegradable packaging production',
            akad: "Istisna' Mawazi",
            size: 'USD 5B',
            image: '/images/case-manufacturing.png'
        }
    ];

    // If portfolios from database has data, map them or fall back to dummy
    const displayItems = portfolios && portfolios.length >= 3
        ? portfolios.slice(0, 3).map((item, idx) => {
            const imagePath = item.thumbnail ? `/storage/${item.thumbnail}` : dummyPortfolios[idx].image;
            return {
                id: item.id,
                slug: item.slug,
                category: item.sector ? item.sector.toUpperCase() : dummyPortfolios[idx].category,
                title: locale === 'id' && item.title_id ? item.title_id : item.title_en,
                akad: item.akad_type || dummyPortfolios[idx].akad,
                size: item.ticket_size || dummyPortfolios[idx].size,
                image: imagePath
            };
        })
        : dummyPortfolios;

    return (
        <section style={{ backgroundColor: '#F7F6F5', padding: '60px 0' }}>
            <div className="container">
                {/* Header */}
                <div className="flex-row-responsive" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                    <div>
                        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#6B6D0F', letterSpacing: '0.05em', display: 'block', marginBottom: '16px', textTransform: 'uppercase' }}>
                            BUSINESS CASE
                        </span>
                        <h2 className="text-display-s text-forest" style={{ margin: 0, fontSize: '40px', fontWeight: 300, lineHeight: 1.2 }}>
                            From Capital to <span style={{ fontStyle: 'italic', color: '#6B6D0F' }}>Tangible Impact</span>
                        </h2>
                    </div>
                    <Link href={`${prefix}/business-case`} className="btn" style={{
                        backgroundColor: '#FFFFFF',
                        color: '#131810',
                        border: '1px solid #D1D5DB',
                        borderRadius: '999px',
                        padding: '12px 24px',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                        transition: 'background-color 0.2s'
                    }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#F9FAFB'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#FFFFFF'}>
                        View all cases
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                </div>

                {/* Grid of Cards */}
                <div className="grid-3" style={{ gap: '24px' }}>
                    {displayItems.map((item) => (
                        <Link
                            key={item.id}
                            href={`${prefix}/business-case/${item.slug}`}
                            style={{
                                display: 'block',
                                position: 'relative',
                                height: '520px',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                textDecoration: 'none',
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundColor: '#131810',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {/* Gradient Overlay */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(19, 24, 16, 0.95) 0%, rgba(19, 24, 16, 0.5) 45%, rgba(19, 24, 16, 0) 100%)',
                                zIndex: 1
                            }}></div>

                            {/* Top Left Category Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '24px',
                                left: '24px',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '999px',
                                padding: '6px 16px',
                                color: '#131810',
                                fontSize: '11px',
                                fontWeight: 'bold',
                                letterSpacing: '0.05em',
                                zIndex: 2
                            }}>
                                {item.category}
                            </div>

                            {/* Top Right Circle Arrow */}
                            <div style={{
                                position: 'absolute',
                                top: '24px',
                                right: '24px',
                                width: '40px',
                                height: '40px',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#131810',
                                zIndex: 2
                            }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </div>

                            {/* Bottom Info */}
                            <div style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                width: '100%',
                                padding: '32px',
                                color: '#FFFFFF',
                                display: 'flex',
                                flexDirection: 'column',
                                zIndex: 2,
                                boxSizing: 'border-box'
                            }}>
                                <span style={{
                                    fontSize: '12px',
                                    fontStyle: 'italic',
                                    color: '#9DA65D',
                                    marginBottom: '6px',
                                    display: 'block'
                                }}>
                                    {item.akad}
                                </span>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    color: '#FFFFFF',
                                    margin: '0 0 24px 0',
                                    lineHeight: '1.3'
                                }}>
                                    {item.title}
                                </h3>

                                {/* Subtle Divider */}
                                <div style={{
                                    borderTop: '1px solid rgba(255,255,255,0.12)',
                                    paddingTop: '12px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>
                                        SIZE
                                    </span>
                                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#FFFFFF' }}>
                                        {item.size}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
