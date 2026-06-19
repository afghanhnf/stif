import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function InsightSection({ articles, locale }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';

    const dummyArticles = [
        {
            id: 1,
            slug: 'macroeconomics-sharia-perspective',
            category: 'STRUCTURING',
            title: 'Why Musharakah Mutanaqisah beats conventional mortgage',
            date_str: 'May 12, 2026',
            read_time: '6 min read',
            image: '/images/article-buildings.png'
        },
        {
            id: 2,
            slug: 'impact-investing',
            category: 'MARKETS',
            title: 'Sukuk pipeline outlook: GCC issuances in H2 2026',
            date_str: 'May 04, 2026',
            read_time: '4 min read',
            image: '/images/article-spiral.png'
        },
        {
            id: 3,
            slug: 'private-equity-outlook',
            category: 'GOVERNANCE',
            title: 'Inside our Sharia board: a quarterly fatwa cycle',
            date_str: 'Apr 28, 2026',
            read_time: '8 min read',
            image: '/images/article-office.png'
        }
    ];

    const displayItems = articles && articles.length >= 3
        ? articles.slice(0, 3).map((item, idx) => {
            return {
                id: item.id,
                slug: item.slug,
                category: item.category ? item.category.toUpperCase() : dummyArticles[idx].category,
                title: locale === 'id' && item.title_id ? item.title_id : item.title_en,
                date_str: new Date(item.published_at).toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', {
                    year: 'numeric', month: 'long', day: 'numeric'
                }),
                read_time: item.reading_time ? `${item.reading_time} min read` : dummyArticles[idx].read_time,
                image: item.featured_image ? (item.featured_image.startsWith('/') ? item.featured_image : `/storage/${item.featured_image}`) : dummyArticles[idx].image
            };
        })
        : dummyArticles;

    return (
        <section style={{ backgroundColor: '#F7F6F5', padding: '60px 0' }}>
            <div className="container">
                {/* Header */}
                <div className="flex-row-responsive" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                    <div>
                        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#6B6D0F', letterSpacing: '0.05em', display: 'block', marginBottom: '16px', textTransform: 'uppercase' }}>
                            {t('insight_preview.badge')}
                        </span>
                        <h2 className="text-display-s text-forest" style={{ margin: 0, fontSize: '40px', fontWeight: 300, lineHeight: 1.2 }}>
                            {t('insight_preview.headline')} <span style={{ fontStyle: 'italic', color: '#6B6D0F' }}>{t('insight_preview.headline_italic')}</span>
                        </h2>
                    </div>
                    <Link href={`${prefix}/insight`} className="btn" style={{
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
                        {t('insight_preview.all_articles')}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid-3" style={{ gap: '24px' }}>
                    {displayItems.map((article) => (
                        <Link
                            key={article.id}
                            href={`${prefix}/insight/${article.slug}`}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: '#FFFFFF',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                textDecoration: 'none',
                                color: '#131810',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                                transition: 'transform 0.3s ease',
                                height: '100%',
                                boxSizing: 'border-box'
                            }}
                            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {/* Image Header */}
                            <div style={{
                                width: '100%',
                                height: '220px',
                                backgroundImage: `url(${article.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundColor: '#EEF2EB',
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '16px',
                                    left: '16px',
                                    backgroundColor: '#FFFFFF',
                                    color: '#131810',
                                    padding: '6px 14px',
                                    borderRadius: '999px',
                                    fontSize: '10px',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.05em',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                                }}>
                                    {article.category}
                                </div>
                            </div>

                            {/* Bottom Content */}
                            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1, boxSizing: 'border-box' }}>
                                <div style={{ fontSize: '12px', color: '#888888', marginBottom: '12px' }}>
                                    {article.date_str}  •  {article.read_time}
                                </div>
                                <h3 style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    color: '#131810',
                                    lineHeight: '1.4',
                                    margin: '0 0 20px 0',
                                    transition: 'color 0.2s'
                                }} onMouseOver={e => e.currentTarget.style.color = '#6B6D0F'} onMouseOut={e => e.currentTarget.style.color = '#131810'}>
                                    {article.title}
                                </h3>
                                <div style={{
                                    color: '#6B6D0F',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    marginTop: 'auto'
                                }}>
                                    {t('insight_preview.read_article')}
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
