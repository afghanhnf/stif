import { useTranslation } from 'react-i18next';

export default function VideoBannerSection() {
    const { t } = useTranslation();
    return (
        <section style={{ backgroundColor: '#F7F6F5', padding: '40px 0' }}>
            <div className="container">
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: 'clamp(300px, 50vw, 460px)',
                    borderRadius: '32px',
                    overflow: 'hidden',
                    backgroundImage: `url(/images/video-banner-bg.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                }}>
                    {/* Dark Green Translucent Overlay */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(19, 24, 16, 0.7) 0%, rgba(19, 24, 16, 0.4) 100%)'
                    }}></div>

                    {/* Top Left - Manifesto Info */}
                    <div style={{
                        position: 'absolute',
                        top: 'clamp(24px, 5vw, 48px)',
                        left: 'clamp(24px, 5vw, 48px)',
                        color: '#9DA65D',
                        fontSize: '11px',
                        fontWeight: 'bold',
                        letterSpacing: '0.05em',
                        zIndex: 2
                    }}>
                        {t('video_banner.badge')}
                    </div>

                    {/* Bottom Left - Headline & Subtitle */}
                    <div style={{
                        position: 'absolute',
                        bottom: 'clamp(24px, 5vw, 48px)',
                        left: 'clamp(24px, 5vw, 48px)',
                        color: '#FFFFFF',
                        maxWidth: '650px',
                        zIndex: 2
                    }}>
                        <h2 style={{ 
                            fontSize: 'clamp(28px, 5vw, 44px)', 
                            fontWeight: 300, 
                            lineHeight: 1.15, 
                            margin: 0, 
                            fontFamily: 'Josefin Sans' 
                        }}>
                            <span style={{ fontStyle: 'italic', color: '#9DA65D' }}>{t('video_banner.headline_italic')}</span> {t('video_banner.headline')}<br/>
                            {t('video_banner.headline_2')}
                        </h2>
                        <p style={{ 
                            fontSize: '13px', 
                            color: '#A3A8A0', 
                            marginTop: '16px', 
                            marginBottom: 0,
                            lineHeight: '1.5'
                        }}>
                            {t('video_banner.description')}
                        </p>
                    </div>

                    {/* Bottom Right - Play Button */}
                    <button style={{
                        position: 'absolute',
                        bottom: 'clamp(24px, 5vw, 48px)',
                        right: 'clamp(24px, 5vw, 48px)',
                        width: 'clamp(48px, 8vw, 72px)',
                        height: 'clamp(48px, 8vw, 72px)',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#131810',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                        transition: 'transform 0.2s',
                        cursor: 'pointer',
                        zIndex: 2
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '4px' }}>
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
