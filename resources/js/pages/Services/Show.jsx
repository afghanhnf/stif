import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import SeoHead from '@/components/seo/SeoHead';
import Breadcrumb from '@/components/seo/Breadcrumb';
import FadeIn from '@/components/animations/FadeIn';

/* ─── Inline SVG Icons ─── */
const ArrowUpRightIcon = ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);
const ArrowLeftIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
    </svg>
);
const ShieldIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);
const FileTextIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
);
const ScaleIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z" />
        <path d="M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z" />
        <path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
);
const BookOpenIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
);
const UsersIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);
const SearchIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);
const CheckCircleIcon = ({ stroke = '#9DA65D' }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);
const HandshakeIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88" />
        <path d="m2 11 5-5c.5-.5 1.5-.5 2 0l3 3" /><path d="m17 6 5 5" />
    </svg>
);
const HomeIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
    </svg>
);
const TrendUpIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 14 15 21 8" />
        <polyline points="15 8 21 8 21 14" />
    </svg>
);
const CreditCardIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);
const ChatIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

/* ─── Shariah-specific content ─── */
const shariahCopy = {
    en: {
        backLabel: 'All services',
        badge: '01 . COMPLIANCE',
        heroTitle: 'Sharia Foundation',
        paragraphs: [
            "Every investment is structured under Sharia principles that ensure fairness to all stakeholders. Our main goal is barakah, while financial return will follow.",
            "Our sharia supervisory expert consists of independent scholars who reviews every contract and partnership structure before capital is committed. Reports are published quarterly to LPs.",
            "Our international business expert will not only monitor but also involve in advising and guiding daily operation of your projects."
        ],
        typicalTickets: {
            label: 'TYPICAL TICKETS',
            title: 'Capital range we deploy',
            minLabel: 'Minimum',
            minVal: 'USD 100K',
            medLabel: 'Median',
            medVal: 'USD 1M',
            maxLabel: 'Maximum',
            maxVal: 'USD 5M'
        },
        whatYouGet: {
            title: 'WHAT YOU GET***',
            items: [
                'Independent sharia scholar review',
                'International business expert assistance',
                'Quarterly progress review'
            ],
            btn: 'Submit a mandate'
        },
        shariaBasis: {
            label: 'SHARIA BASIS',
            title: 'The jurisprudence behind the structure',
            desc: 'Every Sharia Foundation mandate is underwritten by review from top sharia scholars.',
            link: 'Read library'
        },
        explore: {
            title: 'EXPLORE OTHER SERVICES',
            services: [
                {
                    title: 'Trust Fund',
                    sub: 'Fiduciary',
                    slug: 'trust-fund',
                    icon: 'home'
                },
                {
                    title: 'Investment',
                    sub: 'Equity',
                    slug: 'investment',
                    icon: 'trend-up'
                },
                {
                    title: 'Financing',
                    sub: 'Asset-Backed',
                    slug: 'financing',
                    icon: 'credit-card'
                }
            ]
        }
    },
    id: {
        backLabel: 'Semua layanan',
        badge: '01 . KEPATUHAN',
        heroTitle: 'Fondasi Syariah',
        paragraphs: [
            "Setiap investasi distrukturkan berdasarkan prinsip Syariah yang memastikan keadilan bagi semua pemangku kepentingan. Tujuan utama kami adalah barakah, sedangkan keuntungan finansial akan mengikuti.",
            "Pakar pengawas syariah kami terdiri dari akademisi independen yang meninjau setiap kontrak dan struktur kemitraan sebelum modal ditempatkan. Laporan diterbitkan triwulanan kepada LP.",
            "Pakar bisnis internasional kami tidak hanya memantau tetapi juga terlibat dalam memberikan saran dan memandu operasional harian proyek Anda."
        ],
        typicalTickets: {
            label: 'TIKET UMUM',
            title: 'Kisaran modal yang kami salurkan',
            minLabel: 'Minimum',
            minVal: 'USD 100K',
            medLabel: 'Median',
            medVal: 'USD 1M',
            maxLabel: 'Maksimum',
            maxVal: 'USD 5M'
        },
        whatYouGet: {
            title: 'APA YANG ANDA DAPATKAN***',
            items: [
                'Tinjauan akademisi syariah independen',
                'Bantuan pakar bisnis internasional',
                'Tinjauan kemajuan triwulanan'
            ],
            btn: 'Ajukan mandat'
        },
        shariaBasis: {
            label: 'DASAR SYARIAH',
            title: 'Yurisprudensi di balik struktur',
            desc: 'Setiap mandat Sharia Foundation dijamin oleh tinjauan dari akademisi syariah terkemuka.',
            link: 'Baca pustaka'
        },
        explore: {
            title: 'EKSPLORASI LAYANAN LAIN',
            services: [
                {
                    title: 'Dana Amanah',
                    sub: 'Fiduciary',
                    slug: 'trust-fund',
                    icon: 'home'
                },
                {
                    title: 'Investasi',
                    sub: 'Ekuitas',
                    slug: 'investment',
                    icon: 'trend-up'
                },
                {
                    title: 'Pembiayaan',
                    sub: 'Didukung Aset',
                    slug: 'financing',
                    icon: 'credit-card'
                }
            ]
        }
    }
};

const genericCopy = {
    en: {
        backLabel: 'All Services',
        overviewLabel: 'OVERVIEW',
        detailLabel: 'IN DETAIL',
        submitProject: 'Submit a project',
        learnMore: 'Learn more about us',
        ctaLabel: 'GET STARTED',
        ctaTitle: ['Ready to structure your', 'next deal?'],
        ctaText: 'Connect with our advisory team to explore Sharia-compliant solutions tailored to your business needs.',
        ctaBtn: 'Contact us',
        ctaLink: 'View all services',
        emptyContent: 'Detailed content for this service will be available soon.',
    },
    id: {
        backLabel: 'Semua Layanan',
        overviewLabel: 'RINGKASAN',
        detailLabel: 'DETAIL',
        submitProject: 'Ajukan proyek',
        learnMore: 'Pelajari lebih lanjut tentang kami',
        ctaLabel: 'MULAI',
        ctaTitle: ['Siap menyusun', 'transaksi berikutnya?'],
        ctaText: 'Hubungi tim advisory kami untuk mengeksplorasi solusi sesuai Syariah yang disesuaikan dengan kebutuhan bisnis Anda.',
        ctaBtn: 'Hubungi kami',
        ctaLink: 'Lihat semua layanan',
        emptyContent: 'Konten detail untuk layanan ini akan segera tersedia.',
    },
};

const iconMap = {
    scale: ScaleIcon,
    shield: ShieldIcon,
    file: FileTextIcon,
    search: SearchIcon,
    users: UsersIcon,
    book: BookOpenIcon,
    handshake: HandshakeIcon,
};

/* ─────────────────────────────────────────────
   Check if a service slug is shariah-related
   ───────────────────────────────────────────── */
function isShariah(slug) {
    return /^(shariah|sharia|syariah)/.test((slug || '').toLowerCase());
}

/* ═════════════════════════════════════════════
   SHARIAH DEDICATED PAGE
   ═════════════════════════════════════════════ */
function ShariahPage({ locale, service, settings, prefix }) {
    const { t } = useTranslation();
    const text = shariahCopy[locale] || shariahCopy.en;
    const name = locale === 'id' && service.name_id ? service.name_id : (service.name_en || 'Sharia Foundation');

    const breadcrumbItems = [
        { label: locale === 'id' ? 'Beranda' : 'Home', url: prefix || '/' },
        { label: t('nav.services'), url: `${prefix}/services` },
        { label: name, url: `${prefix}/services/${service.slug}` }
    ];

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead title={name} description={text.paragraphs[0]} />

            <div style={{
                backgroundColor: '#F7F6F3',
                padding: '60px 0 100px',
                minHeight: '100vh',
                position: 'relative'
            }}>
                <div className="container">
                    <Breadcrumb items={breadcrumbItems} />
                    {/* Back Link */}
                    <div style={{ marginBottom: '24px' }}>
                        <Link href={`${prefix}/services`} style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '14px',
                            color: '#6C7266',
                            textDecoration: 'none',
                            fontWeight: 500,
                            transition: 'color 0.2s'
                        }}
                        onMouseOver={e => e.currentTarget.style.color = '#131810'}
                        onMouseOut={e => e.currentTarget.style.color = '#6C7266'}
                        >
                            <ArrowLeftIcon size={14} /> {text.backLabel}
                        </Link>
                    </div>

                    {/* Main Layout Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1.8fr 1fr',
                        gap: '24px',
                        alignItems: 'start'
                    }} className="shariah-grid">
                        
                        {/* Left Column (White Main Card) */}
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '32px',
                            padding: '48px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                        }} className="shariah-main-card">
                            
                            {/* Header Row */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                marginBottom: '36px'
                            }} className="shariah-header-row">
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '16px',
                                    backgroundColor: '#2E3A23',
                                    color: '#9DA65D',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifycontent: 'center',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexShrink: 0
                                }}>
                                    <ShieldIcon />
                                </div>
                                <div>
                                    <span style={{
                                        display: 'block',
                                        fontSize: '11px',
                                        fontWeight: 'bold',
                                        color: '#9DA65D',
                                        letterSpacing: '0.12em',
                                        marginBottom: '4px'
                                    }}>{text.badge}</span>
                                    <h1 style={{
                                        fontFamily: 'Josefin Sans, sans-serif',
                                        fontSize: 'clamp(28px, 4vw, 42px)',
                                        fontWeight: 300,
                                        color: '#131810',
                                        margin: 0,
                                        lineHeight: 1.1
                                    }}>{text.heroTitle}</h1>
                                </div>
                            </div>

                            {/* Descriptions */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '24px',
                                color: '#4A5243',
                                fontSize: '16px',
                                lineHeight: 1.75,
                                marginBottom: '48px'
                            }}>
                                {text.paragraphs.map((para, idx) => (
                                    <p key={idx} style={{ margin: 0 }}>{para}</p>
                                ))}
                            </div>

                            {/* Divider Line */}
                            <hr style={{
                                border: 'none',
                                borderTop: '1px solid #F1EFEC',
                                margin: '0 0 36px 0'
                            }} />

                            {/* Typical Tickets */}
                            <div>
                                <span style={{
                                    display: 'block',
                                    fontSize: '11px',
                                    fontWeight: 'bold',
                                    color: '#9DA65D',
                                    letterSpacing: '0.12em',
                                    marginBottom: '8px'
                                }}>{text.typicalTickets.label}</span>
                                <h3 style={{
                                    fontFamily: 'Josefin Sans, sans-serif',
                                    fontSize: '24px',
                                    fontWeight: 300,
                                    color: '#131810',
                                    margin: '0 0 28px 0'
                                }}>{text.typicalTickets.title}</h3>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '24px'
                                }} className="tickets-grid">
                                    <div>
                                        <span style={{ display: 'block', fontSize: '13px', color: '#8E968B', marginBottom: '4px' }}>
                                            {text.typicalTickets.minLabel}
                                        </span>
                                        <strong style={{ display: 'block', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '400', color: '#131810', fontFamily: 'Josefin Sans, sans-serif' }}>
                                            {text.typicalTickets.minVal}
                                        </strong>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '13px', color: '#8E968B', marginBottom: '4px' }}>
                                            {text.typicalTickets.medLabel}
                                        </span>
                                        <strong style={{ display: 'block', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '400', color: '#131810', fontFamily: 'Josefin Sans, sans-serif' }}>
                                            {text.typicalTickets.medVal}
                                        </strong>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '13px', color: '#8E968B', marginBottom: '4px' }}>
                                            {text.typicalTickets.maxLabel}
                                        </span>
                                        <strong style={{ display: 'block', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '400', color: '#131810', fontFamily: 'Josefin Sans, sans-serif' }}>
                                            {text.typicalTickets.maxVal}
                                        </strong>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right Column (Cards 1 and 2) */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px'
                        }} className="shariah-sidebar">
                            
                            {/* Side Card 1 (Dark Green) */}
                            <div style={{
                                backgroundColor: '#2C3621',
                                borderRadius: '32px',
                                padding: '40px',
                                color: '#FFFFFF'
                            }}>
                                <span style={{
                                    display: 'block',
                                    fontSize: '11px',
                                    fontWeight: 'bold',
                                    color: '#A8B67D',
                                    letterSpacing: '0.12em',
                                    marginBottom: '28px'
                                }}>{text.whatYouGet.title}</span>

                                <ul style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '18px',
                                    marginBottom: '36px',
                                    padding: 0,
                                    margin: '0 0 36px 0'
                                }}>
                                    {text.whatYouGet.items.map((item, idx) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            fontSize: '14px',
                                            lineHeight: 1.4,
                                            color: '#ECEBE6'
                                        }}>
                                            <CheckCircleIcon stroke="#A8B67D" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href={`${prefix}/contact`} style={{
                                    backgroundColor: '#FFFFFF',
                                    color: '#131810',
                                    borderRadius: '999px',
                                    padding: '14px 28px',
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.2s, transform 0.2s',
                                    cursor: 'pointer'
                                }}
                                onMouseOver={e => { e.currentTarget.style.backgroundColor = '#ECEBE6'; }}
                                onMouseOut={e => { e.currentTarget.style.backgroundColor = '#FFFFFF'; }}
                                >
                                    {text.whatYouGet.btn} <ArrowUpRightIcon size={14} />
                                </Link>
                            </div>

                            {/* Side Card 2 (White) */}
                            <div style={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '32px',
                                padding: '40px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                            }}>
                                <span style={{
                                    display: 'block',
                                    fontSize: '11px',
                                    fontWeight: 'bold',
                                    color: '#9DA65D',
                                    letterSpacing: '0.12em',
                                    marginBottom: '20px'
                                }}>{text.shariaBasis.label}</span>

                                <h2 style={{
                                    fontFamily: 'Josefin Sans, sans-serif',
                                    fontSize: '24px',
                                    fontWeight: 300,
                                    color: '#131810',
                                    lineHeight: 1.25,
                                    margin: '0 0 16px 0'
                                }}>{text.shariaBasis.title}</h2>

                                <p style={{
                                    fontSize: '15px',
                                    lineHeight: 1.6,
                                    color: '#6C7266',
                                    margin: '0 0 28px 0'
                                }}>{text.shariaBasis.desc}</p>

                                <Link href={`${prefix}/sharia-library`} style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: '#6B6D0F',
                                    fontWeight: 'bold',
                                    fontSize: '14px',
                                    textDecoration: 'none',
                                    transition: 'gap 0.2s'
                                }}
                                onMouseOver={e => e.currentTarget.style.gap = '12px'}
                                onMouseOut={e => e.currentTarget.style.gap = '8px'}
                                >
                                    {text.shariaBasis.link} <span style={{ fontSize: '16px', lineHeight: 1 }}>→</span>
                                </Link>
                            </div>

                        </div>

                    </div>

                    {/* Explore Other Services Section */}
                    <div style={{ marginTop: '80px' }}>
                        <span style={{
                            display: 'block',
                            fontSize: '11px',
                            fontWeight: 'bold',
                            color: '#9DA65D',
                            letterSpacing: '0.12em',
                            marginBottom: '24px'
                        }}>{text.explore.title}</span>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '20px'
                        }} className="explore-grid">
                            {text.explore.services.map((svc, idx) => {
                                let IconC = HomeIcon;
                                if (svc.icon === 'trend-up') IconC = TrendUpIcon;
                                if (svc.icon === 'credit-card') IconC = CreditCardIcon;

                                return (
                                    <Link key={idx} href={`${prefix}/services/${svc.slug}`} style={{
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: '20px',
                                        padding: '28px',
                                        textDecoration: 'none',
                                        transition: 'box-shadow 0.3s, transform 0.3s',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
                                        display: 'block'
                                    }}
                                    onMouseOver={e => { e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.05)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                    onMouseOut={e => { e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.01)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                    >
                                        <div style={{
                                            color: '#6B6D0F',
                                            marginBottom: '16px'
                                        }}>
                                            <IconC size={26} />
                                        </div>
                                        <h4 style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            color: '#131810',
                                            margin: '0 0 4px 0'
                                        }}>{svc.title}</h4>
                                        <span style={{
                                            fontSize: '14px',
                                            color: '#8E968B'
                                        }}>{svc.sub}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                </div>

                {/* Floating Contact Button */}
                <Link href={`${prefix}/contact`} style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#4E5A44',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                    transition: 'transform 0.2s, background-color 0.2s',
                    zIndex: 100,
                    cursor: 'pointer'
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.backgroundColor = '#3B4533'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#4E5A44'; }}
                >
                    <ChatIcon size={24} />
                </Link>

            </div>

            {/* Layout responsive style block */}
            <style>{`
                @media (max-width: 991px) {
                    .shariah-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .explore-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 767px) {
                    .explore-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .tickets-grid {
                        grid-template-columns: 1fr !important;
                        gap: 16px !important;
                    }
                    .shariah-main-card {
                        padding: 30px !important;
                    }
                }
            `}</style>
        </Layout>
    );
}

/* ═════════════════════════════════════════════
   GENERIC SERVICE PAGE
   ═════════════════════════════════════════════ */
function GenericServicePage({ locale, service, settings, prefix }) {
    const { t } = useTranslation();
    const text = genericCopy[locale] || genericCopy.en;
    const name = locale === 'id' && service.name_id ? service.name_id : service.name_en;
    const subtitle = locale === 'id' && service.subtitle_id ? service.subtitle_id : service.subtitle_en;
    const description = locale === 'id' && service.description_id ? service.description_id : service.description_en;
    const content = locale === 'id' && service.content_id ? service.content_id : service.content_en;

    const breadcrumbItems = [
        { label: locale === 'id' ? 'Beranda' : 'Home', url: prefix || '/' },
        { label: t('nav.services'), url: `${prefix}/services` },
        { label: name, url: `${prefix}/services/${service.slug}` }
    ];

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead title={name} description={description} />

            {/* Hero */}
            <section style={{
                backgroundColor: '#131810', padding: '100px 0 80px', position: 'relative', overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(circle at 15% 85%, rgba(107,109,15,0.08) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(107,109,15,0.05) 0%, transparent 50%)',
                    pointerEvents: 'none',
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ marginBottom: '24px' }}>
                        <Breadcrumb items={breadcrumbItems} dark={true} />
                    </div>
                    <FadeIn direction="up">
                        <Link href={`${prefix}/services`} style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            fontSize: '13px', fontWeight: 600, color: '#A3A8A0',
                            textDecoration: 'none', marginBottom: '40px', transition: 'color 0.2s',
                        }}
                            onMouseOver={e => e.currentTarget.style.color = '#FFF'}
                            onMouseOut={e => e.currentTarget.style.color = '#A3A8A0'}
                        >
                            <ArrowLeftIcon size={16} />{text.backLabel}
                        </Link>
                        <span style={{
                            fontSize: '11px', fontWeight: 'bold', color: '#9DA65D',
                            letterSpacing: '0.1em', display: 'inline-flex', alignItems: 'center',
                            gap: '8px', marginBottom: '20px', textTransform: 'uppercase',
                        }}>
                            <span style={{ width: '24px', height: '1px', backgroundColor: '#9DA65D', display: 'inline-block' }} />
                            {t('nav.services') || 'SERVICES'}
                        </span>
                        <h1 style={{
                            fontFamily: 'Josefin Sans, sans-serif', fontSize: 'clamp(36px, 5vw, 60px)',
                            fontWeight: 300, color: '#FFFFFF', lineHeight: 1.1, margin: '0 0 20px', maxWidth: '720px',
                        }}>{name}</h1>
                        {subtitle && (
                            <p style={{
                                fontFamily: 'Josefin Sans, sans-serif', fontSize: 'clamp(18px, 2.5vw, 24px)',
                                fontWeight: 300, fontStyle: 'italic', color: '#9DA65D',
                                lineHeight: 1.4, margin: 0, maxWidth: '600px',
                            }}>{subtitle}</p>
                        )}
                    </FadeIn>
                </div>
            </section>

            {/* Content */}
            <section style={{ backgroundColor: '#F7F6F5', padding: '64px 0 80px' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '48px', alignItems: 'start' }}>
                        <FadeIn direction="up">
                            <aside style={{ position: 'sticky', top: '100px' }}>
                                <div style={{
                                    backgroundColor: '#FFF', borderRadius: '20px', padding: '28px',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)', marginBottom: '16px',
                                }}>
                                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#9DA65D', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
                                        {text.overviewLabel}
                                    </span>
                                    {description && <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#6C6C55', margin: '0 0 24px' }}>{description}</p>}
                                    <Link href={`${prefix}/contact`} style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                                        backgroundColor: '#131810', color: '#FFF', borderRadius: '999px',
                                        padding: '12px 24px', fontSize: '13px', fontWeight: 700,
                                        textDecoration: 'none', width: '100%', justifyContent: 'center',
                                        transition: 'background-color 0.2s',
                                    }}
                                        onMouseOver={e => e.currentTarget.style.backgroundColor = '#1E2519'}
                                        onMouseOut={e => e.currentTarget.style.backgroundColor = '#131810'}
                                    >
                                        {text.submitProject}<ArrowUpRightIcon size={13} />
                                    </Link>
                                </div>
                                <div style={{ backgroundColor: '#FFF', borderRadius: '20px', padding: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                                    <Link href={`${prefix}/who-we-are`} style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                        fontSize: '14px', fontWeight: 600, color: '#6B6D0F', textDecoration: 'none',
                                    }}>
                                        {text.learnMore}<ArrowUpRightIcon size={13} />
                                    </Link>
                                </div>
                            </aside>
                        </FadeIn>
                        <FadeIn direction="up" delay={100}>
                            <div style={{
                                backgroundColor: '#FFF', borderRadius: '24px', padding: '48px',
                                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                            }}>
                                <span style={{ fontSize: '11px', fontWeight: 700, color: '#9DA65D', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '28px' }}>
                                    {text.detailLabel}
                                </span>
                                {content ? (
                                    <div className="prose" style={{ fontSize: '16px', lineHeight: 1.8, color: '#3D3D2B' }}
                                        dangerouslySetInnerHTML={{ __html: content }} />
                                ) : (
                                    <div style={{ textAlign: 'center', padding: '60px 40px', backgroundColor: '#FAFAF9', borderRadius: '16px' }}>
                                        <div style={{ width: '56px', height: '56px', backgroundColor: '#F1EFEC', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B6D0F" strokeWidth="1.8">
                                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                <polyline points="14 2 14 8 20 8" />
                                                <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                                            </svg>
                                        </div>
                                        <p style={{ fontSize: '15px', color: '#6C6C55', margin: 0 }}>{text.emptyContent}</p>
                                    </div>
                                )}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ backgroundColor: '#F7F6F5', paddingBottom: '80px', paddingTop: 0 }}>
                <div className="container">
                    <FadeIn direction="up">
                        <div style={{
                            backgroundColor: '#1E2519', borderRadius: '32px', padding: '56px',
                            display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'center',
                        }}>
                            <div>
                                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#9DA65D', letterSpacing: '0.05em', display: 'block', marginBottom: '16px', textTransform: 'uppercase' }}>
                                    {text.ctaLabel}
                                </span>
                                <h2 style={{ fontFamily: 'Josefin Sans, sans-serif', fontSize: '42px', fontWeight: 300, color: '#FFF', margin: 0, lineHeight: 1.15 }}>
                                    {text.ctaTitle[0]}{' '}<span style={{ fontStyle: 'italic', color: '#9DA65D' }}>{text.ctaTitle[1]}</span>
                                </h2>
                                <p style={{ maxWidth: '480px', color: '#A3A8A0', fontSize: '15px', lineHeight: 1.6, marginTop: '20px', marginBottom: 0 }}>{text.ctaText}</p>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                                <Link href={`${prefix}/contact`} style={{
                                    backgroundColor: '#FFF', color: '#131810', borderRadius: '999px',
                                    padding: '14px 28px', fontSize: '14px', fontWeight: 'bold',
                                    display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none',
                                }}>{text.ctaBtn}<ArrowUpRightIcon size={14} /></Link>
                                <Link href={`${prefix}/services`} style={{
                                    border: '1px solid #4F5A48', color: '#FFF', borderRadius: '999px',
                                    padding: '14px 28px', fontSize: '14px', fontWeight: 'bold',
                                    backgroundColor: 'transparent', textDecoration: 'none',
                                }}>{text.ctaLink}</Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <style>{`
                @media (max-width: 900px) {
                    .container > div[style*="grid-template-columns: 300px"] { grid-template-columns: 1fr !important; }
                }
                @media (max-width: 768px) {
                    div[style*="grid-template-columns: 1fr auto"][style*="padding: 56px"] { grid-template-columns: 1fr !important; padding: 32px !important; text-align: center; }
                }
                .prose h2 { font-family: 'Josefin Sans', sans-serif; font-size: 24px; font-weight: 600; color: #131810; margin-top: 32px; margin-bottom: 12px; }
                .prose h3 { font-family: 'Josefin Sans', sans-serif; font-size: 20px; font-weight: 600; color: #131810; margin-top: 24px; margin-bottom: 8px; }
                .prose p { margin-bottom: 16px; }
                .prose ul, .prose ol { margin-bottom: 16px; padding-left: 20px; }
                .prose li { margin-bottom: 6px; }
                .prose strong { color: #131810; font-weight: 600; }
                .prose a { color: #6B6D0F; text-decoration: underline; }
                .prose blockquote { border-left: 3px solid #9DA65D; padding-left: 20px; margin: 24px 0; font-style: italic; color: #6C6C55; }
                .prose img { border-radius: 16px; max-width: 100%; margin: 24px 0; }
            `}</style>
        </Layout>
    );
}

/* ─────────────────────────────────────────────
   Check if a service slug is trust-fund-related
   ───────────────────────────────────────────── */
function isTrustFund(slug) {
    return /^(trust-fund|trustfund|dana-amanah)/.test((slug || '').toLowerCase());
}

/* ─── Trust Fund translation copy ─── */
const trustFundCopy = {
    en: {
        backLabel: 'All services',
        badge: '02 . FIDUCIARY',
        heroTitle: 'Trust Fund',
        paragraphs: [
            "Capital managed with discipline, transparency, and long-term responsibility that preserves trust and pursues sustainable value creation.",
            "We administer waqf, zakat and family endowment vehicles with the same rigour as institutional capital. Beneficiaries receive direct quarterly disbursement reports."
        ],
        whatYouGet: {
            title: 'WHAT YOU GET***',
            items: [
                'Waqf & zakat administration',
                'Family endowment vehicles',
                'Beneficiary disbursement ledger',
                'Annual independent audit'
            ],
            btn: 'Submit a mandate'
        },
        shariaBasis: {
            label: 'SHARIA BASIS',
            title: 'The jurisprudence behind the structure',
            desc: 'Every Sharia Foundation mandate is underwritten by review from top sharia scholars.',
            link: 'Read library'
        },
        typicalTickets: {
            label: 'TYPICAL TICKETS',
            title: 'Capital range we deploy',
            minLabel: 'Minimum',
            minVal: 'USD 100K',
            medLabel: 'Median',
            medVal: 'USD 1M',
            maxLabel: 'Maximum',
            maxVal: 'USD 5M'
        },
        explore: {
            title: 'EXPLORE OTHER SERVICES',
            services: [
                {
                    title: 'Sharia Foundation',
                    sub: 'Compliance',
                    slug: 'shariah',
                    icon: 'shield'
                },
                {
                    title: 'Investment',
                    sub: 'Equity',
                    slug: 'investment',
                    icon: 'trend-up'
                },
                {
                    title: 'Financing',
                    sub: 'Asset-Backed',
                    slug: 'financing',
                    icon: 'credit-card'
                }
            ]
        }
    },
    id: {
        backLabel: 'Semua layanan',
        badge: '02 . FIDUSIA',
        heroTitle: 'Dana Amanah',
        paragraphs: [
            "Modal dikelola dengan disiplin, transparansi, dan tanggung jawab jangka panjang yang menjaga kepercayaan dan mengupayakan penciptaan nilai berkelanjutan.",
            "Kami mengelola kendaraan wakaf, zakat, dan dana abadi keluarga dengan ketelitian yang sama seperti modal institusional. Penerima manfaat menerima laporan pencairan triwulanan secara langsung."
        ],
        whatYouGet: {
            title: 'APA YANG ANDA DAPATKAN***',
            items: [
                'Administrasi wakaf & zakat',
                'Kendaraan dana abadi keluarga',
                'Buku besar pencairan penerima manfaat',
                'Audit independen tahunan'
            ],
            btn: 'Ajukan mandat'
        },
        shariaBasis: {
            label: 'DASAR SYARIAH',
            title: 'Yurisprudensi di balik struktur',
            desc: 'Setiap mandat Sharia Foundation dijamin oleh tinjauan dari akademisi syariah terkemuka.',
            link: 'Baca pustaka'
        },
        typicalTickets: {
            label: 'TIKET UMUM',
            title: 'Kisaran modal yang kami salurkan',
            minLabel: 'Minimum',
            minVal: 'USD 100K',
            medLabel: 'Median',
            medVal: 'USD 1M',
            maxLabel: 'Maksimum',
            maxVal: 'USD 5M'
        },
        explore: {
            title: 'EKSPLORASI LAYANAN LAIN',
            services: [
                {
                    title: 'Fondasi Syariah',
                    sub: 'Kepatuhan',
                    slug: 'shariah',
                    icon: 'shield'
                },
                {
                    title: 'Investasi',
                    sub: 'Ekuitas',
                    slug: 'investment',
                    icon: 'trend-up'
                },
                {
                    title: 'Pembiayaan',
                    sub: 'Didukung Aset',
                    slug: 'financing',
                    icon: 'credit-card'
                }
            ]
        }
    }
};

/* ─── Trust Fund Page Component ─── */
function TrustFundPage({ locale, service, settings, prefix }) {
    const { t } = useTranslation();
    const text = trustFundCopy[locale] || trustFundCopy.en;
    const name = locale === 'id' && service.name_id ? service.name_id : (service.name_en || 'Trust Fund');

    const breadcrumbItems = [
        { label: locale === 'id' ? 'Beranda' : 'Home', url: prefix || '/' },
        { label: t('nav.services'), url: `${prefix}/services` },
        { label: name, url: `${prefix}/services/${service.slug}` }
    ];

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead title={name} description={text.paragraphs[0]} />

            <div style={{
                backgroundColor: '#F7F6F3',
                padding: '60px 0 100px',
                minHeight: '100vh',
                position: 'relative'
            }}>
                <div className="container">
                    <Breadcrumb items={breadcrumbItems} />
                    
                    {/* Back Link */}
                    <div style={{ marginBottom: '24px' }}>
                        <Link href={`${prefix}/services`} style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '14px',
                            color: '#6C7266',
                            textDecoration: 'none',
                            fontWeight: 500,
                            transition: 'color 0.2s'
                        }}
                        onMouseOver={e => e.currentTarget.style.color = '#131810'}
                        onMouseOut={e => e.currentTarget.style.color = '#6C7266'}
                        >
                            <ArrowLeftIcon size={14} /> {text.backLabel}
                        </Link>
                    </div>

                    {/* Top Row Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1.8fr 1fr',
                        gap: '24px',
                        alignItems: 'stretch',
                        marginBottom: '24px'
                    }} className="trustfund-top-grid">
                        
                        {/* Left Card: Info */}
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '32px',
                            padding: '48px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }} className="trustfund-info-card">
                            
                            {/* Header Row */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                marginBottom: '32px'
                            }} className="trustfund-header-row">
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '16px',
                                    backgroundColor: '#2E3A23',
                                    color: '#9DA65D',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <HomeIcon size={28} />
                                </div>
                                <div>
                                    <span style={{
                                        display: 'block',
                                        fontSize: '11px',
                                        fontWeight: 'bold',
                                        color: '#9DA65D',
                                        letterSpacing: '0.12em',
                                        marginBottom: '4px'
                                    }}>{text.badge}</span>
                                    <h1 style={{
                                        fontFamily: 'Josefin Sans, sans-serif',
                                        fontSize: 'clamp(28px, 4vw, 42px)',
                                        fontWeight: 300,
                                        color: '#131810',
                                        margin: 0,
                                        lineHeight: 1.1
                                    }}>{text.heroTitle}</h1>
                                </div>
                            </div>

                            {/* Descriptions */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                color: '#4A5243',
                                fontSize: '16px',
                                lineHeight: 1.75
                            }}>
                                {text.paragraphs.map((para, idx) => (
                                    <p key={idx} style={{ margin: 0 }}>{para}</p>
                                ))}
                            </div>
                        </div>

                        {/* Right Card: What You Get */}
                        <div style={{
                            backgroundColor: '#2C3621',
                            borderRadius: '32px',
                            padding: '40px',
                            color: '#FFFFFF',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }} className="trustfund-sidebar-card">
                            <div>
                                <span style={{
                                    display: 'block',
                                    fontSize: '11px',
                                    fontWeight: 'bold',
                                    color: '#A8B67D',
                                    letterSpacing: '0.12em',
                                    marginBottom: '28px'
                                }}>{text.whatYouGet.title}</span>

                                <ul style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '18px',
                                    padding: 0,
                                    margin: '0 0 36px 0'
                                }}>
                                    {text.whatYouGet.items.map((item, idx) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            fontSize: '14px',
                                            lineHeight: 1.4,
                                            color: '#ECEBE6'
                                        }}>
                                            <CheckCircleIcon stroke="#A8B67D" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href={`${prefix}/contact`} style={{
                                backgroundColor: '#FFFFFF',
                                color: '#131810',
                                borderRadius: '999px',
                                padding: '14px 28px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                textDecoration: 'none',
                                transition: 'background-color 0.2s, transform 0.2s',
                                cursor: 'pointer',
                                alignSelf: 'flex-start'
                            }}
                            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#ECEBE6'; }}
                            onMouseOut={e => { e.currentTarget.style.backgroundColor = '#FFFFFF'; }}
                            >
                                {text.whatYouGet.btn} <ArrowUpRightIcon size={14} />
                            </Link>
                        </div>

                    </div>

                    {/* Bottom Row Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '24px',
                        alignItems: 'stretch',
                        marginBottom: '80px'
                    }} className="trustfund-bottom-grid">
                        
                        {/* Sharia Basis */}
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '32px',
                            padding: '40px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <span style={{
                                    display: 'block',
                                    fontSize: '11px',
                                    fontWeight: 'bold',
                                    color: '#9DA65D',
                                    letterSpacing: '0.12em',
                                    marginBottom: '20px'
                                }}>{text.shariaBasis.label}</span>

                                <h2 style={{
                                    fontFamily: 'Josefin Sans, sans-serif',
                                    fontSize: '24px',
                                    fontWeight: 300,
                                    color: '#131810',
                                    lineHeight: 1.25,
                                    margin: '0 0 16px 0'
                                }}>{text.shariaBasis.title}</h2>

                                <p style={{
                                    fontSize: '15px',
                                    lineHeight: 1.6,
                                    color: '#6C7266',
                                    margin: '0 0 28px 0'
                                }}>{text.shariaBasis.desc}</p>
                            </div>

                            <Link href={`${prefix}/sharia-library`} style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#6B6D0F',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                textDecoration: 'none',
                                transition: 'gap 0.2s',
                                alignSelf: 'flex-start'
                            }}
                            onMouseOver={e => e.currentTarget.style.gap = '12px'}
                            onMouseOut={e => e.currentTarget.style.gap = '8px'}
                            >
                                {text.shariaBasis.link} <span style={{ fontSize: '16px', lineHeight: 1 }}>→</span>
                            </Link>
                        </div>

                        {/* Typical Tickets */}
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '32px',
                            padding: '40px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                        }}>
                            <span style={{
                                display: 'block',
                                fontSize: '11px',
                                fontWeight: 'bold',
                                color: '#9DA65D',
                                letterSpacing: '0.12em',
                                marginBottom: '20px'
                            }}>{text.typicalTickets.label}</span>
                            <h3 style={{
                                fontFamily: 'Josefin Sans, sans-serif',
                                fontSize: '24px',
                                fontWeight: 300,
                                color: '#131810',
                                margin: '0 0 28px 0'
                            }}>{text.typicalTickets.title}</h3>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '24px',
                                marginTop: '40px'
                            }} className="tickets-grid">
                                <div>
                                    <span style={{ display: 'block', fontSize: '13px', color: '#8E968B', marginBottom: '4px' }}>
                                        {text.typicalTickets.minLabel}
                                    </span>
                                    <strong style={{ display: 'block', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '400', color: '#131810', fontFamily: 'Josefin Sans, sans-serif' }}>
                                        {text.typicalTickets.minVal}
                                    </strong>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '13px', color: '#8E968B', marginBottom: '4px' }}>
                                        {text.typicalTickets.medLabel}
                                    </span>
                                    <strong style={{ display: 'block', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '400', color: '#131810', fontFamily: 'Josefin Sans, sans-serif' }}>
                                        {text.typicalTickets.medVal}
                                    </strong>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '13px', color: '#8E968B', marginBottom: '4px' }}>
                                        {text.typicalTickets.maxLabel}
                                    </span>
                                    <strong style={{ display: 'block', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '400', color: '#131810', fontFamily: 'Josefin Sans, sans-serif' }}>
                                        {text.typicalTickets.maxVal}
                                    </strong>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Explore Other Services Section */}
                    <div>
                        <span style={{
                            display: 'block',
                            fontSize: '11px',
                            fontWeight: 'bold',
                            color: '#9DA65D',
                            letterSpacing: '0.12em',
                            marginBottom: '24px'
                        }}>{text.explore.title}</span>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '20px'
                        }} className="explore-grid">
                            {text.explore.services.map((svc, idx) => {
                                let IconC = ShieldIcon;
                                if (svc.icon === 'trend-up') IconC = TrendUpIcon;
                                if (svc.icon === 'credit-card') IconC = CreditCardIcon;

                                return (
                                    <Link key={idx} href={`${prefix}/services/${svc.slug}`} style={{
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: '20px',
                                        padding: '28px',
                                        textDecoration: 'none',
                                        transition: 'box-shadow 0.3s, transform 0.3s',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
                                        display: 'block'
                                    }}
                                    onMouseOver={e => { e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.05)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                    onMouseOut={e => { e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.01)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                    >
                                        <div style={{
                                            color: '#6B6D0F',
                                            marginBottom: '16px'
                                        }}>
                                            <IconC size={26} />
                                        </div>
                                        <h4 style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            color: '#131810',
                                            margin: '0 0 4px 0'
                                        }}>{svc.title}</h4>
                                        <span style={{
                                            fontSize: '14px',
                                            color: '#8E968B'
                                        }}>{svc.sub}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                </div>

                {/* Floating Contact Button */}
                <Link href={`${prefix}/contact`} style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#4E5A44',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                    transition: 'transform 0.2s, background-color 0.2s',
                    zIndex: 100,
                    cursor: 'pointer'
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.backgroundColor = '#3B4533'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#4E5A44'; }}
                >
                    <ChatIcon size={24} />
                </Link>

            </div>

            {/* Layout responsive style block */}
            <style>{`
                @media (max-width: 991px) {
                    .trustfund-top-grid, .trustfund-bottom-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .explore-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 767px) {
                    .explore-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .tickets-grid {
                        grid-template-columns: 1fr !important;
                        gap: 16px !important;
                    }
                    .trustfund-info-card {
                        padding: 30px !important;
                    }
                }
            `}</style>
        </Layout>
    );
}

/* ─────────────────────────────────────────────
   Check if a service slug is investment-related
   ───────────────────────────────────────────── */
function isInvestment(slug) {
    return /^(investment|investasi)/.test((slug || '').toLowerCase());
}

/* ─── Investment translation copy ─── */
const investmentCopy = {
    en: {
        backLabel: 'All services',
        badge: '03 . EQUITY',
        heroTitle: 'Investment',
        paragraphs: [
            "Direct capital allocation focused on proven, productive projects to build sustainable growth.",
            "Stif co-share target of minimum 5% on every deal alongside LPs. Every investment would be spearheaded by international business expert."
        ],
        whatYouGet: {
            title: 'WHAT YOU GET***',
            items: [
                'Musharakah / Mudarabah structures',
                'GP co-investment minimum 5%',
                'Board observer seat for LPs',
                'Quarterly portfolio reporting'
            ],
            btn: 'Submit a mandate'
        },
        shariaBasis: {
            label: 'SHARIA BASIS',
            title: 'The fatwa behind the structure',
            desc: 'Every Investment mandate is underwritten by binding fatwa that adheres to AAOIFI and IFSB standards.',
            link: 'Read library'
        },
        typicalTickets: {
            label: 'TYPICAL TICKETS',
            title: 'Capital range we deploy',
            minLabel: 'Minimum',
            minVal: 'USD 100K',
            medLabel: 'Median',
            medVal: 'USD 1M',
            maxLabel: 'Maximum',
            maxVal: 'USD 5M'
        },
        explore: {
            title: 'EXPLORE OTHER SERVICES',
            services: [
                {
                    title: 'Sharia Foundation',
                    sub: 'Compliance',
                    slug: 'shariah',
                    icon: 'shield'
                },
                {
                    title: 'Trust Fund',
                    sub: 'Fiduciary',
                    slug: 'trust-fund',
                    icon: 'home'
                },
                {
                    title: 'Financing',
                    sub: 'Asset-Backed',
                    slug: 'financing',
                    icon: 'credit-card'
                }
            ]
        }
    },
    id: {
        backLabel: 'Semua layanan',
        badge: '03 . EKUITAS',
        heroTitle: 'Investasi',
        paragraphs: [
            "Alokasi modal langsung difokuskan pada proyek produktif yang terbukti untuk membangun pertumbuhan berkelanjutan.",
            "Target co-share Stif minimal 5% pada setiap transaksi bersama LP. Setiap investasi akan dipimpin oleh pakar bisnis internasional."
        ],
        whatYouGet: {
            title: 'APA YANG ANDA DAPATKAN***',
            items: [
                'Struktur Musyarakah / Mudharabah',
                'Ko-investasi GP minimal 5%',
                'Kursi pengamat dewan untuk LP',
                'Laporan portofolio triwulanan'
            ],
            btn: 'Ajukan mandat'
        },
        shariaBasis: {
            label: 'DASAR SYARIAH',
            title: 'Fatwa di balik struktur',
            desc: 'Setiap mandat Investasi dijamin oleh fatwa mengikat yang mematuhi standar AAOIFI dan IFSB.',
            link: 'Baca pustaka'
        },
        typicalTickets: {
            label: 'TIKET UMUM',
            title: 'Kisaran modal yang kami salurkan',
            minLabel: 'Minimum',
            minVal: 'USD 100K',
            medLabel: 'Median',
            medVal: 'USD 1M',
            maxLabel: 'Maksimum',
            maxVal: 'USD 5M'
        },
        explore: {
            title: 'EKSPLORASI LAYANAN LAIN',
            services: [
                {
                    title: 'Fondasi Syariah',
                    sub: 'Kepatuhan',
                    slug: 'shariah',
                    icon: 'shield'
                },
                {
                    title: 'Dana Amanah',
                    sub: 'Fidusia',
                    slug: 'trust-fund',
                    icon: 'home'
                },
                {
                    title: 'Pembiayaan',
                    sub: 'Didukung Aset',
                    slug: 'financing',
                    icon: 'credit-card'
                }
            ]
        }
    }
};

/* ─── Investment Page Component ─── */
function InvestmentPage({ locale, service, settings, prefix }) {
    const { t } = useTranslation();
    const text = investmentCopy[locale] || investmentCopy.en;
    const name = locale === 'id' && service.name_id ? service.name_id : (service.name_en || 'Investment');

    const breadcrumbItems = [
        { label: locale === 'id' ? 'Beranda' : 'Home', url: prefix || '/' },
        { label: t('nav.services'), url: `${prefix}/services` },
        { label: name, url: `${prefix}/services/${service.slug}` }
    ];

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead title={name} description={text.paragraphs[0]} />

            <div style={{
                backgroundColor: '#F7F6F3',
                padding: '60px 0 100px',
                minHeight: '100vh',
                position: 'relative'
            }}>
                <div className="container">
                    <Breadcrumb items={breadcrumbItems} />
                    
                    {/* Back Link */}
                    <div style={{ marginBottom: '24px' }}>
                        <Link href={`${prefix}/services`} style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '14px',
                            color: '#6C7266',
                            textDecoration: 'none',
                            fontWeight: 500,
                            transition: 'color 0.2s'
                        }}
                        onMouseOver={e => e.currentTarget.style.color = '#131810'}
                        onMouseOut={e => e.currentTarget.style.color = '#6C7266'}
                        >
                            <ArrowLeftIcon size={14} /> {text.backLabel}
                        </Link>
                    </div>

                    {/* Top Row Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1.8fr 1fr',
                        gap: '24px',
                        alignItems: 'stretch',
                        marginBottom: '24px'
                    }} className="investment-top-grid">
                        
                        {/* Left Card: Info */}
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '32px',
                            padding: '48px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }} className="investment-info-card">
                            
                            {/* Header Row */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                marginBottom: '32px'
                            }} className="investment-header-row">
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '16px',
                                    backgroundColor: '#2E3A23',
                                    color: '#9DA65D',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <TrendUpIcon size={28} />
                                </div>
                                <div>
                                    <span style={{
                                        display: 'block',
                                        fontSize: '11px',
                                        fontWeight: 'bold',
                                        color: '#9DA65D',
                                        letterSpacing: '0.12em',
                                        marginBottom: '4px'
                                    }}>{text.badge}</span>
                                    <h1 style={{
                                        fontFamily: 'Josefin Sans, sans-serif',
                                        fontSize: 'clamp(28px, 4vw, 42px)',
                                        fontWeight: 300,
                                        color: '#131810',
                                        margin: 0,
                                        lineHeight: 1.1
                                    }}>{text.heroTitle}</h1>
                                </div>
                            </div>

                            {/* Descriptions */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                color: '#4A5243',
                                fontSize: '16px',
                                lineHeight: 1.75
                            }}>
                                {text.paragraphs.map((para, idx) => (
                                    <p key={idx} style={{ margin: 0 }}>{para}</p>
                                ))}
                            </div>
                        </div>

                        {/* Right Card: What You Get */}
                        <div style={{
                            backgroundColor: '#2C3621',
                            borderRadius: '32px',
                            padding: '40px',
                            color: '#FFFFFF',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }} className="investment-sidebar-card">
                            <div>
                                <span style={{
                                    display: 'block',
                                    fontSize: '11px',
                                    fontWeight: 'bold',
                                    color: '#A8B67D',
                                    letterSpacing: '0.12em',
                                    marginBottom: '28px'
                                }}>{text.whatYouGet.title}</span>

                                <ul style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '18px',
                                    padding: 0,
                                    margin: '0 0 36px 0'
                                }}>
                                    {text.whatYouGet.items.map((item, idx) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            fontSize: '14px',
                                            lineHeight: 1.4,
                                            color: '#ECEBE6'
                                        }}>
                                            <CheckCircleIcon stroke="#A8B67D" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href={`${prefix}/contact`} style={{
                                backgroundColor: '#FFFFFF',
                                color: '#131810',
                                borderRadius: '999px',
                                padding: '14px 28px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                textDecoration: 'none',
                                transition: 'background-color 0.2s, transform 0.2s',
                                cursor: 'pointer',
                                alignSelf: 'flex-start'
                            }}
                            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#ECEBE6'; }}
                            onMouseOut={e => { e.currentTarget.style.backgroundColor = '#FFFFFF'; }}
                            >
                                {text.whatYouGet.btn} <ArrowUpRightIcon size={14} />
                            </Link>
                        </div>

                    </div>

                    {/* Bottom Row Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '24px',
                        alignItems: 'stretch',
                        marginBottom: '80px'
                    }} className="investment-bottom-grid">
                        
                        {/* Sharia Basis */}
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '32px',
                            padding: '40px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <span style={{
                                    display: 'block',
                                    fontSize: '11px',
                                    fontWeight: 'bold',
                                    color: '#9DA65D',
                                    letterSpacing: '0.12em',
                                    marginBottom: '20px'
                                }}>{text.shariaBasis.label}</span>

                                <h2 style={{
                                    fontFamily: 'Josefin Sans, sans-serif',
                                    fontSize: '24px',
                                    fontWeight: 300,
                                    color: '#131810',
                                    lineHeight: 1.25,
                                    margin: '0 0 16px 0'
                                }}>{text.shariaBasis.title}</h2>

                                <p style={{
                                    fontSize: '15px',
                                    lineHeight: 1.6,
                                    color: '#6C7266',
                                    margin: '0 0 28px 0'
                                }}>{text.shariaBasis.desc}</p>
                            </div>

                            <Link href={`${prefix}/sharia-library`} style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#6B6D0F',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                textDecoration: 'none',
                                transition: 'gap 0.2s',
                                alignSelf: 'flex-start'
                            }}
                            onMouseOver={e => e.currentTarget.style.gap = '12px'}
                            onMouseOut={e => e.currentTarget.style.gap = '8px'}
                            >
                                {text.shariaBasis.link} <span style={{ fontSize: '16px', lineHeight: 1 }}>→</span>
                            </Link>
                        </div>

                        {/* Typical Tickets */}
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '32px',
                            padding: '40px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                        }}>
                            <span style={{
                                display: 'block',
                                fontSize: '11px',
                                fontWeight: 'bold',
                                color: '#9DA65D',
                                letterSpacing: '0.12em',
                                marginBottom: '20px'
                            }}>{text.typicalTickets.label}</span>
                            <h3 style={{
                                fontFamily: 'Josefin Sans, sans-serif',
                                fontSize: '24px',
                                fontWeight: 300,
                                color: '#131810',
                                margin: '0 0 28px 0'
                            }}>{text.typicalTickets.title}</h3>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '24px',
                                marginTop: '40px'
                            }} className="tickets-grid">
                                <div>
                                    <span style={{ display: 'block', fontSize: '13px', color: '#8E968B', marginBottom: '4px' }}>
                                        {text.typicalTickets.minLabel}
                                    </span>
                                    <strong style={{ display: 'block', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '400', color: '#131810', fontFamily: 'Josefin Sans, sans-serif' }}>
                                        {text.typicalTickets.minVal}
                                    </strong>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '13px', color: '#8E968B', marginBottom: '4px' }}>
                                        {text.typicalTickets.medLabel}
                                    </span>
                                    <strong style={{ display: 'block', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '400', color: '#131810', fontFamily: 'Josefin Sans, sans-serif' }}>
                                        {text.typicalTickets.medVal}
                                    </strong>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '13px', color: '#8E968B', marginBottom: '4px' }}>
                                        {text.typicalTickets.maxLabel}
                                    </span>
                                    <strong style={{ display: 'block', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '400', color: '#131810', fontFamily: 'Josefin Sans, sans-serif' }}>
                                        {text.typicalTickets.maxVal}
                                    </strong>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Explore Other Services Section */}
                    <div>
                        <span style={{
                            display: 'block',
                            fontSize: '11px',
                            fontWeight: 'bold',
                            color: '#9DA65D',
                            letterSpacing: '0.12em',
                            marginBottom: '24px'
                        }}>{text.explore.title}</span>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '20px'
                        }} className="explore-grid">
                            {text.explore.services.map((svc, idx) => {
                                let IconC = ShieldIcon;
                                if (svc.icon === 'home') IconC = HomeIcon;
                                if (svc.icon === 'credit-card') IconC = CreditCardIcon;

                                return (
                                    <Link key={idx} href={`${prefix}/services/${svc.slug}`} style={{
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: '20px',
                                        padding: '28px',
                                        textDecoration: 'none',
                                        transition: 'box-shadow 0.3s, transform 0.3s',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
                                        display: 'block'
                                    }}
                                    onMouseOver={e => { e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.05)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                    onMouseOut={e => { e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.01)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                    >
                                        <div style={{
                                            color: '#6B6D0F',
                                            marginBottom: '16px'
                                        }}>
                                            <IconC size={26} />
                                        </div>
                                        <h4 style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            color: '#131810',
                                            margin: '0 0 4px 0'
                                        }}>{svc.title}</h4>
                                        <span style={{
                                            fontSize: '14px',
                                            color: '#8E968B'
                                        }}>{svc.sub}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                </div>

                {/* Floating Contact Button */}
                <Link href={`${prefix}/contact`} style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#4E5A44',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                    transition: 'transform 0.2s, background-color 0.2s',
                    zIndex: 100,
                    cursor: 'pointer'
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.backgroundColor = '#3B4533'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#4E5A44'; }}
                >
                    <ChatIcon size={24} />
                </Link>

            </div>

            {/* Layout responsive style block */}
            <style>{`
                @media (max-width: 991px) {
                    .investment-top-grid, .investment-bottom-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .explore-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 767px) {
                    .explore-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .tickets-grid {
                        grid-template-columns: 1fr !important;
                        gap: 16px !important;
                    }
                    .investment-info-card {
                        padding: 30px !important;
                    }

                }
            `}</style>
        </Layout>
    );
}

/* ─────────────────────────────────────────────
   Check if a service slug is financing-related
   ───────────────────────────────────────────── */
function isFinancing(slug) {
    return /^(financing|pembiayaan)/.test((slug || '').toLowerCase());
}

/* ─── Financing translation copy ─── */
const financingCopy = {
    en: {
        backLabel: 'All services',
        badge: '04 . Asset-Backed',
        heroTitle: 'Financing',
        paragraphs: [
            "Access interest-free funding solutions to scale up your business. Our asset-based structures provide a secure path to capital without the burden of Riba.",
            "Every financing would be review by a Scholar for sharia compliance and guided by international business expert to maximize business results."
        ],
        whatYouGet: {
            title: 'WHAT YOU GET***',
            items: [
                'Musharakah / Mudarabah structures',
                'Board observer seat for LPs',
                'Quarterly portfolio reporting'
            ],
            btn: 'Submit a mandate'
        },
        shariaBasis: {
            label: 'SHARIA BASIS',
            title: 'The fatwa behind the structure',
            desc: 'Every Financing mandate is underwritten by binding fatwa that adheres to AAOIFI and IFSB standards.',
            link: 'Read library'
        },
        typicalTickets: {
            label: 'TYPICAL TICKETS',
            title: 'Capital range we deploy',
            minLabel: 'Minimum',
            minVal: 'USD 100K',
            medLabel: 'Median',
            medVal: 'USD 1M',
            maxLabel: 'Maximum',
            maxVal: 'USD 5M'
        },
        explore: {
            title: 'EXPLORE OTHER SERVICES',
            services: [
                {
                    title: 'Sharia Foundation',
                    sub: 'Compliance',
                    slug: 'shariah',
                    icon: 'shield'
                },
                {
                    title: 'Trust Fund',
                    sub: 'Fiduciary',
                    slug: 'trust-fund',
                    icon: 'home'
                },
                {
                    title: 'Investment',
                    sub: 'Equity',
                    slug: 'investment',
                    icon: 'trend-up'
                }
            ]
        }
    },
    id: {
        backLabel: 'Semua layanan',
        badge: '04 . DIDUKUNG ASET',
        heroTitle: 'Pembiayaan',
        paragraphs: [
            "Akses solusi pendanaan bebas bunga untuk mengembangkan bisnis Anda. Struktur berbasis aset kami menyediakan jalur aman ke modal tanpa beban Riba.",
            "Setiap pembiayaan akan ditinjau oleh Dewan Pengawas untuk kepatuhan syariah dan dipandu oleh pakar bisnis internasional untuk memaksimalkan hasil bisnis."
        ],
        whatYouGet: {
            title: 'APA YANG ANDA DAPATKAN***',
            items: [
                'Struktur Musyarakah / Mudharabah',
                'Kursi pengamat dewan untuk LP',
                'Laporan portofolio triwulanan'
            ],
            btn: 'Ajukan mandat'
        },
        shariaBasis: {
            label: 'DASAR SYARIAH',
            title: 'Fatwa di balik struktur',
            desc: 'Setiap mandat Pembiayaan dijamin oleh fatwa mengikat yang mematuhi standar AAOIFI dan IFSB.',
            link: 'Baca pustaka'
        },
        typicalTickets: {
            label: 'TIKET UMUM',
            title: 'Kisaran modal yang kami salurkan',
            minLabel: 'Minimum',
            minVal: 'USD 100K',
            medLabel: 'Median',
            medVal: 'USD 1M',
            maxLabel: 'Maksimum',
            maxVal: 'USD 5M'
        },
        explore: {
            title: 'EKSPLORASI LAYANAN LAIN',
            services: [
                {
                    title: 'Fondasi Syariah',
                    sub: 'Kepatuhan',
                    slug: 'shariah',
                    icon: 'shield'
                },
                {
                    title: 'Dana Amanah',
                    sub: 'Fidusia',
                    slug: 'trust-fund',
                    icon: 'home'
                },
                {
                    title: 'Investasi',
                    sub: 'Ekuitas',
                    slug: 'investment',
                    icon: 'trend-up'
                }
            ]
        }
    }
};

/* ─── Financing Page Component ─── */
function FinancingPage({ locale, service, settings, prefix }) {
    const { t } = useTranslation();
    const text = financingCopy[locale] || financingCopy.en;
    const name = locale === 'id' && service.name_id ? service.name_id : (service.name_en || 'Financing');

    const breadcrumbItems = [
        { label: locale === 'id' ? 'Beranda' : 'Home', url: prefix || '/' },
        { label: t('nav.services'), url: `${prefix}/services` },
        { label: name, url: `${prefix}/services/${service.slug}` }
    ];

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead title={name} description={text.paragraphs[0]} />

            <div style={{
                backgroundColor: '#F7F6F3',
                padding: '60px 0 100px',
                minHeight: '100vh',
                position: 'relative'
            }}>
                <div className="container">
                    <Breadcrumb items={breadcrumbItems} />
                    
                    {/* Back Link */}
                    <div style={{ marginBottom: '24px' }}>
                        <Link href={`${prefix}/services`} style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '14px',
                            color: '#6C7266',
                            textDecoration: 'none',
                            fontWeight: 500,
                            transition: 'color 0.2s'
                        }}
                        onMouseOver={e => e.currentTarget.style.color = '#131810'}
                        onMouseOut={e => e.currentTarget.style.color = '#6C7266'}
                        >
                            <ArrowLeftIcon size={14} /> {text.backLabel}
                        </Link>
                    </div>

                    {/* Top Row Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1.8fr 1fr',
                        gap: '24px',
                        alignItems: 'stretch',
                        marginBottom: '24px'
                    }} className="financing-top-grid">
                        
                        {/* Left Card: Info */}
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '32px',
                            padding: '48px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }} className="financing-info-card">
                            
                            {/* Header Row */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                marginBottom: '32px'
                            }} className="financing-header-row">
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '16px',
                                    backgroundColor: '#2E3A23',
                                    color: '#9DA65D',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <CreditCardIcon size={28} />
                                </div>
                                <div>
                                    <span style={{
                                        display: 'block',
                                        fontSize: '11px',
                                        fontWeight: 'bold',
                                        color: '#9DA65D',
                                        letterSpacing: '0.12em',
                                        marginBottom: '4px'
                                    }}>{text.badge}</span>
                                    <h1 style={{
                                        fontFamily: 'Josefin Sans, sans-serif',
                                        fontSize: 'clamp(28px, 4vw, 42px)',
                                        fontWeight: 300,
                                        color: '#131810',
                                        margin: 0,
                                        lineHeight: 1.1
                                    }}>{text.heroTitle}</h1>
                                </div>
                            </div>

                            {/* Descriptions */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                color: '#4A5243',
                                fontSize: '16px',
                                lineHeight: 1.75
                            }}>
                                {text.paragraphs.map((para, idx) => (
                                    <p key={idx} style={{ margin: 0 }}>{para}</p>
                                ))}
                            </div>
                        </div>

                        {/* Right Card: What You Get */}
                        <div style={{
                            backgroundColor: '#2C3621',
                            borderRadius: '32px',
                            padding: '40px',
                            color: '#FFFFFF',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }} className="financing-sidebar-card">
                            <div>
                                <span style={{
                                    display: 'block',
                                    fontSize: '11px',
                                    fontWeight: 'bold',
                                    color: '#A8B67D',
                                    letterSpacing: '0.12em',
                                    marginBottom: '28px'
                                }}>{text.whatYouGet.title}</span>

                                <ul style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '18px',
                                    padding: 0,
                                    margin: '0 0 36px 0'
                                }}>
                                    {text.whatYouGet.items.map((item, idx) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            fontSize: '14px',
                                            lineHeight: 1.4,
                                            color: '#ECEBE6'
                                        }}>
                                            <CheckCircleIcon stroke="#A8B67D" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href={`${prefix}/contact`} style={{
                                backgroundColor: '#FFFFFF',
                                color: '#131810',
                                borderRadius: '999px',
                                padding: '14px 28px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                textDecoration: 'none',
                                transition: 'background-color 0.2s, transform 0.2s',
                                cursor: 'pointer',
                                alignSelf: 'flex-start'
                            }}
                            onMouseOver={e => { e.currentTarget.style.backgroundColor = '#ECEBE6'; }}
                            onMouseOut={e => { e.currentTarget.style.backgroundColor = '#FFFFFF'; }}
                            >
                                {text.whatYouGet.btn} <ArrowUpRightIcon size={14} />
                            </Link>
                        </div>

                    </div>

                    {/* Bottom Row Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '24px',
                        alignItems: 'stretch',
                        marginBottom: '80px'
                    }} className="financing-bottom-grid">
                        
                        {/* Sharia Basis */}
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '32px',
                            padding: '40px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <span style={{
                                    display: 'block',
                                    fontSize: '11px',
                                    fontWeight: 'bold',
                                    color: '#9DA65D',
                                    letterSpacing: '0.12em',
                                    marginBottom: '20px'
                                }}>{text.shariaBasis.label}</span>

                                <h2 style={{
                                    fontFamily: 'Josefin Sans, sans-serif',
                                    fontSize: '24px',
                                    fontWeight: 300,
                                    color: '#131810',
                                    lineHeight: 1.25,
                                    margin: '0 0 16px 0'
                                }}>{text.shariaBasis.title}</h2>

                                <p style={{
                                    fontSize: '15px',
                                    lineHeight: 1.6,
                                    color: '#6C7266',
                                    margin: '0 0 28px 0'
                                }}>{text.shariaBasis.desc}</p>
                            </div>

                            <Link href={`${prefix}/sharia-library`} style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#6B6D0F',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                textDecoration: 'none',
                                transition: 'gap 0.2s',
                                alignSelf: 'flex-start'
                            }}
                            onMouseOver={e => e.currentTarget.style.gap = '12px'}
                            onMouseOut={e => e.currentTarget.style.gap = '8px'}
                            >
                                {text.shariaBasis.link} <span style={{ fontSize: '16px', lineHeight: 1 }}>→</span>
                            </Link>
                        </div>

                        {/* Typical Tickets */}
                        <div style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '32px',
                            padding: '40px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                        }}>
                            <span style={{
                                display: 'block',
                                fontSize: '11px',
                                fontWeight: 'bold',
                                color: '#9DA65D',
                                letterSpacing: '0.12em',
                                marginBottom: '20px'
                            }}>{text.typicalTickets.label}</span>
                            <h3 style={{
                                fontFamily: 'Josefin Sans, sans-serif',
                                fontSize: '24px',
                                fontWeight: 300,
                                color: '#131810',
                                margin: '0 0 28px 0'
                            }}>{text.typicalTickets.title}</h3>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '24px',
                                marginTop: '40px'
                            }} className="tickets-grid">
                                <div>
                                    <span style={{ display: 'block', fontSize: '13px', color: '#8E968B', marginBottom: '4px' }}>
                                        {text.typicalTickets.minLabel}
                                    </span>
                                    <strong style={{ display: 'block', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '400', color: '#131810', fontFamily: 'Josefin Sans, sans-serif' }}>
                                        {text.typicalTickets.minVal}
                                    </strong>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '13px', color: '#8E968B', marginBottom: '4px' }}>
                                        {text.typicalTickets.medLabel}
                                    </span>
                                    <strong style={{ display: 'block', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '400', color: '#131810', fontFamily: 'Josefin Sans, sans-serif' }}>
                                        {text.typicalTickets.medVal}
                                    </strong>
                                </div>
                                <div>
                                    <span style={{ display: 'block', fontSize: '13px', color: '#8E968B', marginBottom: '4px' }}>
                                        {text.typicalTickets.maxLabel}
                                    </span>
                                    <strong style={{ display: 'block', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: '400', color: '#131810', fontFamily: 'Josefin Sans, sans-serif' }}>
                                        {text.typicalTickets.maxVal}
                                    </strong>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Explore Other Services Section */}
                    <div>
                        <span style={{
                            display: 'block',
                            fontSize: '11px',
                            fontWeight: 'bold',
                            color: '#9DA65D',
                            letterSpacing: '0.12em',
                            marginBottom: '24px'
                        }}>{text.explore.title}</span>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '20px'
                        }} className="explore-grid">
                            {text.explore.services.map((svc, idx) => {
                                let IconC = ShieldIcon;
                                if (svc.icon === 'home') IconC = HomeIcon;
                                if (svc.icon === 'trend-up') IconC = TrendUpIcon;

                                return (
                                    <Link key={idx} href={`${prefix}/services/${svc.slug}`} style={{
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: '20px',
                                        padding: '28px',
                                        textDecoration: 'none',
                                        transition: 'box-shadow 0.3s, transform 0.3s',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
                                        display: 'block'
                                    }}
                                    onMouseOver={e => { e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.05)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                    onMouseOut={e => { e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.01)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                    >
                                        <div style={{
                                            color: '#6B6D0F',
                                            marginBottom: '16px'
                                        }}>
                                            <IconC size={26} />
                                        </div>
                                        <h4 style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            color: '#131810',
                                            margin: '0 0 4px 0'
                                        }}>{svc.title}</h4>
                                        <span style={{
                                            fontSize: '14px',
                                            color: '#8E968B'
                                        }}>{svc.sub}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                </div>

                {/* Floating Contact Button */}
                <Link href={`${prefix}/contact`} style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#4E5A44',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                    transition: 'transform 0.2s, background-color 0.2s',
                    zIndex: 100,
                    cursor: 'pointer'
                }}
                onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.backgroundColor = '#3B4533'; }}
                onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#4E5A44'; }}
                >
                    <ChatIcon size={24} />
                </Link>

            </div>

            {/* Layout responsive style block */}
            <style>{`
                @media (max-width: 991px) {
                    .financing-top-grid, .financing-bottom-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .explore-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 767px) {
                    .explore-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .tickets-grid {
                        grid-template-columns: 1fr !important;
                        gap: 16px !important;
                    }
                    .financing-info-card {
                        padding: 30px !important;
                    }
                }
            `}</style>
        </Layout>
    );
}

/* ═════════════════════════════════════════════
   MAIN EXPORT — routes to dedicated or generic
   ═════════════════════════════════════════════ */
export default function ServiceShow({ locale, service, settings }) {
    const prefix = locale === 'id' ? '/id' : '';

    if (isShariah(service.slug)) {
        return <ShariahPage locale={locale} service={service} settings={settings} prefix={prefix} />;
    }

    if (isTrustFund(service.slug)) {
        return <TrustFundPage locale={locale} service={service} settings={settings} prefix={prefix} />;
    }

    if (isInvestment(service.slug)) {
        return <InvestmentPage locale={locale} service={service} settings={settings} prefix={prefix} />;
    }

    if (isFinancing(service.slug)) {
        return <FinancingPage locale={locale} service={service} settings={settings} prefix={prefix} />;
    }

    return <GenericServicePage locale={locale} service={service} settings={settings} prefix={prefix} />;
}
