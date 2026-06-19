import { useState, useEffect, useRef } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Header({ locale, settings }) {
    const { t } = useTranslation();
    const { url } = usePage();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Search States
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const searchTimeoutRef = useRef(null);

    // Handle Search Input
    useEffect(() => {
        if (searchQuery.trim().length === 0) {
            setSearchResults([]);
            setIsSearching(false);
            if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
            return;
        }

        setIsSearching(true);
        if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

        searchTimeoutRef.current = setTimeout(async () => {
            try {
                const res = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}&locale=${locale}`);
                if (res.ok) {
                    const data = await res.json();
                    setSearchResults(data);
                } else {
                    setSearchResults([]);
                }
            } catch (error) {
                console.error("Search error:", error);
                setSearchResults([]);
            } finally {
                setIsSearching(false);
            }
        }, 300); // 300ms debounce
    }, [searchQuery, locale]);

    // Close Modal Handler
    const handleCloseSearch = () => {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSearchResults([]);
    };

    const currentUrl = url;
    
    const switchLanguage = (newLocale) => {
        if (newLocale === locale) return;
        
        let newUrl = currentUrl;
        if (newLocale === 'id') {
            if (!newUrl.startsWith('/id')) {
                newUrl = '/id' + (newUrl === '/' ? '' : newUrl);
            }
        } else {
            if (newUrl.startsWith('/id')) {
                newUrl = newUrl.substring(3) || '/';
            }
        }
        router.visit(newUrl);
    };

    const prefix = locale === 'id' ? '/id' : '';

    return (
        <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'var(--color-white)', borderBottom: '1px solid var(--color-neutral-200)' }}>
            {/* Top Bar */}
            <div style={{ backgroundColor: 'var(--color-forest-900)', color: 'var(--color-white)', fontSize: '12px', padding: '12px 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="hide-mobile" style={{ display: 'flex', gap: 'var(--space-2xl)', opacity: 0.8 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Jakarta
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            Mon - Fri · 08.00–17.00
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', opacity: 0.8, marginLeft: 'auto' }}>
                        <span>Language</span>
                        <div style={{ display: 'flex', gap: '4px' }}>
                            <button 
                                onClick={() => switchLanguage('en')}
                                className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
                            >
                                EN
                            </button>
                            <button 
                                onClick={() => switchLanguage('id')}
                                className={`lang-btn ${locale === 'id' ? 'active' : ''}`}
                            >
                                ID
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '90px' }}>
                <Link href={`${prefix}/`} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img src="/images/color-logos.png" alt="STIF Capital Logo" style={{ height: '45px' }} />
                </Link>
                
                <nav className="desktop-only" style={{ display: 'flex', gap: 'var(--space-xl)', color: 'var(--color-forest-700)', fontWeight: 500 }}>
                    <Link href={`${prefix}/who-we-are`} className="hover-primary">{t('nav.who_we_are')}</Link>
                    <Link href={`${prefix}/services`} className="hover-primary">{t('nav.services')}</Link>
                    <Link href={`${prefix}/sharia-library`} className="hover-primary">{t('nav.sharia_library')}</Link>
                    <Link href={`${prefix}/insight`} className="hover-primary">{t('nav.insight')}</Link>
                    <Link href={`${prefix}/contact`} className="hover-primary">{t('nav.contact')}</Link>
                </nav>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
                    <button onClick={() => setIsSearchOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-forest-700)', padding: '8px' }} className="hover-primary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                    
                    <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
                        <Link href={`${prefix}/business-case`} className="btn btn--outline-forest" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', borderRadius: '8px' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            {t('nav.business_case')}
                        </Link>
                        
                        <Link href={`${prefix}/contact`} className="btn btn--forest" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '24px' }}>
                            Submit Project
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                        className="mobile-only"
                        style={{ 
                            background: 'none', 
                            border: 'none', 
                            cursor: 'pointer', 
                            color: 'var(--color-forest-900)',
                            padding: '8px'
                        }}
                    >
                        {isMobileMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="mobile-only"
                    style={{ 
                        backgroundColor: 'var(--color-white)', 
                        borderTop: '1px solid var(--color-neutral-200)',
                        padding: '24px',
                        boxShadow: 'var(--shadow-lg)',
                        animation: 'fadeIn 0.2s ease-out'
                    }}
                >
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--color-forest-700)', fontWeight: 500, marginBottom: '24px' }}>
                        <Link href={`${prefix}/who-we-are`} onClick={() => setIsMobileMenuOpen(false)} className="hover-primary" style={{ fontSize: '16px' }}>{t('nav.who_we_are')}</Link>
                        <Link href={`${prefix}/services`} onClick={() => setIsMobileMenuOpen(false)} className="hover-primary" style={{ fontSize: '16px' }}>{t('nav.services')}</Link>
                        <Link href={`${prefix}/sharia-library`} onClick={() => setIsMobileMenuOpen(false)} className="hover-primary" style={{ fontSize: '16px' }}>{t('nav.sharia_library')}</Link>
                        <Link href={`${prefix}/insight`} className="hover-primary" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '16px' }}>{t('nav.insight')}</Link>
                        <Link href={`${prefix}/contact`} className="hover-primary" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '16px' }}>{t('nav.contact')}</Link>
                    </nav>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Link href={`${prefix}/business-case`} onClick={() => setIsMobileMenuOpen(false)} className="btn btn--outline-forest" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', borderRadius: '8px', width: '100%' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            {t('nav.business_case')}
                        </Link>
                        
                        <Link href={`${prefix}/contact`} onClick={() => setIsMobileMenuOpen(false)} className="btn btn--forest" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', borderRadius: '24px', width: '100%' }}>
                            Submit Project
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </Link>
                    </div>
                </div>
            )}

            {/* Modern Search Modal Overlay */}
            {isSearchOpen && (
                <div
                    style={{
                        position: 'fixed', inset: 0, backgroundColor: 'rgba(255,255,255,0.95)',
                        zIndex: 100, display: 'flex', flexDirection: 'column',
                        backdropFilter: 'blur(10px)', animation: 'fadeIn 0.2s ease-out'
                    }}
                >
                    <div className="container" style={{ paddingTop: '60px', position: 'relative', flex: 1, maxWidth: '800px', margin: '0 auto', width: '100%' }}>
                        <button
                            onClick={handleCloseSearch}
                            style={{ position: 'absolute', top: '30px', right: '0', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-forest-900)', padding: '8px', borderRadius: '50%', backgroundColor: 'var(--color-cream-100)', transition: 'background 0.2s' }}
                            onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--color-cream-200)'}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--color-cream-100)'}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>

                        <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
                            <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-primary-500)', letterSpacing: '0.1em', display: 'block', marginBottom: '16px' }}>EXPLORE</span>
                            <h2 className="text-display-s text-forest">
                                {locale === 'id' ? 'Apa yang Anda cari?' : 'What are you looking for?'}
                            </h2>
                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); }} style={{ position: 'relative', marginBottom: 'var(--space-xl)' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-neutral-400)' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input
                                type="text"
                                placeholder={locale === 'id' ? 'Cari layanan, artikel, portofolio...' : 'Search services, insights, portfolios...'}
                                autoFocus
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%', padding: 'clamp(16px, 3vw, 24px) clamp(16px, 3vw, 24px) clamp(16px, 3vw, 24px) clamp(48px, 6vw, 64px)', fontSize: 'clamp(16px, 3vw, 20px)',
                                    borderRadius: '16px', border: '2px solid var(--color-neutral-200)',
                                    outline: 'none', backgroundColor: 'var(--color-white)',
                                    boxShadow: 'var(--shadow-md)', transition: 'border-color 0.2s, box-shadow 0.2s',
                                    color: 'var(--color-forest-900)'
                                }}
                                onFocus={e => { e.target.style.borderColor = 'var(--color-primary-500)'; e.target.style.boxShadow = 'var(--shadow-lg)'; }}
                                onBlur={e => { e.target.style.borderColor = 'var(--color-neutral-200)'; e.target.style.boxShadow = 'var(--shadow-md)'; }}
                            />
                            {isSearching && (
                                <div style={{ position: 'absolute', right: '12px', top: '12px', bottom: '12px', display: 'flex', alignItems: 'center', padding: '0 20px', color: 'var(--color-neutral-400)' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}><path d="M21 12a9 9 0 11-6.219-8.56" /></svg>
                                </div>
                            )}
                        </form>

                        {searchQuery.trim().length > 0 ? (
                            <div style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '12px' }}>
                                {searchResults.length > 0 ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                        {searchResults.map((result, idx) => (
                                            <Link
                                                key={idx}
                                                href={result.url}
                                                onClick={handleCloseSearch}
                                                style={{
                                                    display: 'flex', flexDirection: 'column', padding: '16px 20px',
                                                    backgroundColor: 'var(--color-white)', border: '1px solid var(--color-neutral-200)',
                                                    borderRadius: '12px', textDecoration: 'none', transition: 'all 0.2s'
                                                }}
                                                onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--color-primary-300)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)'; }}
                                                onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--color-neutral-200)'; e.currentTarget.style.boxShadow = 'none'; }}
                                            >
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                                    <span style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--color-primary-600)', backgroundColor: 'var(--color-primary-100)', padding: '4px 8px', borderRadius: '4px' }}>
                                                        {result.badge}
                                                    </span>
                                                    <h4 style={{ margin: 0, fontSize: '16px', color: 'var(--color-forest-900)', fontWeight: 600 }}>{result.title}</h4>
                                                </div>
                                                <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-neutral-500)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                    {result.snippet}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    !isSearching && (
                                        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--color-neutral-500)' }}>
                                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-neutral-300)" strokeWidth="1" style={{ marginBottom: '16px' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                            <p>{locale === 'id' ? 'Tidak ada hasil yang ditemukan untuk' : 'No results found for'} "{searchQuery}"</p>
                                        </div>
                                    )
                                )}
                            </div>
                        ) : (
                            <div style={{ display: 'flex', gap: 'var(--space-2xl)' }}>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-neutral-400)', letterSpacing: '0.1em', marginBottom: '16px', fontWeight: 'bold' }}>Quick Links</h4>
                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        <li><Link href={`${prefix}/services`} onClick={handleCloseSearch} style={{ fontSize: '16px', color: 'var(--color-forest-900)', display: 'flex', alignItems: 'center', gap: '8px' }} className="hover-primary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg> Our Services</Link></li>
                                        <li><Link href={`${prefix}/sharia-library`} onClick={handleCloseSearch} style={{ fontSize: '16px', color: 'var(--color-forest-900)', display: 'flex', alignItems: 'center', gap: '8px' }} className="hover-primary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg> Sharia Library</Link></li>
                                        <li><Link href={`${prefix}/insight`} onClick={handleCloseSearch} style={{ fontSize: '16px', color: 'var(--color-forest-900)', display: 'flex', alignItems: 'center', gap: '8px' }} className="hover-primary"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg> Market Insights</Link></li>
                                    </ul>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-neutral-400)', letterSpacing: '0.1em', marginBottom: '16px', fontWeight: 'bold' }}>Popular Tags</h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {['Private Equity', 'Halal Supply Chain', 'Mudarabah', 'Impact Investing', 'Trade Finance'].map(tag => (
                                            <span key={tag} onClick={() => setSearchQuery(tag)} style={{ padding: '8px 16px', backgroundColor: 'var(--color-cream-100)', color: 'var(--color-forest-900)', borderRadius: '20px', fontSize: '13px', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--color-primary-100)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--color-cream-100)'}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
