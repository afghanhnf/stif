import { Link, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, locale, settings }) {
    const { i18n } = useTranslation();
    const { siteSettings } = usePage().props;

    // Sync i18n with server locale
    if (i18n.language !== locale) {
        i18n.changeLanguage(locale);
    }

    return (
        <div className="site-wrapper">
            <Header locale={locale} settings={settings} />
            <main>{children}</main>
            <Footer locale={locale} settings={settings} />

            {/* Floating WhatsApp Chat */}
            {siteSettings?.whatsapp_number && (
                <a
                    href={`https://wa.me/${siteSettings.whatsapp_number.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        position: 'fixed',
                        bottom: '24px',
                        right: '24px',
                        backgroundColor: '#25D366',
                        color: 'white',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                        zIndex: 9999,
                        transition: 'transform 0.2s',
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    aria-label="Chat on WhatsApp"
                >
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.031 0C5.385 0 0 5.384 0 12.03c0 2.128.552 4.195 1.6 6.01L.027 24l6.108-1.597A11.967 11.967 0 0 0 12.031 24c6.645 0 12.03-5.384 12.03-12.03S18.677 0 12.031 0zm0 22.016a9.957 9.957 0 0 1-5.074-1.385l-.364-.216-3.771.987.999-3.676-.237-.377A9.95 9.95 0 0 1 2.046 12.03c0-5.512 4.485-9.996 9.985-9.996 5.501 0 9.986 4.484 9.986 9.996 0 5.511-4.485 9.986-9.986 9.986zm5.474-7.464c-.3-.15-1.774-.875-2.049-.974-.275-.101-.475-.15-.675.15s-.774.974-.949 1.173c-.175.2-.35.225-.65.075-2.02-.756-3.46-2.115-4.21-3.4-.15-.25-.015-.386.134-.536.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.224-.244-.587-.493-.507-.674-.516l-.574-.009c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.474 1.074 2.898 1.224 3.098.15.2 2.112 3.224 5.112 4.522 1.93.834 2.76.711 3.26.586.536-.134 1.774-.725 2.024-1.424.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
                    </svg>
                </a>
            )}
        </div>
    );
}
