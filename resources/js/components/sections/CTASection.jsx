import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function CTASection({ locale }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';

    return (
        <section className="section bg-cream" style={{ paddingBottom: '48px', paddingTop: '40px' }}>
            <div className="container">
                <div className="grid-cta" style={{
                    backgroundColor: '#1E2519', // Dark forest green matching design
                    borderRadius: '32px',
                    padding: 'clamp(24px, 6vw, 56px)',
                    color: '#FFFFFF',
                    backgroundImage: `url(${(typeof window !== 'undefined' && window.STATIC_BASE_PATH ? window.STATIC_BASE_PATH : '')}/images/cta-bg-pattern.svg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    gap: '40px',
                    alignItems: 'center'
                }}>
                    {/* Left Column: Content */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{
                            fontSize: '11px',
                            fontWeight: 'bold',
                            color: '#9DA65D',
                            letterSpacing: '0.05em',
                            display: 'block',
                            marginBottom: '16px',
                            textTransform: 'uppercase'
                        }}>
                            {t('cta.badge')}
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(32px, 5vw, 48px)',
                            fontWeight: 300,
                            color: '#FFFFFF',
                            margin: 0,
                            fontFamily: 'Josefin Sans',
                            lineHeight: 1.15
                        }}>
                            {t('cta.headline')} <span style={{ fontStyle: 'italic', color: '#9DA65D' }}>{t('cta.headline_italic')}</span>
                        </h2>
                        <p style={{
                            maxWidth: '480px',
                            color: '#A3A8A0',
                            fontSize: '15px',
                            lineHeight: 1.6,
                            marginTop: '32px',
                            marginBottom: 0
                        }}>
                            {t('cta.description')}
                        </p>
                    </div>

                    {/* Right Column: Actions */}
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Link href={`${prefix}/contact`} className="btn" style={{
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
                            transition: 'background-color 0.2s'
                        }} onMouseOver={e => e.currentTarget.style.backgroundColor = '#F3F4F6'} onMouseOut={e => e.currentTarget.style.backgroundColor = '#FFFFFF'}>
                            {t('cta.submit')}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </Link>
                        <Link href={`${prefix}/who-we-are`} className="btn" style={{
                            border: '1px solid #4F5A48',
                            color: '#FFFFFF',
                            borderRadius: '999px',
                            padding: '14px 28px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            backgroundColor: 'transparent',
                            textDecoration: 'none',
                            transition: 'background-color 0.2s'
                        }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                            {t('cta.about')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
