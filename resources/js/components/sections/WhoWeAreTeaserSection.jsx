import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function WhoWeAreTeaserSection({ locale, data }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';

    const values = [
        {
            num: '01',
            title: 'Transparent & Responsible Investing',
            desc: 'Capital allocated only to projects with proven scalability and measurable growth potential.',
            icon: (
                <>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </>
            )
        },
        {
            num: '02',
            title: 'Sharia Supervisory Expert',
            desc: 'Independent supervisory board that ensure adherence to Sharia on each structure.',
            icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        },
        {
            num: '03',
            title: 'Sustainable & Tangible Results',
            desc: 'Every transaction is tied to tangible, identifiable assets to minimize speculative risk.',
            icon: (
                <>
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                </>
            )
        },
        {
            num: '04',
            title: 'Meaningful Investment Beyond Profits',
            desc: 'Fostering genuine partnership and social responsibility through just risk-sharing model.',
            icon: (
                <>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </>
            )
        }
    ];

    const valuesData = data?.values || defaultValues;
    const manifesto = data?.[`manifesto_${locale}`] || 'OUR VALUES';
    const title = data?.[`title_${locale}`] || 'We build capital with principles.';
    const description = data?.[`description_${locale}`] || 'We drive growth through asset-backed partnerships, ensuring risk and reward are shared equitably under transparent contracts and meticulous due diligence.';
    const buttonText = data?.[`button_text_${locale}`] || 'Read the methodology';
    const buttonUrl = data?.button_url || '/who-we-are';

    return (
        <section style={{ backgroundColor: '#F7F6F5', paddingTop: '20px', paddingBottom: '60px' }}>
            <div className="container">
                <div className="grid-values-layout" style={{ gap: '24px', alignItems: 'stretch' }}>

                    {/* Left Card */}
                    <div style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '32px',
                        padding: 'clamp(20px, 5vw, 40px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '100%',
                        boxSizing: 'border-box'
                    }}>
                        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#6B6D0F', letterSpacing: '0.05em', display: 'block', marginBottom: '16px', textTransform: 'uppercase' }}>
                            {manifesto}
                        </span>
                        <h2 className="text-display-s text-forest" style={{ marginBottom: '24px', fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 300, lineHeight: 1.25 }}>
                            {title}
                        </h2>
                        <p className="text-body-lg text-neutral-600" style={{ marginBottom: '28px', fontSize: '15px', lineHeight: 1.6, color: '#555555' }}>
                            {description}
                        </p>
                        <Link href={`${prefix}${buttonUrl}`} style={{
                            color: '#6B6D0F',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            textDecoration: 'none',
                            transition: 'color 0.2s'
                        }} className="hover-primary">
                            {buttonText}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                    </div>

                    {/* Right Grid */}
                    <div className="grid-2" style={{ gap: '16px' }}>
                        {valuesData.map((val, idx) => (
                            <div key={idx} style={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '20px',
                                padding: 'clamp(16px, 4vw, 24px)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <div style={{
                                        width: '36px',
                                        height: '36px',
                                        backgroundColor: 'rgba(107, 109, 15, 0.06)',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#6B6D0F'
                                    }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: val.icon || defaultValues[idx]?.icon }} />
                                    </div>
                                    <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#6B6D0F' }}>
                                        {val.num}
                                    </span>
                                </div>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#131810', marginBottom: '8px', lineHeight: '1.4' }}>
                                    {val[`title_${locale}`] || val.title}
                                </h3>
                                <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666666', margin: 0 }}>
                                    {val[`desc_${locale}`] || val.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
