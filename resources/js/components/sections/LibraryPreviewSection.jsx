import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function LibraryPreviewSection({ akads, locale }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';

    const defaultAkads = [
        { slug: 'mudarabah', num: '01', arabic: 'مُضَارَبَةٌ', name: 'Mudarabah', desc: 'Profit-Sharing Partnership' },
        { slug: 'musharakah', num: '02', arabic: 'مُشَارَكَةٌ', name: 'Musharakah', desc: 'Joint-Venture Equity' },
        { slug: 'wakalah', num: '03', arabic: 'وَكَالَةٌ', name: 'Wakalah', desc: 'Agency' },
        { slug: 'murabahah', num: '04', arabic: 'مُرَابَحَةٌ', name: 'Murabahah', desc: 'Cost-Plus Sale' },
        { slug: 'ijarah', num: '05', arabic: 'إِجَارَةٌ', name: 'Ijarah', desc: 'Lease' },
        { slug: 'ijarah-muntahiya-bittamleek', num: '06', arabic: 'إِجَارَةٌ وَعْدٌ بِالتَّمْلِيكِ', name: 'Ijarah Muntahiya Bittamleek', desc: 'Lease-to-Own' },
        { slug: 'diminishing-musharakah', num: '07', arabic: 'مُشَارَكَةٌ مُتَنَاقِصَةٌ', name: 'Diminishing Musharakah', desc: 'Partnership with Buyout' },
        { slug: 'salam', num: '08', arabic: 'سَلَمٌ', name: 'Salam', desc: 'Forward Purchase' },
        { slug: 'istisna', num: '09', arabic: 'إِسْتِصْنَاعٌ', name: 'Istisna', desc: 'Manufacturing Contract' },
        { slug: 'qard', num: '10', arabic: 'قَرْضٌ', name: 'Qard', desc: 'Benevolent Loan' },
        { slug: 'waqf', num: '11', arabic: 'وَقْفٌ', name: 'Waqf', desc: 'Charitable Endowment' }
    ];

    // Merge database data if available
    const displayAkads = defaultAkads.map(item => {
        const dbAkad = akads ? akads.find(a => a.slug === item.slug || (item.slug === 'murabahah' && a.slug === 'murabaha')) : null;
        return {
            ...item,
            id: dbAkad ? dbAkad.id : item.slug,
            slug: dbAkad ? dbAkad.slug : item.slug,
            name: dbAkad ? (locale === 'id' && dbAkad.name_id ? dbAkad.name_id : dbAkad.name_en) : item.name,
            desc: dbAkad ? (locale === 'id' && dbAkad.subtitle_id ? dbAkad.subtitle_id : dbAkad.subtitle_en) : item.desc
        };
    });

    return (
        <section style={{ backgroundColor: '#F7F6F5', padding: '60px 0' }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #D1D5DB',
                        padding: '6px 16px',
                        borderRadius: '999px',
                        marginBottom: '16px'
                    }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B6D0F" strokeWidth="2.5" style={{ display: 'block' }}>
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#6B6D0F', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            {t('library_preview.badge')}
                        </span>
                    </div>

                    <h2 className="text-display-s text-forest" style={{ margin: 0, fontSize: '40px', fontWeight: 300, lineHeight: 1.2 }}>
                        {t('library_preview.headline')} <span style={{ fontStyle: 'italic', color: '#6B6D0F' }}>{t('library_preview.headline_italic')}</span>
                    </h2>
                    <p style={{ fontSize: '14px', color: '#666666', marginTop: '12px', marginBottom: 0, marginLeft: 'auto', marginRight: 'auto', maxWidth: '600px', lineHeight: '1.5', textAlign: 'center' }}>
                        {t('library_preview.description')}
                    </p>
                </div>

                {/* Content Layout */}
                <div className="grid-library-layout" style={{ gap: '24px', alignItems: 'stretch' }}>

                    {/* Left Banner Card */}
                    <div style={{
                        backgroundColor: '#131810',
                        borderRadius: '32px',
                        padding: '24px',
                        color: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        backgroundImage: 'url(/images/library-bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        height: '100%',
                        boxSizing: 'border-box',
                        minHeight: '450px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                    }}>
                        {/* Overlay to darken background */}
                        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(19, 24, 16, 0.45)', zIndex: 1 }}></div>

                        {/* Overlay Info Card */}
                        <div style={{
                            position: 'relative',
                            zIndex: 2,
                            backgroundColor: '#FFFFFF',
                            borderRadius: '20px',
                            padding: '24px',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                        }}>
                            <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#6B6D0F', letterSpacing: '0.05em', display: 'block', marginBottom: '8px', textTransform: 'uppercase' }}>
                                {t('library_preview.card_badge')}
                            </span>
                            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#131810', margin: '0 0 4px 0', fontFamily: 'Josefin Sans' }}>
                                {t('library_preview.card_title')}
                            </h3>
                            <p style={{ fontSize: '13px', color: '#666666', margin: 0 }}>
                                {t('library_preview.card_desc')}
                            </p>
                        </div>
                    </div>

                    {/* Right Grid of 11 Akads + 1 CTA */}
                    <div className="grid-2" style={{ gap: '16px' }}>
                        {displayAkads.map((akad) => (
                            <Link
                                key={akad.id}
                                href={`${prefix}/sharia-library/${akad.slug}`}
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    padding: 'clamp(16px, 4vw, 24px)',
                                    borderRadius: '16px',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 'clamp(8px, 2vw, 16px)',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
                                    transition: 'transform 0.2s'
                                }}
                                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
                                className="hover-primary"
                            >
                                {/* Left Section - Number and Arabic Text */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(4px, 2vw, 12px)', minWidth: 'clamp(60px, 15vw, 100px)', flexShrink: 0 }}>
                                    <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#6B6D0F' }}>
                                        {akad.num}
                                    </span>
                                    <span style={{
                                        fontFamily: 'Amiri, serif',
                                        fontSize: '18px',
                                        color: '#6B6D0F',
                                        fontWeight: 'bold',
                                        marginLeft: 'auto'
                                    }}>
                                        {akad.arabic}
                                    </span>
                                </div>

                                {/* Divider */}
                                <div style={{ width: '1px', height: '24px', backgroundColor: 'rgba(0,0,0,0.06)', flexShrink: 0 }}></div>

                                {/* Right Section - Latin name and description */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', overflow: 'hidden' }}>
                                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#131810', margin: 0, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                        {akad.name}
                                    </h4>
                                    <p style={{ fontSize: '12px', color: '#666666', margin: 0, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                        {akad.desc}
                                    </p>
                                </div>
                            </Link>
                        ))}

                        {/* 12th Item - CTA Card */}
                        <Link
                            href={`${prefix}/sharia-library`}
                            style={{
                                backgroundColor: '#4F5331',
                                padding: '20px 24px',
                                borderRadius: '16px',
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                color: '#FFFFFF',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseOver={e => e.currentTarget.style.backgroundColor = '#3C4025'}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = '#4F5331'}
                        >
                            <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#FFFFFF' }}>
                                {t('library_preview.browse_all')}
                            </span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
