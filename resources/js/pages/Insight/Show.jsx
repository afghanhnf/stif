import { useState } from 'react';
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

const ArrowRightIcon = ({ diagonal = false }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        {diagonal ? (
            <>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
            </>
        ) : (
            <>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
            </>
        )}
    </svg>
);

const fallbackImages = {
    'why-musharakah-mutanaqisah-beats-conventional-mortgage': '/images/article-buildings.png',
    'sukuk-pipeline-outlook-gcc-issuances-h2-2026': '/images/article-spiral.png',
    'inside-our-sharia-board-a-quarterly-fatwa-cycle': '/images/article-office.png',
    'stif-capital-annual-report-2025': '/images/case-trade.png',
    'stif-capital-annual-report-2024': '/images/case-agriculture.png',
    'waqf-2025-beneficiaries-across-6-provinces': '/images/case-manufacturing.png'
};

const getArticleImage = (art) => {
    if (art.featured_image) {
        return art.featured_image.startsWith('/') 
            ? art.featured_image 
            : `/storage/${art.featured_image}`;
    }
    return fallbackImages[art.slug] || '/images/article-buildings.png';
};

const copy = {
    en: {
        back: 'All articles',
        readTime: 'min read',
        relatedLabel: 'CONTINUE READING',
        relatedTitle: 'Related Insights',
        readMore: 'Read article',
        ctaTitle: 'Want to discuss this with our team?',
        ctaText: 'Send us a note - our principals reply within 48 hours.',
        ctaButton: 'Contact us',
        share: 'Share',
        copied: 'Copied!'
    },
    id: {
        back: 'Semua artikel',
        readTime: 'mnt baca',
        relatedLabel: 'LANJUTKAN MEMBACA',
        relatedTitle: 'Insight Terkait',
        readMore: 'Baca artikel',
        ctaTitle: 'Ingin mendiskusikan ini dengan tim kami?',
        ctaText: 'Kirimkan pesan kepada kami - principal kami membalas dalam waktu 48 jam.',
        ctaButton: 'Hubungi kami',
        share: 'Bagikan',
        copied: 'Tersalin!'
    },
};

function formatDate(value, locale) {
    if (!value) return '';
    return new Date(value).toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default function InsightShow({ locale, article, related, settings }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';
    const text = copy[locale] || copy.en;

    const title = locale === 'id' && article.title_id ? article.title_id : article.title_en;
    const content = locale === 'id' && article.content_id ? article.content_id : article.content_en;
    const excerpt = locale === 'id' && article.excerpt_id ? article.excerpt_id : article.excerpt_en;
    const dateFormatted = formatDate(article.published_at, locale);
    
    const rawReadTime = article.read_time_minutes || article.reading_time || 5;
    const readTime = `${rawReadTime} ${text.readTime}`;
    const featuredImage = getArticleImage(article);
    const tags = locale === 'id' && article.tags_id ? article.tags_id : (article.tags_en || []);

    const [copied, setCopied] = useState(false);
    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const breadcrumbItems = [
        { label: locale === 'id' ? 'Beranda' : 'Home', url: prefix || '/' },
        { label: t('nav.insight'), url: `${prefix}/insight` },
        { label: title, url: `${prefix}/insight/${article.slug}` }
    ];

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead
                title={title}
                description={excerpt || title}
                image={featuredImage}
                type="article"
            />

            {/* Article Content Section */}
            <section className="insight-show">
                <div className="container">
                    <Breadcrumb items={breadcrumbItems} />
                    <div className="insight-show__inner">
                        
                        {/* Breadcrumbs Category Pill */}
                        <FadeIn direction="up">
                            <div className="article-breadcrumb-row">
                                <Link href={`${prefix}/insight`} className="insight-back">
                                    <ArrowLeftIcon />
                                    {text.back}
                                </Link>
                                {article.category && (
                                    <span className="insight-show__category-badge">
                                        {article.category.toUpperCase()}
                                    </span>
                                )}
                            </div>
                        </FadeIn>

                        {/* Article Header */}
                        <FadeIn direction="up">
                            <header className="insight-show__header">
                                <h1>{title}</h1>

                                <div className="article-meta-row">
                                    <div className="article-meta-left">
                                        {article.author && (
                                            <span className="meta-item">
                                                <svg className="meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                    <circle cx="12" cy="7" r="4" />
                                                </svg>
                                                {article.author}
                                            </span>
                                        )}
                                        {/* Date and Read Time Hidden Per Request */}
                                    </div>
                                </div>
                            </header>
                        </FadeIn>

                        {/* Large Featured Image */}
                        {featuredImage && (
                            <FadeIn direction="up">
                                <div className="insight-show__image">
                                    <img src={featuredImage} alt={title} loading="lazy" decoding="async" />
                                    
                                    {tags && tags.length > 0 && (
                                        <div className="article-image-tags">
                                            {tags.map((tag, idx) => (
                                                <span key={idx} className="image-tag">{tag}</span>
                                            ))}
                                        </div>
                                    )}

                                    <button className="share-btn share-btn--image" onClick={handleShare}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                            <polyline points="16 6 12 2 8 6" />
                                            <line x1="12" y1="2" x2="12" y2="15" />
                                        </svg>
                                        <span>{copied ? text.copied : text.share}</span>
                                    </button>
                                </div>
                            </FadeIn>
                        )}

                        {/* Article Body Content */}
                        <FadeIn direction="up">
                            <div
                                className="insight-show__body"
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        </FadeIn>

                        <div className="insight-show__divider" />
                    </div>
                </div>
            </section>

            {/* Related Articles Section (Continue Reading) */}
            <section className="insight-related">
                <div className="container">
                    {related && related.length > 0 && (
                        <>
                            <FadeIn direction="up">
                                <span className="insight-related__label">
                                    {text.relatedLabel}
                                </span>
                                <h2>
                                    {text.relatedTitle.split(' ')[0]}{' '}
                                    <em>{text.relatedTitle.split(' ').slice(1).join(' ')}</em>
                                </h2>
                            </FadeIn>

                            <FadeIn direction="up">
                                <div className="insight-related__grid">
                                    {related.map((rel) => {
                                        const relTitle = locale === 'id' && rel.title_id ? rel.title_id : rel.title_en;
                                        const relImage = getArticleImage(rel);
                                        const relDate = formatDate(rel.published_at, locale);
                                        const relReadTime = `${rel.read_time_minutes || rel.reading_time || 5} ${text.readTime}`;

                                        return (
                                            <Link
                                                key={rel.id}
                                                href={`${prefix}/insight/${rel.slug}`}
                                                className="insight-related__card"
                                            >
                                                <div
                                                    className="insight-related__card-image"
                                                    style={relImage ? { backgroundImage: `url(${relImage})` } : {}}
                                                >
                                                    {rel.category && (
                                                        <span>{rel.category.toUpperCase()}</span>
                                                    )}
                                                </div>
                                                <div className="insight-related__card-copy">
                                                    {/* Meta Hidden Per Request */}
                                                    <h3>{relTitle}</h3>
                                                    <span className="insight-link">
                                                        {text.readMore}
                                                        <ArrowRightIcon />
                                                    </span>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </FadeIn>
                        </>
                    )}

                    {/* Bottom Discuss CTA Card */}
                    <FadeIn direction="up">
                        <div className="discuss-cta-card" style={{ marginTop: related && related.length > 0 ? '68px' : '0' }}>
                            <div>
                                <h2>{text.ctaTitle}</h2>
                                <p>{text.ctaText}</p>
                            </div>
                            <Link href={`${prefix}/contact`} className="discuss-cta-btn">
                                {text.ctaButton}
                                <ArrowRightIcon diagonal />
                            </Link>
                        </div>
                    </FadeIn>

                </div>
            </section>

            {/* Encapsulated Styles */}
            <style>{`
                .insight-show {
                    background-color: #F7F6F3;
                    padding: 48px 0 64px;
                }
                
                .insight-show__inner {
                    display: flex;
                    flex-direction: column;
                    gap: 36px;
                }
                
                .article-breadcrumb-row {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    flex-wrap: wrap;
                }
                
                .insight-back {
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
                }
                
                .insight-back:hover {
                    gap: 12px;
                    color: #4b5d2a;
                }
                
                .insight-show__category-badge {
                    background-color: #EEF3DD;
                    color: #718844;
                    border: 1px solid #D4DFAD;
                    border-radius: 9999px;
                    padding: 4px 12px;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                }
                
                .insight-show__header {
                    max-width: 820px;
                }
                
                .insight-show__header h1 {
                    font-family: var(--font-family-heading);
                    font-size: clamp(36px, 5.2vw, 56px);
                    font-weight: 300;
                    color: #2b2d3b;
                    line-height: 1.12;
                    margin: 16px 0 24px 0;
                }
                
                .article-meta-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 16px;
                    border-bottom: 1px solid rgba(107, 109, 15, 0.08);
                    padding-bottom: 24px;
                    margin-bottom: 8px;
                }
                
                .article-meta-left {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 24px;
                }
                
                .meta-item {
                    display: inline-flex;
                    align-items: center;
                    color: #687085;
                    font-size: 13px;
                }
                
                .meta-icon {
                    color: #718844;
                }
                
                .share-btn {
                    display: inline-flex;
                    align-items: center;
                    background-color: #ffffff;
                    border: 1px solid rgba(107, 109, 15, 0.12);
                    color: #687085;
                    border-radius: 9999px;
                    padding: 8px 16px;
                    font-size: 12px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
                }
                
                .share-btn:hover {
                    background-color: #f7f6f3;
                    border-color: rgba(107, 109, 15, 0.25);
                    transform: translateY(-1px);
                }
                
                .insight-show__image {
                    border-radius: 22px;
                    overflow: hidden;
                    margin-bottom: 16px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.01);
                    position: relative;
                }
                
                .article-image-tags {
                    position: absolute;
                    bottom: 24px;
                    left: 24px;
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                    z-index: 2;
                }

                .image-tag {
                    background-color: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(4px);
                    color: #131810;
                    padding: 8px 16px;
                    border-radius: 99px;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                }

                .share-btn--image {
                    position: absolute;
                    top: 24px;
                    right: 24px;
                    background-color: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(4px);
                    border: none;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                    z-index: 2;
                }
                
                .share-btn--image:hover {
                    background-color: #ffffff;
                }
                
                .insight-show__image img {
                    width: 100%;
                    object-fit: cover;
                    max-height: 520px;
                    display: block;
                }
                
                .insight-show__body {
                    max-width: 780px;
                    margin: 0 auto;
                    color: #3e4354;
                }
                
                .insight-show__body p {
                    font-size: 16px;
                    line-height: 1.85;
                    margin-bottom: 24px;
                }
                
                .insight-show__body p.intro {
                    font-size: 20px;
                    font-weight: 300;
                    line-height: 1.7;
                    color: #131810;
                    margin-bottom: 32px;
                }
                
                .insight-show__body h2 {
                    font-family: var(--font-family-heading);
                    font-size: 28px;
                    font-weight: 700;
                    color: #2b2d3b;
                    margin: 48px 0 20px 0;
                    line-height: 1.3;
                }
                
                .insight-show__body blockquote {
                    font-family: var(--font-family-heading);
                    font-size: 20px;
                    font-style: italic;
                    color: #718844;
                    border-left: 3px solid #718844;
                    padding: 8px 0 8px 28px;
                    margin: 40px 0;
                    background: transparent;
                }
                
                .insight-show__divider {
                    background-color: rgba(107, 109, 15, 0.08);
                    width: 100%;
                    height: 1px;
                    margin-top: 48px;
                }
                
                .insight-related {
                    background-color: #F7F6F3;
                    padding: 72px 0 120px;
                }
                
                .insight-related__label {
                    color: #718844;
                    font-size: 11px;
                    font-weight: 900;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    display: block;
                    margin-bottom: 12px;
                }
                
                .insight-related h2 {
                    font-family: var(--font-family-heading);
                    font-size: clamp(32px, 4vw, 44px);
                    font-weight: 300;
                    color: #2b2d3b;
                    margin: 0 0 44px 0;
                }
                
                .insight-related h2 em {
                    color: #718844;
                    font-style: italic;
                }
                
                .insight-related__grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }
                
                .insight-related__card {
                    background-color: #ffffff;
                    border: 1px solid rgba(107, 109, 15, 0.08);
                    border-radius: 22px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
                    text-decoration: none;
                }
                
                .insight-related__card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(107, 109, 15, 0.16);
                    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.04);
                }
                
                .insight-related__card-image {
                    height: 200px;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                }
                
                .insight-related__card-image span {
                    position: absolute;
                    top: 14px;
                    left: 14px;
                    background-color: #ffffff;
                    color: #2b2d3b;
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    padding: 6px 12px;
                    border-radius: 9999px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
                }
                
                .insight-related__card-copy {
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                }
                
                .insight-meta {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #687085;
                    font-size: 12px;
                    margin-bottom: 12px;
                }
                
                .insight-meta span {
                    width: 3px;
                    height: 3px;
                    background-color: #c4c9b8;
                    border-radius: 50%;
                }
                
                .insight-related__card-copy h3 {
                    font-size: 18px;
                    font-weight: 800;
                    color: #2b2d3b;
                    margin: 0 0 16px 0;
                    line-height: 1.35;
                }
                
                .insight-link {
                    margin-top: auto;
                    color: #718844;
                    font-size: 14px;
                    font-weight: 800;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: gap 0.25s ease;
                }
                
                .insight-related__card:hover .insight-link {
                    gap: 12px;
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
                    .insight-related__grid {
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
                    .insight-show {
                        padding: 24px 0 48px;
                    }
                    
                    .insight-show__inner {
                        gap: 24px;
                    }
                    
                    .insight-show__header h1 {
                        font-size: 32px;
                        margin: 12px 0 16px 0;
                    }
                    
                    .article-meta-row {
                        padding-bottom: 16px;
                    }
                    
                    .article-meta-left {
                        gap: 16px;
                    }
                    
                    .insight-show__image {
                        border-radius: 14px;
                        margin-bottom: 16px;
                    }
                    
                    .insight-show__body p.intro {
                        font-size: 18px;
                        margin-bottom: 24px;
                    }
                    
                    .insight-show__body h2 {
                        font-size: 24px;
                        margin: 32px 0 16px 0;
                    }
                    
                    .insight-show__body blockquote {
                        font-size: 18px;
                        padding-left: 20px;
                        margin: 28px 0;
                    }
                    
                    .insight-related__grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </Layout>
    );
}