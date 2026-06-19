import { useTranslation } from 'react-i18next';

export default function HeroFeaturesSection({ locale, data }) {
    const { t } = useTranslation();

    const features = [
        {
            icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
            title: "The First Sharia-Compliant Indonesian Private Equity"
        },
        {
            icon: (
                <>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </>
            ),
            title: "Tangible & Impactful Investment"
        },
        {
            icon: (
                <>
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                </>
            ),
            title: "Transparency and Responsibility"
        },
        {
            icon: (
                <>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </>
            ),
            title: "Measurable Social Impact"
        }
    ];

    const heroFeatures = data?.hero_features || features;

    return (
        <section style={{ backgroundColor: '#F7F6F5', paddingBottom: '40px' }}>
            <div className="container">
                <div className="grid-4" style={{ gap: '16px' }}>
                    {heroFeatures.map((feat, idx) => (
                        <div key={idx} style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: '16px',
                            padding: '20px 24px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.015)'
                        }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                backgroundColor: 'rgba(107, 109, 15, 0.06)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#6B6D0F',
                                flexShrink: 0
                            }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: feat.icon || features[idx]?.icon }} />
                            </div>
                            <h3 style={{ fontSize: '13px', fontWeight: '600', color: '#131810', lineHeight: '1.4' }}>
                                {feat[`title_${locale}`] || feat.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
