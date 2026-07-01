import { useForm, Link, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Footer({ locale, settings }) {
    const { t } = useTranslation();
    const { siteSettings } = usePage().props;
    const prefix = locale === 'id' ? '/id' : '';

    const { data, setData, post, processing, recentlySuccessful, reset } = useForm({
        email: '',
        _website_url: '' // Honeypot field
    });

    const submitNewsletter = (e) => {
        e.preventDefault();
        post(`${prefix}/newsletter/subscribe`, {
            preserveScroll: true,
            onSuccess: () => reset()
        });
    };

    return (
        <footer style={{ backgroundColor: '#131810', color: '#A3A8A0', paddingTop: '50px', paddingBottom: '40px' }}>
            <div className="container">
                <div className="grid-footer" style={{ gap: 'var(--space-xl)', marginBottom: '40px' }}>
                    {/* Brand */}
                    <div>
                        <Link href={`${prefix}/`} style={{ display: 'inline-block', marginBottom: '16px' }}>
                            <img src="/images/white-logos.png" alt="STIF Capital Logo" style={{ height: '40px' }} />
                        </Link>
                        <p className="text-body-sm" style={{ maxWidth: '320px', lineHeight: 1.6 }}>
                            {t('footer.desc')}
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-body-sm text-white" style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.02em' }}>
                            {t('footer.services_title')}
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, padding: 0 }}>
                            <li><Link href={`${prefix}/services/trust-fund`} className="text-body-sm hover-white" style={{ textDecoration: 'none', transition: 'color 0.2s' }}>{t('services.trust_fund')}</Link></li>
                            <li><Link href={`${prefix}/services/investment`} className="text-body-sm hover-white" style={{ textDecoration: 'none', transition: 'color 0.2s' }}>{t('services.investment')}</Link></li>
                            <li><Link href={`${prefix}/services/financing`} className="text-body-sm hover-white" style={{ textDecoration: 'none', transition: 'color 0.2s' }}>{t('services.financing')}</Link></li>
                            <li><Link href={`${prefix}/services/shariah`} className="text-body-sm hover-white" style={{ textDecoration: 'none', transition: 'color 0.2s' }}>{t('services.shariah')}</Link></li>
                        </ul>
                    </div>

                    {/* Company & Resources */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <div>
                            <h4 className="text-body-sm text-white" style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.02em' }}>
                                {t('footer.company_title')}
                            </h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, padding: 0 }}>
                                <li><Link href={`${prefix}/who-we-are`} className="text-body-sm hover-white" style={{ textDecoration: 'none', transition: 'color 0.2s' }}>{t('footer.about')}</Link></li>
                                <li><Link href={`${prefix}/business-case`} className="text-body-sm hover-white" style={{ textDecoration: 'none', transition: 'color 0.2s' }}>{t('footer.business_case')}</Link></li>
                                <li><Link href={`${prefix}/insight`} className="text-body-sm hover-white" style={{ textDecoration: 'none', transition: 'color 0.2s' }}>Insight</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-body-sm text-white" style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.02em' }}>
                                {t('footer.resources_title')}
                            </h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, padding: 0 }}>
                                <li><Link href={`${prefix}/sharia-library`} className="text-body-sm hover-white" style={{ textDecoration: 'none', transition: 'color 0.2s' }}>{t('nav.sharia_library')}</Link></li>
                                <li><Link href={`${prefix}/contact`} className="text-body-sm hover-white" style={{ textDecoration: 'none', transition: 'color 0.2s' }}>{t('nav.contact')}</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-body-sm text-white" style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.02em' }}>
                            Newsletter
                        </h4>
                        <p style={{ fontSize: '13px', lineHeight: 1.6, marginBottom: '16px' }}>
                            {locale === 'id' ? 'Berlangganan untuk mendapatkan insight eksklusif seputar pendanaan dan bisnis syariah.' : 'Subscribe to get exclusive insights on Sharia funding and business.'}
                        </p>
                        
                        {recentlySuccessful ? (
                            <div style={{ backgroundColor: 'rgba(123, 143, 71, 0.1)', border: '1px solid #7b8f47', padding: '12px', borderRadius: '8px', color: '#d4dfad', fontSize: '13px' }}>
                                {locale === 'id' ? 'Terima kasih telah berlangganan!' : 'Thank you for subscribing!'}
                            </div>
                        ) : (
                            <form onSubmit={submitNewsletter} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <input 
                                    type="text" 
                                    name="_website_url" 
                                    value={data._website_url} 
                                    onChange={e => setData('_website_url', e.target.value)} 
                                    style={{ display: 'none' }} 
                                    tabIndex="-1" 
                                    autoComplete="off" 
                                />
                                <input
                                    type="email"
                                    required
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    placeholder={locale === 'id' ? 'Alamat email Anda' : 'Your email address'}
                                    style={{
                                        padding: '12px 16px',
                                        borderRadius: '8px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        color: '#FFF',
                                        fontSize: '14px',
                                        outline: 'none'
                                    }}
                                    onFocus={e => e.target.style.borderColor = '#7b8f47'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                                />
                                <button
                                    type="submit"
                                    disabled={processing}
                                    style={{
                                        padding: '12px',
                                        borderRadius: '8px',
                                        backgroundColor: '#7b8f47',
                                        color: '#FFF',
                                        border: 'none',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        cursor: processing ? 'not-allowed' : 'pointer',
                                        opacity: processing ? 0.7 : 1,
                                        transition: 'background-color 0.2s'
                                    }}
                                    onMouseOver={e => !processing && (e.target.style.backgroundColor = '#627338')}
                                    onMouseOut={e => e.target.style.backgroundColor = '#7b8f47'}
                                >
                                    {processing ? 'Submitting...' : 'Subscribe'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex-row-responsive" style={{ justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '24px', fontSize: '13px', gap: '16px' }}>
                    <div>© {new Date().getFullYear()} STIF Capital. {t('footer.copyright')}</div>

                    {/* Social Media Icons */}
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        {siteSettings?.social_linkedin && (
                            <a href={siteSettings.social_linkedin} target="_blank" rel="noopener noreferrer" className="hover-white" style={{ transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                        )}
                        {siteSettings?.social_instagram && (
                            <a href={siteSettings.social_instagram} target="_blank" rel="noopener noreferrer" className="hover-white" style={{ transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        )}
                        {siteSettings?.social_youtube && (
                            <a href={siteSettings.social_youtube} target="_blank" rel="noopener noreferrer" className="hover-white" style={{ transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                </svg>
                            </a>
                        )}
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--space-lg)' }}>
                        <Link href={`${prefix}/privacy-policy`} className="hover-white" style={{ textDecoration: 'none', transition: 'color 0.2s' }}>{t('footer.privacy')}</Link>
                        <Link href={`${prefix}/terms-conditions`} className="hover-white" style={{ textDecoration: 'none', transition: 'color 0.2s' }}>{t('footer.terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
