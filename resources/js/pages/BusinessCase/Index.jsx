import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import SeoHead from '@/components/seo/SeoHead';
import Breadcrumb from '@/components/seo/Breadcrumb';
import FadeIn from '@/components/animations/FadeIn';

const ArrowUpRightIcon = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);

const copy = {
    en: {
        badge: 'Business Cases',
        title: ['Deconstructing Proven', 'Value Creation'],
        desc: 'Anatomy of commercial turnarounds and asset optimizations across continents that transform capital into documented, sustainable impact.',
        filterAll: 'All',
        ctaTitle: ['Pitch the', 'next mandate'],
        ctaText: 'We review every Sharia-eligible submission within 48 hours.',
        ctaBtn: 'Submit project',
        emptyTitle: 'No business cases found',
        emptyText: 'No business cases have been published in this sector yet. Please check back later.'
    },
    id: {
        badge: 'Kasus Bisnis',
        title: ['Dekonstruksi Bukti', 'Penciptaan Nilai'],
        desc: 'Anatomi pemulihan komersial dan optimalisasi aset di berbagai benua yang mengubah modal menjadi dampak berkelanjutan yang terdokumentasi.',
        filterAll: 'Semua',
        ctaTitle: ['Ajukan', 'mandat berikutnya'],
        ctaText: 'Kami meninjau setiap pengajuan yang memenuhi syarat Syariah dalam waktu 48 jam.',
        ctaBtn: 'Ajukan proyek',
        emptyTitle: 'Tidak ada kasus bisnis ditemukan',
        emptyText: 'Belum ada kasus bisnis yang diterbitkan di sektor ini. Silakan cek kembali nanti.'
    },
};

export default function BusinessCaseIndex({ locale, portfolios, settings }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';
    const text = copy[locale] || copy.en;
    const [activeFilter, setActiveFilter] = useState('all');

    // Normalize portfolios to get images
    const displayItems = portfolios && portfolios.length > 0
        ? portfolios.map((item) => {
            const isUpload = item.thumbnail?.includes('/');
            return {
                ...item,
                image: isUpload ? `/storage/${item.thumbnail}` : `/images/${item.thumbnail}`,
            };
        })
        : [];

    // Get unique sectors dynamically
    const sectors = [...new Set(displayItems.map(item => item.sector).filter(Boolean))];

    // Filter items based on active category tab
    const filteredItems = activeFilter === 'all'
        ? displayItems
        : displayItems.filter(item => item.sector === activeFilter);

    const breadcrumbItems = [
        { label: locale === 'id' ? 'Beranda' : 'Home', url: prefix || '/' },
        { label: t('nav.business_case'), url: `${prefix}/business-case` }
    ];

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead title={locale === 'id' ? 'Kasus Bisnis' : 'Business Cases'} description={text.desc} />

            <div className="portfolio-index-page">
                <div className="container">
                    <Breadcrumb items={breadcrumbItems} />
                    
                    {/* Hero Header Section */}
                    <FadeIn direction="up">
                        <section className="portfolio-hero">
                            <div className="portfolio-hero__copy">
                                <span className="portfolio-badge">
                                    {text.badge}
                                </span>
                                <h1>
                                    {text.title[0]} <br />
                                    <em>{text.title[1]}</em>
                                </h1>
                                <p>{text.desc}</p>
                            </div>
                            <div className="portfolio-hero__media">
                                <img src="/images/article-buildings.png" alt="Value Creation" loading="lazy" decoding="async" />
                            </div>
                        </section>
                    </FadeIn>

                    {/* Filter Sector Tabs */}
                    <FadeIn direction="up">
                        <div className="portfolio-filters" aria-label="Sectors filter">
                            <button
                                onClick={() => setActiveFilter('all')}
                                className={activeFilter === 'all' ? 'is-active' : ''}
                                type="button"
                            >
                                {text.filterAll}
                            </button>
                            {sectors.map((sector) => (
                                <button
                                    key={sector}
                                    onClick={() => setActiveFilter(sector)}
                                    className={activeFilter === sector ? 'is-active' : ''}
                                    type="button"
                                >
                                    {sector.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Portfolios Cards Grid */}
                    {filteredItems.length > 0 ? (
                        <FadeIn direction="up">
                            <div className="portfolio-grid">
                                {filteredItems.map((item) => {
                                    const caseTitle = locale === 'id' && item.title_id ? item.title_id : item.title_en;
                                    return (
                                        <Link 
                                            key={item.id} 
                                            href={`${prefix}/business-case/${item.slug}`} 
                                            className="portfolio-card"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        >
                                            {/* Gradient Overlay for Legibility */}
                                            <div className="portfolio-card__overlay" />

                                            {/* Top Right Status Badge - Hidden as requested */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '24px',
                                                right: '24px',
                                                backgroundColor: '#FFFFFF',
                                                borderRadius: '999px',
                                                padding: '6px 16px',
                                                color: '#131810',
                                                fontSize: '11px',
                                                fontWeight: 'bold',
                                                letterSpacing: '0.05em',
                                                zIndex: 2,
                                                display: 'none',
                                                alignItems: 'center',
                                                gap: '6px'
                                            }}>
                                                <span style={{ width: '6px', height: '6px', backgroundColor: '#6B6D0F', borderRadius: '50%' }}></span>
                                                {text.active}
                                            </div>

                                            {/* Top Row: Sector Badge + Arrow */}
                                            <div className="portfolio-card__top">
                                                <span className="portfolio-card__sector-badge">
                                                    {item.sector}
                                                </span>
                                                <div className="portfolio-card__arrow">
                                                    <ArrowUpRightIcon size={16} />
                                                </div>
                                            </div>

                                            {/* Bottom Row: Title + Size Metadata */}
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
                        </FadeIn>
                    ) : (
                        <FadeIn direction="up">
                            <div className="portfolio-empty">
                                <h3>{text.emptyTitle}</h3>
                                <p>{text.emptyText}</p>
                            </div>
                        </FadeIn>
                    )}

                    {/* Bottom CTA Card */}
                    <FadeIn direction="up">
                        <section className="portfolio-cta">
                            <div>
                                <h2>
                                    {text.ctaTitle[0]} <em>{text.ctaTitle[1]}</em>
                                </h2>
                                <p>{text.ctaText}</p>
                            </div>
                            <Link href={`${prefix}/contact`} className="portfolio-cta__button">
                                {text.ctaBtn}
                                <ArrowUpRightIcon size={14} />
                            </Link>
                        </section>
                    </FadeIn>

                </div>
            </div>

            {/* Custom Embedded Page Styles */}
            <style>{`
                .portfolio-index-page {
                    background-color: #F7F6F3;
                    padding: 48px 0 120px;
                }
                
                .portfolio-hero {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 40px;
                    align-items: stretch;
                    background-color: #ffffff;
                    border: 1px solid rgba(107, 109, 15, 0.08);
                    border-radius: 22px;
                    overflow: hidden;
                    margin-bottom: 48px;
                    min-height: 380px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.01);
                }
                
                .portfolio-hero__copy {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: clamp(32px, 6vw, 64px);
                }
                
                .portfolio-badge {
                    background-color: #EEF3DD;
                    color: #718844;
                    border: 1px solid #D4DFAD;
                    border-radius: 9999px;
                    padding: 6px 14px;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    width: fit-content;
                    margin-bottom: 24px;
                }
                
                .portfolio-hero__copy h1 {
                    color: #2b2d3b;
                    font-family: var(--font-family-heading);
                    font-size: clamp(36px, 4.8vw, 56px);
                    font-weight: 300;
                    line-height: 1.1;
                    margin: 0 0 20px 0;
                }
                
                .portfolio-hero__copy h1 em {
                    color: #718844;
                    font-style: italic;
                }
                
                .portfolio-hero__copy p {
                    color: #687085;
                    font-size: 16px;
                    line-height: 1.7;
                    margin: 0;
                    max-width: 540px;
                }
                
                .portfolio-hero__media {
                    background-color: #d8ddd3;
                    position: relative;
                }
                
                .portfolio-hero__media img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .portfolio-filters {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-bottom: 36px;
                    border-bottom: 1px solid rgba(107, 109, 15, 0.08);
                    padding-bottom: 20px;
                }
                
                .portfolio-filters button {
                    background-color: #ffffff;
                    color: #6c6c55;
                    border: 1px solid rgba(107, 109, 15, 0.08);
                    border-radius: 9999px;
                    padding: 8px 20px;
                    font-size: 13px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
                }
                
                .portfolio-filters button:hover,
                .portfolio-filters button.is-active {
                    background-color: #131810;
                    color: #ffffff;
                    border-color: #131810;
                }
                
                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                    margin-bottom: 64px;
                }
                
                .portfolio-card {
                    height: 460px;
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
                
                .portfolio-empty {
                    text-align: center;
                    color: #687085;
                    background-color: #ffffff;
                    border: 1px solid rgba(107, 109, 15, 0.08);
                    border-radius: 22px;
                    padding: 80px 24px;
                }
                
                .portfolio-empty h3 {
                    font-family: var(--font-family-heading);
                    font-size: 24px;
                    color: #2b2d3b;
                    margin-bottom: 12px;
                }
                
                .portfolio-cta {
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
                
                .portfolio-cta h2 {
                    font-size: 36px;
                    font-weight: 300;
                    margin: 0 0 8px 0;
                    font-family: var(--font-family-heading);
                    color: #ffffff;
                    line-height: 1.2;
                }
                
                .portfolio-cta h2 em {
                    color: #9DA65D;
                    font-style: italic;
                }
                
                .portfolio-cta p {
                    color: rgba(255, 255, 255, 0.65);
                    font-size: 15px;
                    margin: 0;
                    line-height: 1.5;
                }
                
                .portfolio-cta__button {
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
                
                .portfolio-cta__button:hover {
                    background-color: #f4f5ef;
                    transform: translateY(-1px);
                }
                
                @media (max-width: 1024px) {
                    .portfolio-hero {
                        grid-template-columns: 1fr;
                        min-height: auto;
                    }
                    
                    .portfolio-hero__media {
                        aspect-ratio: 16/9;
                    }
                    
                    .portfolio-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    
                    .portfolio-cta {
                        flex-direction: column;
                        align-items: flex-start;
                        text-align: left;
                        padding: 36px;
                        gap: 24px;
                    }
                    
                    .portfolio-cta__button {
                        width: 100%;
                        justify-content: center;
                    }
                }
                
                @media (max-width: 640px) {
                    .portfolio-index-page {
                        padding: 24px 0 80px;
                    }
                    
                    .portfolio-hero__copy {
                        padding: 28px;
                    }
                    
                    .portfolio-hero__copy h1 {
                        font-size: 32px;
                    }
                    
                    .portfolio-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .portfolio-card {
                        height: 380px;
                        padding: 24px;
                    }
                }
            `}</style>
        </Layout>
    );
}