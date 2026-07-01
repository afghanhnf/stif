import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import SeoHead from '@/components/seo/SeoHead';
import Breadcrumb from '@/components/seo/Breadcrumb';
import FadeIn from '@/components/animations/FadeIn';

const SparkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m12 3 1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8L12 3Z" />
        <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
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

const fallbackArticles = [
    {
        id: 'musharakah-mortgage',
        slug: 'why-musharakah-mutanaqisah-beats-conventional-mortgage',
        category: 'STRUCTURING',
        title_en: 'Why Musharakah Mutanaqisah beats conventional mortgage',
        title_id: 'Mengapa Musyarakah Mutanaqisah mengungguli KPR konvensional',
        excerpt_en: 'Diminishing partnership transfers ownership over time without interest - and it does so with better risk-sharing.',
        excerpt_id: 'Kemitraan bertahap mengalihkan kepemilikan dari waktu ke waktu tanpa bunga dan dengan pembagian risiko yang lebih baik.',
        author: 'Dr. Hisham Al-Sabah',
        published_at: '2026-05-12T00:00:00.000000Z',
        read_time_minutes: 6,
        image: '/images/article-buildings.png',
    },
    {
        id: 'sukuk-pipeline',
        slug: 'sukuk-pipeline-outlook-gcc-issuances-h2-2026',
        category: 'MARKETS',
        title_en: 'Sukuk pipeline outlook: GCC issuances in H2 2026',
        title_id: 'Prospek pipeline sukuk: penerbitan GCC di H2 2026',
        excerpt_en: 'A closer look at regional issuance momentum, refinancing cycles, and appetite for asset-backed instruments.',
        excerpt_id: 'Tinjauan momentum penerbitan regional, siklus refinancing, dan minat terhadap instrumen berbasis aset.',
        author: 'STIF Desk',
        published_at: '2026-05-04T00:00:00.000000Z',
        read_time_minutes: 4,
        image: '/images/article-spiral.png',
    },
    {
        id: 'sharia-board',
        slug: 'inside-our-sharia-board-a-quarterly-fatwa-cycle',
        category: 'GOVERNANCE',
        title_en: 'Inside our Sharia board: a quarterly fatwa cycle',
        title_id: 'Di balik dewan Syariah kami: siklus fatwa triwulanan',
        excerpt_en: 'How independent review, documentation, and monitoring keep each structure aligned with Sharia standards.',
        excerpt_id: 'Bagaimana tinjauan independen, dokumentasi, dan pemantauan menjaga setiap struktur tetap sesuai standar Syariah.',
        author: 'Supervisory Board',
        published_at: '2026-04-28T00:00:00.000000Z',
        read_time_minutes: 8,
        image: '/images/article-office.png',
    },
    {
        id: 'annual-2025',
        slug: 'stif-capital-annual-report-2025',
        category: 'ANNUAL REPORT',
        title_en: 'STIF Capital Annual Report 2025',
        title_id: 'Laporan Tahunan STIF Capital 2025',
        excerpt_en: 'Portfolio performance, governance updates, and measured impact across our mandates.',
        excerpt_id: 'Kinerja portofolio, pembaruan tata kelola, dan dampak terukur di seluruh mandat kami.',
        author: 'STIF Capital',
        published_at: '2026-03-31T00:00:00.000000Z',
        read_time_minutes: 32,
        image: '/images/case-trade.png',
    },
    {
        id: 'annual-2024',
        slug: 'stif-capital-annual-report-2024',
        category: 'ANNUAL REPORT',
        title_en: 'STIF Capital Annual Report 2024',
        title_id: 'Laporan Tahunan STIF Capital 2024',
        excerpt_en: 'A year of disciplined capital allocation, transparent reporting, and Sharia-first execution.',
        excerpt_id: 'Setahun alokasi modal yang disiplin, pelaporan transparan, dan eksekusi yang mendahulukan Syariah.',
        author: 'STIF Capital',
        published_at: '2025-03-31T00:00:00.000000Z',
        read_time_minutes: 28,
        image: '/images/case-agriculture.png',
    },
    {
        id: 'waqf-impact',
        slug: 'waqf-2025-beneficiaries-across-6-provinces',
        category: 'SOCIAL IMPACT',
        title_en: 'Waqf 2025: 12,400 beneficiaries across 6 provinces',
        title_id: 'Wakaf 2025: 12.400 penerima manfaat di 6 provinsi',
        excerpt_en: 'How dedicated endowment assets supported education, health, and local resilience programs.',
        excerpt_id: 'Bagaimana aset wakaf mendukung pendidikan, kesehatan, dan program ketahanan lokal.',
        author: 'Impact Desk',
        published_at: '2026-02-14T00:00:00.000000Z',
        read_time_minutes: 5,
        image: '/images/case-manufacturing.png',
    },
];

const copy = {
    en: {
        badge: 'Insight - 2026',
        title: ['Field notes from', 'the desk'],
        desc: 'Articles, annual reports and social impact disclosures from Stif principals and our supervisory board.',
        filters: ['All', 'Structuring', 'Markets', 'Governance'],
        featured: 'Featured',
        readMore: 'Read more',
        subscribeTitle: ['Subscribe to', 'our desk notes'],
        subscribeText: 'One quarterly email. Field notes, structuring decisions and fatwa highlights.',
        subscribe: 'Subscribe',
        empty: 'No insights published yet. Check back soon.',
    },
    id: {
        badge: 'Insight - 2026',
        title: ['Catatan lapangan dari', 'meja kami'],
        desc: 'Artikel, laporan tahunan, dan pengungkapan dampak sosial dari principal Stif dan dewan pengawas kami.',
        filters: ['Semua', 'Structuring', 'Markets', 'Governance'],
        featured: 'Pilihan',
        readMore: 'Baca selengkapnya',
        subscribeTitle: ['Berlangganan', 'catatan meja kami'],
        subscribeText: 'Satu email per kuartal. Catatan lapangan, keputusan struktur, dan sorotan fatwa.',
        subscribe: 'Berlangganan',
        empty: 'Belum ada insight yang diterbitkan. Silakan cek kembali nanti.',
    },
};

function formatDate(value, locale) {
    if (!value) return '';

    return new Date(value).toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    });
}

function articleImage(article, fallback) {
    if (article.featured_image) {
        return article.featured_image.startsWith('/') 
            ? article.featured_image 
            : `/storage/${article.featured_image}`;
    }

    return article.image || fallback.image;
}

function normalizeArticles(articles, locale) {
    let rows = articles?.data?.length ? articles.data : fallbackArticles;
    rows = rows.filter(item => item.slug !== 'inside-our-sharia-board-a-quarterly-fatwa-cycle');

    return rows.map((article, index) => {
        const fallback = fallbackArticles[index % fallbackArticles.length];
        const readTime = article.read_time_minutes || article.reading_time || fallback.read_time_minutes;

        return {
            id: article.id || fallback.id,
            slug: article.slug || fallback.slug,
            category: (article.category || fallback.category).toUpperCase(),
            title: locale === 'id' && article.title_id ? article.title_id : (article.title_en || fallback.title_en),
            excerpt: locale === 'id' && article.excerpt_id ? article.excerpt_id : (article.excerpt_en || fallback.excerpt_en),
            author: article.author || fallback.author,
            date: formatDate(article.published_at || fallback.published_at, locale),
            readTime: `${readTime} min read`,
            image: articleImage(article, fallback),
        };
    });
}

const getCategoryFromFilter = (filter) => {
    const lower = filter.toLowerCase();
    if (lower === 'all' || lower === 'semua') return 'ALL';
    return filter.toUpperCase();
};

export default function InsightIndex({ locale, articles, settings }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';
    const text = copy[locale] || copy.en;

    const [activeCategory, setActiveCategory] = useState('ALL');
    const [visibleCount, setVisibleCount] = useState(6);

    const items = normalizeArticles(articles, locale);
    
    // Generate dynamic filters based on unique categories from the articles
    const dynamicFilters = [locale === 'id' ? 'Semua' : 'All'];
    const uniqueCategories = [...new Set(items.map(item => item.category))].filter(Boolean);
    
    uniqueCategories.forEach(cat => {
        const displayCat = cat.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        dynamicFilters.push(displayCat);
    });

    const filteredItems = activeCategory === 'ALL'
        ? items
        : items.filter(item => item.category === activeCategory);

    const featured = filteredItems[0];
    const secondary = filteredItems.slice(1, visibleCount);
    const hasMore = filteredItems.length > visibleCount;

    const breadcrumbItems = [
        { label: locale === 'id' ? 'Beranda' : 'Home', url: prefix || '/' },
        { label: t('nav.insight'), url: `${prefix}/insight` }
    ];

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead title={t('nav.insight')} description={text.desc} />

            <section className="insight-page">
                <div className="container insight-stack">
                    <Breadcrumb items={breadcrumbItems} />
                    <FadeIn direction="up">
                        <section className="insight-hero">
                            <span className="insight-pill">
                                <SparkIcon />
                                {text.badge}
                            </span>
                            <h1>
                                {text.title[0]} <em>{text.title[1]}</em>
                            </h1>
                            <p>{text.desc}</p>
                        </section>
                    </FadeIn>

                    <FadeIn direction="up">
                        <div className="insight-filters" aria-label="Insight categories">
                            {dynamicFilters.map((filter) => {
                                const categoryKey = getCategoryFromFilter(filter);
                                const isActive = activeCategory === categoryKey;
                                return (
                                    <button 
                                        key={filter} 
                                        className={isActive ? 'is-active' : ''} 
                                        onClick={() => {
                                            setActiveCategory(categoryKey);
                                            setVisibleCount(6);
                                        }}
                                        type="button"
                                    >
                                        {filter}
                                    </button>
                                );
                            })}
                        </div>
                    </FadeIn>

                    {featured ? (
                        <>
                            <FadeIn direction="up">
                                <Link href={`${prefix}/insight/${featured.slug}`} className="insight-featured">
                                    <div className="insight-featured__image">
                                        <img src={featured.image} alt="" loading="lazy" decoding="async" />
                                        <span>{featured.category}</span>
                                    </div>
                                    <div className="insight-featured__copy">
                                        <span>{text.featured}</span>
                                        <h2>{featured.title}</h2>
                                        <p>{featured.excerpt}</p>
                                        <div>
                                            {featured.author}
                                        </div>
                                    </div>
                                </Link>
                            </FadeIn>

                            <FadeIn direction="up">
                                <section className="insight-grid">
                                    {secondary.map((article) => (
                                        <Link key={article.id} href={`${prefix}/insight/${article.slug}`} className="insight-card">
                                            <div className="insight-card__image">
                                                <img src={article.image} alt="" loading="lazy" decoding="async" />
                                                <span>{article.category}</span>
                                            </div>
                                            <div className="insight-card__copy">
                                                {/* Meta Hidden Per Request */}
                                                <h2>{article.title}</h2>
                                                <span className="insight-link">
                                                    {text.readMore}
                                                    <ArrowRightIcon />
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </section>
                            </FadeIn>
                            
                            {hasMore && (
                                <FadeIn direction="up">
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px', marginBottom: '24px' }}>
                                        <button 
                                            onClick={() => setVisibleCount(prev => prev + 6)}
                                            style={{
                                                backgroundColor: '#1E2519',
                                                color: '#FFF',
                                                border: 'none',
                                                borderRadius: '999px',
                                                padding: '14px 32px',
                                                fontSize: '14px',
                                                fontWeight: 'bold',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.2s',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            }}
                                            onMouseOver={e => e.currentTarget.style.backgroundColor = '#131810'}
                                            onMouseOut={e => e.currentTarget.style.backgroundColor = '#1E2519'}
                                        >
                                            {locale === 'id' ? 'Muat Lebih Banyak' : 'Load More'}
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </FadeIn>
                            )}
                        </>
                    ) : (
                        <div className="insight-empty">{text.empty}</div>
                    )}

                    <FadeIn direction="up">
                        <section className="insight-cta">
                            <div>
                                <h2>{text.subscribeTitle[0]} <em>{text.subscribeTitle[1]}</em></h2>
                                <p>{text.subscribeText}</p>
                            </div>
                            <Link href={`${prefix}/contact`} className="insight-cta__button">
                                {text.subscribe}
                                <ArrowRightIcon diagonal />
                            </Link>
                        </section>
                    </FadeIn>
                </div>
            </section>
        </Layout>
    );
}
