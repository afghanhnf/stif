import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function ValuesSection({ locale, data }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';

    const usps = [
        {
            title: 'Sharia Principle',
            desc: 'An investment ecosystem entirely free from interest (Riba), uncertainty (Gharar), and speculation (Maysir).',
            icon: (
                <>
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="5" y1="7" x2="19" y2="7" />
                    <path d="M5 7l-2 8h4L5 7z" />
                    <path d="M19 7l-2 8h4L19 7z" />
                    <path d="M10 22h4" />
                </>
            )
        },
        {
            title: 'Tangible & Impactful Investment',
            desc: 'Eliminating high-risk speculation by anchoring every investment in real and productive economic sectors.',
            icon: (
                <>
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.47 14L19 22l-7-3-7 3 3.53-8" />
                </>
            )
        },
        {
            title: 'Global Leadership Excellence',
            desc: 'Managed by executives with experience across MNCs, SOEs, and local companies in 30+ countries.',
            icon: (
                <>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </>
            )
        },
        {
            title: 'Measurable Social Impact',
            desc: 'Creating measurable societal value by channeling capital into projects that elevate local communities.',
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

    const cards = data?.why_stif_cards || usps;
    const badge = data?.[`why_stif_badge_${locale}`] || 'WHY STIF';
    const title = data?.[`why_stif_title_${locale}`] || 'Because Growth Shouldn\'t Be a Burden';
    const text = data?.[`why_stif_text_${locale}`] || 'Our model is built on a foundation of integrity to ensure that our success is your success.';
    const buttonText = data?.[`why_stif_button_${locale}`] || 'About the firm';
    const buttonUrl = data?.why_stif_button_url || '/who-we-are';

    return (
        <section style={{ backgroundColor: '#F7F6F5', padding: '60px 0' }}>
            <div className="container">
                <div className="grid-values-layout" style={{ gap: '24px', alignItems: 'stretch' }}>

                    {/* Left Dark Card */}
                    <div style={{
                        backgroundColor: '#232C1E',
                        borderRadius: '32px',
                        padding: 'clamp(20px, 5vw, 40px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        color: '#FFFFFF',
                        height: '100%',
                        boxSizing: 'border-box'
                    }}>
                        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#9DA65D', letterSpacing: '0.05em', display: 'block', marginBottom: '16px', textTransform: 'uppercase' }}>
                            {badge}
                        </span>
                        <h2 className="text-display-s text-white" style={{ marginBottom: '24px', fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 300, lineHeight: 1.25 }}>
                            {title}
                        </h2>
                        <p style={{ marginBottom: '32px', fontSize: '15px', lineHeight: 1.6, color: '#A3A8A0', marginTop: 0 }}>
                            {text}
                        </p>
                        <Link href={`${prefix}${buttonUrl}`} style={{
                            color: '#9DA65D',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            textDecoration: 'none',
                            marginTop: 'auto',
                            transition: 'color 0.2s'
                        }} className="hover-primary">
                            {buttonText}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                    </div>

                    {/* Right Grid of White Cards */}
                    <div className="grid-2" style={{ gap: '16px' }}>
                        {cards.map((usp, idx) => (
                            <div key={idx} style={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '20px',
                                padding: 'clamp(20px, 4vw, 28px)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div style={{
                                    width: '36px',
                                    height: '36px',
                                    backgroundColor: 'rgba(107, 109, 15, 0.06)',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#6B6D0F',
                                    marginBottom: '16px'
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: usp.icon || usps[idx]?.icon }} />
                                </div>
                                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#131810', marginBottom: '12px', lineHeight: '1.4', margin: '0 0 12px 0' }}>
                                    {usp[`title_${locale}`] || usp.title}
                                </h3>
                                <p style={{ fontSize: '13px', lineHeight: '1.5', color: '#666666', margin: 0 }}>
                                    {usp[`desc_${locale}`] || usp.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
