import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import SeoHead from '@/components/seo/SeoHead';
import Breadcrumb from '@/components/seo/Breadcrumb';
import FadeIn from '@/components/animations/FadeIn';

const ArrowLeftIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
    </svg>
);

const ArrowUpRightIcon = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);

const copy = {
    en: {
        back: 'All Business Cases',
        overview: 'OVERVIEW',
        mechanism: 'MECHANISM',
        ticketSize: 'Ticket size',
        instrument: 'Instrument',
        tenor: 'Tenor',
        expectedReturn: 'Expected return',
        moreLabel: 'MORE BUSINESS CASES',
        moreTitle: 'More from STIF Capital',
        ctaTitle: 'Want to discuss this with our team?',
        ctaText: 'Send us a note - our principals reply within 48 hours.',
        ctaButton: 'Contact us',
        active: 'ACTIVE'
    },
    id: {
        back: 'Semua Kasus Bisnis',
        overview: 'RINGKASAN',
        mechanism: 'MEKANISME',
        ticketSize: 'Ukuran tiket',
        instrument: 'Instrumen',
        tenor: 'Tenor',
        expectedReturn: 'Imbal hasil diharapkan',
        moreLabel: 'LEBIH BANYAK KASUS BISNIS',
        moreTitle: 'Lainnya dari STIF Capital',
        ctaTitle: 'Ingin mendiskusikan ini dengan tim kami?',
        ctaText: 'Kirimkan pesan kepada kami - principal kami membalas dalam waktu 48 jam.',
        ctaButton: 'Hubungi kami',
        active: 'AKTIF'
    },
};

export default function BusinessCaseShow({ locale, portfolio, related, settings }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';
    const text = copy[locale] || copy.en;

    const title = locale === 'id' && portfolio.title_id ? portfolio.title_id : portfolio.title_en;
    const description = locale === 'id' && portfolio.description_id ? portfolio.description_id : portfolio.description_en;
    const content = locale === 'id' && portfolio.content_id ? portfolio.content_id : portfolio.content_en;

    const isUpload = portfolio.thumbnail?.includes('/');
    const image = isUpload ? `/storage/${portfolio.thumbnail}` : `/images/${portfolio.thumbnail}`;

    // Filter and slice related portfolios (excluding the current one)
    const relatedItems = (related || [])
        .filter(item => item.slug !== portfolio.slug)
        .slice(0, 3)
        .map(item => {
            const isRelatedUpload = item.thumbnail?.includes('/');
            return {
                ...item,
                image: isRelatedUpload ? `/storage/${item.thumbnail}` : `/images/${item.thumbnail}`
            };
        });

    const breadcrumbItems = [
        { label: locale === 'id' ? 'Beranda' : 'Home', url: prefix || '/' },
        { label: t('nav.business_case'), url: `${prefix}/business-case` },
        { label: title, url: `${prefix}/business-case/${portfolio.slug}` }
    ];

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead title={title} description={description || title} image={image} type="article" />

            <div className="portfolio-show-page">
                <div className="container">
                    <Breadcrumb items={breadcrumbItems} />
                    {/* Back Link */}
                    <FadeIn direction="up">
                        <Link href={`${prefix}/business-case`} className="portfolio-back">
                            <ArrowLeftIcon />
                            {text.back}
                        </Link>
                    </FadeIn>

                    {/* Featured Image Header Banner */}
                    <FadeIn direction="up">
                        <section className="portfolio-banner" style={{ backgroundImage: `url(${image})` }}>
                            {/* Dark gradient overlay for text readability */}
                            <div className="portfolio-banner__overlay" />

                            {/* Top Badges */}
                            <div className="portfolio-banner__top">
                                <span className="portfolio-banner__sector">{portfolio.sector}</span>
                                <span className="portfolio-banner__status" style={{ display: 'none' }}>{text.active}</span>
                            </div>

                            {/* Bottom Content */}
                            <div className="portfolio-banner__bottom">
                                <span className="portfolio-banner__akad">
                                    Agad : {portfolio.deal_type || portfolio.akad_type}
                                </span>
                                <h1>{title}</h1>
                            </div>
                        </section>
                    </FadeIn>

                    {/* Two-Column Info Layout */}
                    <FadeIn direction="up">
                        <div className="portfolio-content-row">
                            
                            {/* Left Description Column */}
                            <div className="portfolio-main-card">
                                <div>
                                    <span className="label-gold">{text.overview}</span>
                                    <p className="portfolio-main-text">{description}</p>
                                </div>

                                <div>
                                    <span className="label-gold">{text.mechanism}</span>
                                    <div className="portfolio-main-text rich-content" dangerouslySetInnerHTML={{ __html: content }} />
                                </div>
                            </div>

                            {/* Right 2x2 Fact Grid Column (HIDDEN PER REQUEST) */}
                            {/* <div className="portfolio-stats-sidebar">
                                ...
                            </div> */}

                        </div>
                    </FadeIn>

                    {/* Related Cases Section */}
                    {relatedItems.length > 0 && (
                        <FadeIn direction="up">
                            <div className="related-cases-section">
                                <span className="related-cases-label">{text.moreLabel}</span>
                                <h2 className="related-cases-title">{text.moreTitle}</h2>
                                <div className="related-cases-grid">
                                    {relatedItems.map((item) => {
                                        const caseTitle = locale === 'id' && item.title_id ? item.title_id : item.title_en;
                                        return (
                                            <Link 
                                                key={item.id} 
                                                href={`${prefix}/business-case/${item.slug}`} 
                                                className="portfolio-card"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            >
                                                <div className="portfolio-card__overlay" />
                                                
                                                <div className="portfolio-card__top">
                                                    <span className="portfolio-card__sector-badge">
                                                        {item.sector}
                                                    </span>
                                                    <div className="portfolio-card__arrow">
                                                        <ArrowUpRightIcon size={16} />
                                                    </div>
                                                </div>

                                                <div className="portfolio-card__bottom">
                                                    <span className="portfolio-card__akad">
                                                        {item.deal_type || item.akad_type}
                                                    </span>
                                                    <h3>{caseTitle}</h3>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </FadeIn>
                    )}

                    {/* Bottom Discuss CTA Card */}
                    <FadeIn direction="up">
                        <div className="discuss-cta-card" style={{ marginTop: relatedItems.length > 0 ? '64px' : '0' }}>
                            <div>
                                <h2>{text.ctaTitle}</h2>
                                <p>{text.ctaText}</p>
                            </div>
                            <Link href={`${prefix}/contact`} className="discuss-cta-btn">
                                {text.ctaButton}
                                <ArrowUpRightIcon diagonal />
                            </Link>
                        </div>
                    </FadeIn>

                </div>
            </div>

            {/* Custom Embedded Page Styles */}
            <style>{`
                .portfolio-show-page {
                    background-color: #F7F6F3;
                    padding: 48px 0 120px;
                }
                
                .portfolio-back {
                    display: inline-flex;
                    align-items: center;
                    color: #718844;
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    transition: gap 0.25s ease, color 0.25s ease;
                    gap: 8px;
                    text-decoration: none;
                    margin-bottom: 32px;
                }
                
                .portfolio-back:hover {
                    gap: 12px;
                    color: #4b5d2a;
                }
                
                .portfolio-banner {
                    height: 480px;
                    border-radius: 24px;
                    overflow: hidden;
                    background-size: cover;
                    background-position: center;
                    background-color: #1e2519;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: clamp(28px, 5vw, 44px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.015);
                    margin-bottom: 24px;
                }
                
                .portfolio-banner__overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(19, 24, 16, 0.95) 0%, rgba(19, 24, 16, 0.2) 60%, transparent 100%);
                    z-index: 1;
                }
                
                .portfolio-banner__top {
                    display: flex;
                    gap: 10px;
                    position: relative;
                    z-index: 2;
                }
                
                .portfolio-banner__sector {
                    background-color: #ffffff;
                    color: #131810;
                    border-radius: 9999px;
                    padding: 6px 14px;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 0.03em;
                    text-transform: uppercase;
                }
                
                .portfolio-banner__status {
                    background-color: #2C3621;
                    color: #C3CF92;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 9999px;
                    padding: 6px 14px;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 0.03em;
                    text-transform: uppercase;
                }
                
                .portfolio-banner__bottom {
                    position: relative;
                    z-index: 2;
                    color: #ffffff;
                    max-width: 820px;
                }
                
                .portfolio-banner__akad {
                    font-size: 14px;
                    color: #9DA65D;
                    display: block;
                    font-style: italic;
                    font-weight: 500;
                    margin-bottom: 8px;
                }
                
                .portfolio-banner__bottom h1 {
                    font-family: var(--font-family-heading);
                    font-size: clamp(32px, 4.5vw, 52px);
                    font-weight: 300;
                    color: #ffffff;
                    line-height: 1.15;
                    margin: 0;
                }
                
                .portfolio-content-row {
                    display: grid;
                    grid-template-columns: 1fr;
                    margin-bottom: 64px;
                    align-items: start;
                }
                
                .portfolio-main-card {
                    background-color: #ffffff;
                    border: 1px solid rgba(107, 109, 15, 0.08);
                    border-radius: 24px;
                    padding: 44px;
                    display: flex;
                    flex-direction: column;
                    gap: 36px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.01);
                }
                
                .label-gold {
                    color: #718844;
                    font-size: 11px;
                    font-weight: 950;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    display: block;
                    margin-bottom: 16px;
                }
                
                .portfolio-main-text {
                    color: #687085;
                    font-size: 16px;
                    line-height: 1.75;
                    margin: 0;
                    text-align: justify;
                }
                
                .portfolio-main-divider {
                    height: 1px;
                    background-color: rgba(107, 109, 15, 0.08);
                    width: 100%;
                }
                
                .rich-content h1, 
                .rich-content h2, 
                .rich-content h3, 
                .rich-content h4, 
                .rich-content h5, 
                .rich-content h6 {
                    color: #718844;
                    font-size: 11px;
                    font-weight: 950;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    margin-top: 36px;
                    margin-bottom: 16px;
                    font-family: inherit;
                }
                
                .rich-content p {
                    margin-bottom: 16px;
                    text-align: justify;
                }
                
                .portfolio-stats-sidebar {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 16px;
                }
                
                .fact-card {
                    background-color: #ffffff;
                    border: 1px solid rgba(107, 109, 15, 0.08);
                    border-radius: 16px;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 18px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.01);
                }
                
                .fact-card__header {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                
                .fact-card__header span {
                    font-size: 11px;
                    color: #6c6c55;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                }
                
                .fact-card strong {
                    font-size: 18px;
                    font-weight: 800;
                    color: #131810;
                    line-height: 1.2;
                    word-break: break-word;
                }
                
                .related-cases-section {
                    margin-top: 64px;
                }
                
                .related-cases-label {
                    color: #718844;
                    font-size: 11px;
                    font-weight: 900;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    display: block;
                    margin-bottom: 12px;
                }
                
                .related-cases-title {
                    font-family: var(--font-family-heading);
                    font-size: clamp(32px, 4vw, 44px);
                    font-weight: 300;
                    color: #2b2d3b;
                    margin: 0 0 36px 0;
                }
                
                .related-cases-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }
                
                .portfolio-card {
                    height: 440px;
                    border-radius: 22px;
                    overflow: hidden;
                    background-size: cover;
                    background-position: center;
                    background-color: #1e2519;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 28px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.015);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    text-decoration: none;
                }
                
                .portfolio-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.06);
                }
                
                .portfolio-card__overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(19, 24, 16, 0.96) 0%, rgba(19, 24, 16, 0.3) 50%, transparent 100%);
                    z-index: 1;
                }
                
                .portfolio-card__top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: relative;
                    z-index: 2;
                }
                
                .portfolio-card__sector-badge {
                    background-color: #ffffff;
                    color: #131810;
                    border-radius: 9999px;
                    padding: 6px 14px;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 0.03em;
                    text-transform: uppercase;
                }
                
                .portfolio-card__arrow {
                    width: 36px;
                    height: 36px;
                    background-color: #ffffff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #131810;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
                }
                
                .portfolio-card__bottom {
                    position: relative;
                    z-index: 2;
                    color: #ffffff;
                }
                
                .portfolio-card__akad {
                    font-size: 12px;
                    color: #9DA65D;
                    display: block;
                    font-style: italic;
                    font-weight: 500;
                    margin-bottom: 6px;
                }
                
                .portfolio-card__bottom h3 {
                    font-family: var(--font-family-heading);
                    font-size: 24px;
                    font-weight: 300;
                    color: #ffffff;
                    line-height: 1.25;
                    margin: 0;
                }
                
                .portfolio-card__footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    padding-top: 14px;
                }
                
                .portfolio-card__footer span {
                    font-size: 10px;
                    color: rgba(255, 255, 255, 0.45);
                    font-weight: 700;
                    letter-spacing: 0.05em;
                }
                
                .portfolio-card__footer strong {
                    font-size: 14px;
                    font-weight: 800;
                    color: #ffffff;
                }
                
                .discuss-cta-card {
                    background-color: #131810;
                    border-radius: 24px;
                    padding: 48px 52px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #ffffff;
                    gap: 32px;
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04);
                }
                
                .discuss-cta-card h2 {
                    font-size: 36px;
                    font-weight: 300;
                    margin: 0 0 8px 0;
                    font-family: var(--font-family-heading);
                    color: #ffffff;
                    line-height: 1.2;
                }
                
                .discuss-cta-card p {
                    color: rgba(255, 255, 255, 0.65);
                    font-size: 15px;
                    margin: 0;
                    line-height: 1.5;
                }
                
                .discuss-cta-btn {
                    background-color: #ffffff;
                    color: #131810;
                    padding: 14px 28px;
                    border-radius: 9999px;
                    font-weight: 800;
                    font-size: 14px;
                    white-space: nowrap;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: background-color 0.25s ease, transform 0.25s ease;
                    text-decoration: none;
                }
                
                .discuss-cta-btn:hover {
                    background-color: #f4f5ef;
                    transform: translateY(-1px);
                }
                
                @media (max-width: 1024px) {
                    .portfolio-banner {
                        height: 380px;
                    }
                    
                    .portfolio-content-row {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    
                    .related-cases-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    
                    .discuss-cta-card {
                        flex-direction: column;
                        align-items: flex-start;
                        text-align: left;
                        padding: 36px;
                        gap: 24px;
                    }
                    
                    .discuss-cta-btn {
                        width: 100%;
                        justify-content: center;
                    }
                }
                
                @media (max-width: 640px) {
                    .portfolio-show-page {
                        padding: 24px 0 80px;
                    }
                    
                    .portfolio-back {
                        margin-bottom: 24px;
                    }
                    
                    .portfolio-banner {
                        height: 320px;
                        padding: 24px;
                    }
                    
                    .portfolio-banner__bottom h1 {
                        font-size: 28px;
                    }
                    
                    .portfolio-main-card {
                        padding: 28px;
                    }
                    
                    .portfolio-stats-sidebar {
                        grid-template-columns: 1fr;
                        gap: 12px;
                    }
                    
                    .fact-card {
                        padding: 20px;
                    }
                    
                    .related-cases-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </Layout>
    );
}