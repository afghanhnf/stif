import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import SeoHead from '@/components/seo/SeoHead';
import Breadcrumb from '@/components/seo/Breadcrumb';
import FadeIn from '@/components/animations/FadeIn';

const ArrowUpRightIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);

const CheckIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
        <path d="M20 6 9 17l-5-5" />
    </svg>
);

const RocketIcon = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4.5 16.5c-1 1.1-1.4 2.7-1.1 4.1 1.4.3 3-.1 4.1-1.1" />
        <path d="M8 16 4 12l4-1 5-5c2.4-2.4 5.2-3.3 7-2.9.4 1.8-.5 4.6-2.9 7l-5 5-1 4-4-4Z" />
        <path d="M15 9h.01" />
    </svg>
);

const TargetIcon = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
);

const PlayIcon = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const copy = {
    en: {
        badge: 'Who We Are',
        heroTitle: ['Building Sustainable', 'Prosperity on Concrete', 'Sharia Foundations'],
        heroText: 'True economic value is built on fairness, transparency, and accountability. We do not navigate the markets through mere speculation and backed with Sharia principles to ensure each capital is managed with transparency.',
        firmLabel: 'The Firm',
        firmText: 'Driven by decades of global industrial expertise.',
        visionLabel: 'Vision & Mission',
        visionCardLabel: 'Vision',
        missionCardLabel: 'Mission',
        vision: 'Becoming a trustworthy private equity firm by adhering to Sharia principles in its operations',
        missionTitle: 'Three commitments we measure ourselves against.',
        missions: [
            'Manage projects and investments under Sharia-compliant agreements',
            'Transparent management of projects and investments, free of investment disbursements',
            'Upholding the principles of sustainability and social responsibility',
        ],
        valuesLabel: 'Corporate Values',
        valuesTitle: 'Our core values.',
        valuesEmphasis: 'Uncompromised.',
        valuesText: 'The core values that define our professional conduct and institutional discipline.',
        values: [
            ['E', 'Ethical', 'Strict Shariah compliance without Riba, Gharar, and non-halal practices.'],
            ['A', 'Accountability', 'Upholding our duty through total transparency and clear contract terms.'],
            ['I', 'Integrity', 'Ensure complete alignment between our word, contracts, and every execution.'],
            ['F', 'Social Responsibility', 'Ensuring our actions drive positive social impact alongside financial growth.'],
        ],
        manifestoLabel: 'Our Manifesto - 02:48',
        manifestoTitle: ['Sharia', 'is not a feature.', 'It is the entire product.'],
        manifestoText: 'A three-minute film on why we operate the way we do.',
        ctaLabel: 'Work With Us',
        ctaTitle: ['Build the next mandate', 'with a team that', 'shares your standard.'],
        ctaText: 'Connect with us to explore opportunities to build a prosper and resilient future.',
        contact: 'Contact the firm',
        portfolio: 'See portfolio',
        teamLabel: 'Leadership',
        teamTitle: 'The people behind the mandate.',
        emptyTeam: "Currently we don't have team members to display.",
    },
    id: {
        badge: 'Tentang Kami',
        heroTitle: ['Membangun Kesejahteraan', 'Berkelanjutan di Atas Fondasi', 'Syariah yang Kokoh'],
        heroText: 'Nilai ekonomi sejati dibangun di atas keadilan, transparansi, dan akuntabilitas. Kami tidak bergerak di pasar melalui spekulasi semata, melainkan berpijak pada prinsip Syariah agar setiap modal dikelola secara transparan.',
        firmLabel: 'Perusahaan',
        firmText: 'Didorong oleh pengalaman industri global selama beberapa dekade.',
        visionLabel: 'Visi & Misi',
        visionCardLabel: 'Visi',
        missionCardLabel: 'Misi',
        vision: 'Menjadi perusahaan private equity terpercaya dengan berpegang pada prinsip Syariah dalam setiap kegiatan operasionalnya',
        missionTitle: 'Tiga komitmen yang menjadi ukuran kami.',
        missions: [
            'Mengelola proyek dan investasi berdasarkan perjanjian yang sesuai Syariah',
            'Pengelolaan proyek dan investasi yang transparan dan bebas dari penyimpangan penyaluran dana',
            'Menjunjung prinsip keberlanjutan dan tanggung jawab sosial',
        ],
        valuesLabel: 'Nilai Perusahaan',
        valuesTitle: 'Nilai inti kami.',
        valuesEmphasis: 'Tanpa kompromi.',
        valuesText: 'Nilai inti yang membentuk perilaku profesional dan disiplin kelembagaan kami.',
        values: [
            ['E', 'Etis', 'Kepatuhan Syariah yang ketat tanpa Riba, Gharar, dan praktik non-halal.'],
            ['A', 'Akuntabilitas', 'Menjalankan amanah melalui transparansi penuh dan ketentuan kontrak yang jelas.'],
            ['I', 'Integritas', 'Memastikan keselarasan utuh antara ucapan, kontrak, dan setiap pelaksanaan.'],
            ['F', 'Tanggung Jawab Sosial', 'Memastikan tindakan kami mendorong dampak sosial positif bersama pertumbuhan finansial.'],
        ],
        manifestoLabel: 'Manifesto Kami - 02:48',
        manifestoTitle: ['Syariah', 'bukan sekadar fitur.', 'Syariah adalah keseluruhan produk.'],
        manifestoText: 'Film tiga menit tentang alasan kami beroperasi dengan cara ini.',
        ctaLabel: 'Bekerja Bersama Kami',
        ctaTitle: ['Bangun mandat berikutnya', 'bersama tim yang', 'berbagi standar Anda.'],
        ctaText: 'Terhubung dengan kami untuk menjajaki peluang membangun masa depan yang makmur dan tangguh.',
        contact: 'Hubungi perusahaan',
        portfolio: 'Lihat portfolio',
        teamLabel: 'Kepemimpinan',
        teamTitle: 'Orang-orang di balik mandat.',
        emptyTeam: 'Saat ini belum ada anggota tim untuk ditampilkan.',
    },
};

export default function WhoWeAre({ locale, team, tagline, settings, profile }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';
    const text = copy[locale] || copy.en;

    const vision = profile?.[`vision_${locale}`] || text.vision;
    const missionTitle = profile?.[`mission_title_${locale}`] || text.missionTitle;
    const missions = profile?.missions || text.missions.map(m => ({ [`text_${locale}`]: m }));
    const corporateValuesTitle = profile?.[`corporate_values_title_${locale}`] || text.valuesTitle;
    const corporateValuesEmphasis = profile?.[`corporate_values_emphasis_${locale}`] || text.valuesEmphasis;
    const corporateValuesText = profile?.[`corporate_values_text_${locale}`] || text.valuesText;
    const corporateValues = profile?.corporate_values || text.values.map(v => ({ letter: v[0], [`title_${locale}`]: v[1], [`desc_${locale}`]: v[2] }));

    const breadcrumbItems = [
        { label: locale === 'id' ? 'Beranda' : 'Home', url: prefix || '/' },
        { label: t('nav.who_we_are'), url: `${prefix}/who-we-are` }
    ];

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead title={t('nav.who_we_are')} description="Learn about STIF Capital, our mission, vision, and the values that drive our Sharia-compliant investments." />

            <section className="who-page">
                <div className="container">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
                <div className="container who-stack">
                    <FadeIn direction="up">
                        <div className="who-hero">
                            <div className="who-hero__copy">
                                <span className="who-pill">
                                    <TargetIcon />
                                    {text.badge}
                                </span>
                                <h1 className="who-hero__title">
                                    {text.heroTitle[0]}<br />
                                    {text.heroTitle[1]}<br />
                                    <span>{text.heroTitle[2]}</span>
                                </h1>
                                <p>{text.heroText}</p>
                            </div>

                            <div className="who-hero__media">
                                <img src="/images/who-we-are-hero.jpg" alt="" loading="lazy" decoding="async" />
                                <div className="who-hero__note">
                                    <strong>{text.firmLabel}</strong>
                                    <span>{text.firmText}</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up">
                        <section className="who-section-heading">
                            <span>{text.visionLabel}</span>
                            <h2>STIF <em>Capital</em></h2>
                        </section>
                    </FadeIn>

                    <FadeIn direction="up">
                        <section className="who-vision-grid">
                            <article className="who-panel who-panel--dark">
                                <div className="who-icon-tile"><RocketIcon /></div>
                                <span className="who-label">{text.visionCardLabel}</span>
                                <h3>{vision}</h3>
                            </article>

                            <article className="who-panel who-panel--light">
                                <div className="who-icon-tile who-icon-tile--light"><TargetIcon /></div>
                                <span className="who-label">{text.missionCardLabel}</span>
                                <h3>{missionTitle}</h3>
                                <ul className="who-check-list">
                                    {missions.map((mission, i) => (
                                        <li key={i}>
                                            <CheckIcon />
                                            <span>{mission[`text_${locale}`] || mission.text_en}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </section>
                    </FadeIn>

                    <FadeIn direction="up">
                        <section className="who-values-card">
                            <div>
                                <span className="who-label">{text.valuesLabel}</span>
                                <h2>{corporateValuesTitle}<br /><em>{corporateValuesEmphasis}</em></h2>
                                <p>{corporateValuesText}</p>
                            </div>
                            <div className="who-values-list">
                                {corporateValues.map((val, i) => (
                                    <article key={i}>
                                        <span>{val.letter}</span>
                                        <div>
                                            <h3>{val[`title_${locale}`] || val.title_en}</h3>
                                            <p>{val[`desc_${locale}`] || val.desc_en}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn direction="up">
                        <section className="who-media-banner">
                            <img src="/images/who-we-are-manifesto.jpg" alt="" loading="lazy" decoding="async" />
                            <div className="who-media-banner__overlay" />
                            <span className="who-media-banner__label">{text.manifestoLabel}</span>
                            <div className="who-media-banner__copy">
                                <h2>
                                    <em>{text.manifestoTitle[0]}</em> {text.manifestoTitle[1]}<br />
                                    {text.manifestoTitle[2]}
                                </h2>
                                <p>{text.manifestoText}</p>
                            </div>
                            <button className="who-play-button" aria-label="Play manifesto video">
                                <PlayIcon />
                            </button>
                        </section>
                    </FadeIn>

                    <FadeIn direction="up">
                        <section className="who-cta">
                            <img src="/images/library-bg.png" alt="" loading="lazy" decoding="async" />
                            <div className="who-cta__overlay" />
                            <div className="who-cta__copy">
                                <span>{text.ctaLabel}</span>
                                <h2>
                                    {text.ctaTitle[0]}<br />
                                    {text.ctaTitle[1]} <em>{text.ctaTitle[2]}</em>
                                </h2>
                                <p>{text.ctaText}</p>
                            </div>
                            <div className="who-cta__actions">
                                <Link href={`${prefix}/contact`} className="who-button who-button--light">
                                    {text.contact}
                                    <ArrowUpRightIcon />
                                </Link>
                                <Link href={`${prefix}/business-case`} className="who-button who-button--ghost">
                                    {text.portfolio}
                                    <ArrowUpRightIcon />
                                </Link>
                            </div>
                        </section>
                    </FadeIn>

                    {team && team.length > 0 && (
                        <FadeIn direction="up">
                            <section className="who-team">
                                <div>
                                    <span className="who-label">{text.teamLabel}</span>
                                    <h2>{text.teamTitle}</h2>
                                </div>
                                <div className="who-team__grid">
                                    {team.map((member) => (
                                        <article key={member.id}>
                                            {member.photo && (
                                                <div
                                                    className="who-team__photo"
                                                    style={{ backgroundImage: `url(/storage/${member.photo})` }}
                                                />
                                            )}
                                            <h3>{member.name}</h3>
                                            <strong>{locale === 'id' && member.title_id ? member.title_id : member.title_en}</strong>
                                            <p>{locale === 'id' && member.bio_id ? member.bio_id : member.bio_en}</p>
                                            {member.linkedin_url && (
                                                <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="who-team__linkedin" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '8px', color: 'inherit', fontWeight: '500', textDecoration: 'none' }}>
                                                    LinkedIn <ArrowUpRightIcon size={14} />
                                                </a>
                                            )}
                                        </article>
                                    ))}
                                </div>
                            </section>
                        </FadeIn>
                    )}
                </div>
            </section>
        </Layout>
    );
}
