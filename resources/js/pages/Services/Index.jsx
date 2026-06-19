import { Link, Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import SeoHead from '@/components/seo/SeoHead';
import Breadcrumb from '@/components/seo/Breadcrumb';
import FadeIn from '@/components/animations/FadeIn';

const ArrowRightIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const ArrowUpRightIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);

const SparkIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m12 3 1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8L12 3Z" />
        <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
        <path d="m5 15 .8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Z" />
    </svg>
);

const serviceIcons = {
    shariah: (
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
    sharia: (
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
    'sharia-foundation': (
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
    'trust-fund': (
        <>
            <path d="M3 10.5 12 3l9 7.5" />
            <path d="M5 10v10h14V10" />
            <path d="M9 20v-6h6v6" />
        </>
    ),
    investment: (
        <>
            <polyline points="4 17 10 11 14 15 21 8" />
            <polyline points="15 8 21 8 21 14" />
        </>
    ),
    financing: (
        <>
            <rect x="3" y="6" width="18" height="12" rx="2" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </>
    ),
};

const copy = {
    en: {
        badge: 'Core Services',
        heroTitle: ['Four Pillars of', 'What We Offer'],
        heroText: 'Fostering transparent, interest-free partnerships where financial risks and rewards are shared equitably.',
        learnMore: 'Learn more',
        ctaTitle: ['Ready to', 'engage?'],
        ctaText: 'Submit a one-page summary or schedule a confidential call.',
        submit: 'Submit project',
        contact: 'Contact us',
        blueprintLabel: 'How We Work',
        blueprintTitle: ['Our Operational', 'Blueprint'],
        services: {
            shariah: {
                num: '01',
                title: 'Sharia Foundation',
                badge: 'Compliance',
                desc: 'Every investment is structured under rigorous Sharia principles that ensure alignment with Islamic values in any capital deployment.',
            },
            sharia: {
                num: '01',
                title: 'Sharia Foundation',
                badge: 'Compliance',
                desc: 'Every investment is structured under rigorous Sharia principles that ensure alignment with Islamic values in any capital deployment.',
            },
            'sharia-foundation': {
                num: '01',
                title: 'Sharia Foundation',
                badge: 'Compliance',
                desc: 'Every investment is structured under rigorous Sharia principles that ensure alignment with Islamic values in any capital deployment.',
            },
            'trust-fund': {
                num: '02',
                title: 'Trust Fund',
                badge: 'Fiduciary',
                desc: 'Capital managed with discipline, transparency, and long-term responsibility that preserves trust and pursues sustainable value creation.',
            },
            investment: {
                num: '03',
                title: 'Investment',
                badge: 'Equity',
                desc: 'Direct capital allocation focused on proven, productive projects to build sustainable growth.',
            },
            financing: {
                num: '04',
                title: 'Financing',
                badge: 'Asset-backed',
                desc: 'Access interest-free funding solutions to scale up your business. Our asset-based structures provide a secure path to capital without the burden of Riba.',
            },
        },
        blueprint: [
            ['01', 'Sourcing', 'Identifying project opportunities through trusted networks.'],
            ['02', 'Sharia review', 'Independent supervisory board that ensures adherence to Sharia.'],
            ['03', 'Underwriting', 'Rigorous due diligence to assess and mitigate investment risks.'],
            ['04', 'Partnership', 'Capital deployment paired with quarterly review and audit cycles.'],
        ],
    },
    id: {
        badge: 'Layanan Inti',
        heroTitle: ['Empat Pilar dari', 'Apa yang Kami Tawarkan'],
        heroText: 'Mendorong kemitraan yang transparan dan bebas bunga, dengan risiko serta imbal hasil finansial yang dibagi secara adil.',
        learnMore: 'Pelajari',
        ctaTitle: ['Siap untuk', 'terhubung?'],
        ctaText: 'Kirimkan ringkasan satu halaman atau jadwalkan panggilan rahasia.',
        submit: 'Ajukan proyek',
        contact: 'Hubungi kami',
        blueprintLabel: 'Cara Kami Bekerja',
        blueprintTitle: ['Blueprint Operasional', 'Kami'],
        services: {
            shariah: {
                num: '01',
                title: 'Fondasi Syariah',
                badge: 'Kepatuhan',
                desc: 'Setiap investasi disusun berdasarkan prinsip Syariah yang ketat untuk memastikan keselarasan dengan nilai Islam dalam setiap penempatan modal.',
            },
            sharia: {
                num: '01',
                title: 'Fondasi Syariah',
                badge: 'Kepatuhan',
                desc: 'Setiap investasi disusun berdasarkan prinsip Syariah yang ketat untuk memastikan keselarasan dengan nilai Islam dalam setiap penempatan modal.',
            },
            'sharia-foundation': {
                num: '01',
                title: 'Fondasi Syariah',
                badge: 'Kepatuhan',
                desc: 'Setiap investasi disusun berdasarkan prinsip Syariah yang ketat untuk memastikan keselarasan dengan nilai Islam dalam setiap penempatan modal.',
            },
            'trust-fund': {
                num: '02',
                title: 'Dana Amanah',
                badge: 'Fidusia',
                desc: 'Modal dikelola dengan disiplin, transparansi, dan tanggung jawab jangka panjang untuk menjaga kepercayaan dan menciptakan nilai berkelanjutan.',
            },
            investment: {
                num: '03',
                title: 'Investasi',
                badge: 'Ekuitas',
                desc: 'Alokasi modal langsung pada proyek produktif yang terbukti untuk membangun pertumbuhan berkelanjutan.',
            },
            financing: {
                num: '04',
                title: 'Pembiayaan',
                badge: 'Berbasis aset',
                desc: 'Akses solusi pendanaan bebas bunga untuk mengembangkan bisnis. Struktur berbasis aset kami menyediakan jalur modal yang aman tanpa beban Riba.',
            },
        },
        blueprint: [
            ['01', 'Sourcing', 'Mengidentifikasi peluang proyek melalui jaringan terpercaya.'],
            ['02', 'Tinjauan Syariah', 'Dewan pengawas independen yang memastikan kepatuhan terhadap Syariah.'],
            ['03', 'Underwriting', 'Uji tuntas menyeluruh untuk menilai dan memitigasi risiko investasi.'],
            ['04', 'Kemitraan', 'Penempatan modal disertai siklus tinjauan triwulanan dan audit.'],
        ],
    },
};

const serviceOrder = ['shariah', 'trust-fund', 'investment', 'financing'];

function serviceSlug(service) {
    return service.slug === 'sharia' ? 'shariah' : service.slug;
}

function normalizeServices(services, localeCopy, locale) {
    const source = services && services.length ? services : serviceOrder.map((slug, index) => ({ id: index + 1, slug }));
    const ordered = [...source].sort((a, b) => {
        const orderA = a.order !== undefined && a.order !== null ? Number(a.order) : 999;
        const orderB = b.order !== undefined && b.order !== null ? Number(b.order) : 999;
        return orderA - orderB;
    });

    return ordered.slice(0, 4).map((service, index) => {
        const slug = serviceSlug(service);
        const fallback = localeCopy.services[slug] || {
            num: String(index + 1).padStart(2, '0'),
            title: service.name_en || 'Service',
            badge: 'Service',
            desc: service.subtitle_en || '',
        };

        return {
            ...fallback,
            id: service.id || slug,
            slug: service.slug || slug,
            iconSlug: slug,
            num: String(index + 1).padStart(2, '0'),
            title: locale === 'id' && service.name_id ? service.name_id : (service.name_en || fallback.title),
            desc: locale === 'id' && service.description_id ? service.description_id : (service.description_en || fallback.desc)
        };
    });
}

export default function ServicesIndex({ locale, services, settings }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';
    const text = copy[locale] || copy.en;
    const serviceCards = normalizeServices(services, text, locale);

    const breadcrumbItems = [
        { label: locale === 'id' ? 'Beranda' : 'Home', url: prefix || '/' },
        { label: t('nav.services'), url: `${prefix}/services` }
    ];

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead title={t('nav.services')} description="Comprehensive Sharia-compliant corporate finance and investment services." />

            <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
                <Breadcrumb items={breadcrumbItems} />
                <FadeIn direction="up">
                    <section className="services-hero">
                        <div className="services-hero__copy">
                            <span className="services-pill">
                                <SparkIcon />
                                {text.badge}
                            </span>
                            <h1>
                                {text.heroTitle[0]} <em>{text.heroTitle[1]}</em>
                            </h1>
                            <p>{text.heroText}</p>
                        </div>
                        <div className="services-hero__media">
                            <img src="/images/article-office.png" alt="" loading="lazy" decoding="async" />
                        </div>
                    </section>
                </FadeIn>
            </div>

            <section className="services-page">
                <div className="container services-stack">

                    <FadeIn direction="up">
                        <section className="services-grid">
                            {serviceCards.map((service) => {
                                const isFeatured = service.iconSlug === 'investment';

                                return (
                                    <Link
                                        key={service.id}
                                        href={`${prefix}/services/${service.slug}`}
                                        className={`services-card ${isFeatured ? 'services-card--featured' : ''}`}
                                    >
                                        <div className="services-card__top">
                                            <span className="services-card__icon">
                                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    {serviceIcons[service.iconSlug] || serviceIcons.shariah}
                                                </svg>
                                            </span>
                                            <strong>{service.num}</strong>
                                        </div>
                                        <span className="services-card__badge">{service.badge}</span>
                                        <h2>{service.title}</h2>
                                        <p>{service.desc}</p>
                                        <span className="services-card__link">
                                            {text.learnMore}
                                            <ArrowRightIcon />
                                        </span>
                                    </Link>
                                );
                            })}
                        </section>
                    </FadeIn>

                    <FadeIn direction="up">
                        <section className="services-blueprint">
                            <div className="services-blueprint__heading">
                                <span>{text.blueprintLabel}</span>
                                <h2>{text.blueprintTitle[0]} <em>{text.blueprintTitle[1]}</em></h2>
                            </div>
                            <div className="services-blueprint__grid">
                                {text.blueprint.map(([num, title, desc]) => (
                                    <article key={num}>
                                        <span>{num}</span>
                                        <h3>{title}</h3>
                                        <p>{desc}</p>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn direction="up">
                        <section className="services-cta">
                            <div>
                                <h2>{text.ctaTitle[0]} <em>{text.ctaTitle[1]}</em></h2>
                                <p>{text.ctaText}</p>
                            </div>
                            <div className="services-cta__actions">
                                <Link href={`${prefix}/contact`} className="services-button services-button--light">
                                    {text.submit}
                                    <ArrowUpRightIcon />
                                </Link>
                                <Link href={`${prefix}/contact`} className="services-button services-button--ghost">
                                    {text.contact}
                                    <ArrowRightIcon />
                                </Link>
                            </div>
                        </section>
                    </FadeIn>
                </div>
            </section>
        </Layout>
    );
}
