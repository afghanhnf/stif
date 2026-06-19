import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import SeoHead from '@/components/seo/SeoHead';
import Breadcrumb from '@/components/seo/Breadcrumb';
import FadeIn from '@/components/animations/FadeIn';

export default function Contact({ locale, email, phone, settings }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';

    const breadcrumbItems = [
        { label: locale === 'id' ? 'Beranda' : 'Home', url: prefix || '/' },
        { label: t('nav.contact'), url: `${prefix}/contact` }
    ];

    const [activeTab, setActiveTab] = useState('question');

    const formQuestion = useForm({
        name: '', email: '', phone: '', message: '', _website_url: ''
    });

    const formProject = useForm({
        name: '', email: '', phone: '', company: '', project_title: '', project_description: '', sector: '', ticket_size_requested: '', _website_url: ''
    });

    const submitQuestion = (e) => {
        e.preventDefault();
        formQuestion.post(`${prefix}/contact/message`, {
            preserveScroll: true,
            onSuccess: () => formQuestion.reset(),
        });
    };

    const submitProject = (e) => {
        e.preventDefault();
        formProject.post(`${prefix}/contact/project`, {
            preserveScroll: true,
            onSuccess: () => formProject.reset(),
        });
    };

    // Shared styles
    const inputStyle = {
        width: '100%',
        padding: '14px 16px',
        borderRadius: '12px',
        border: '1px solid #E2E0DC',
        fontSize: '15px',
        fontFamily: 'inherit',
        color: '#2b2d3b',
        backgroundColor: '#FAFAF9',
        outline: 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
    };

    const labelStyle = {
        display: 'block',
        fontSize: '13px',
        fontWeight: 600,
        color: '#4F5331',
        marginBottom: '6px',
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
    };

    const fieldGroupStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const tabStyle = (isActive) => ({
        flex: 1,
        padding: '12px 24px',
        textAlign: 'center',
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: 600,
        borderRadius: '12px',
        backgroundColor: isActive ? '#4F5331' : 'transparent',
        color: isActive ? '#FFFFFF' : '#4F5331',
        border: isActive ? 'none' : '1px solid #4F5331',
        transition: 'all 0.2s',
    });

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead title={t('nav.contact')} description="Get in touch with STIF Capital." />

            <section style={{ backgroundColor: '#F7F6F5', padding: '120px 0 40px 0', minHeight: '80vh' }}>
                <div className="container">
                    <Breadcrumb items={breadcrumbItems} />
                    <div className="contact-hero" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '18px', alignItems: 'stretch' }}>
                        {/* Left Content Card */}
                        <FadeIn direction="up">
                            <div style={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '22px',
                                padding: 'clamp(32px, 5vw, 56px) clamp(28px, 4.5vw, 48px)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                height: '100%',
                                boxSizing: 'border-box',
                                minHeight: '480px',
                            }}>
                                {/* Badge */}
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    width: 'fit-content',
                                    padding: '8px 16px',
                                    borderRadius: '999px',
                                    backgroundColor: '#eef3dd',
                                    border: '1px solid #d4dfad',
                                    marginBottom: '32px',
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7b8f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 2L11 13" />
                                        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                                    </svg>
                                    <span style={{
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        color: '#7b8f47',
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                    }}>
                                        {t('contact_page.hero_badge')}
                                    </span>
                                </div>

                                <h1 style={{
                                    fontFamily: 'Josefin Sans, sans-serif',
                                    fontSize: 'clamp(36px, 4.5vw, 56px)',
                                    fontWeight: 300,
                                    lineHeight: 1.12,
                                    color: '#2b2d3b',
                                    margin: 0,
                                    marginBottom: '24px',
                                }}>
                                    {t('contact_page.hero_title')}{' '}
                                    <span style={{ color: '#7b8f47', fontStyle: 'italic' }}>{t('contact_page.hero_title_italic')}</span>
                                </h1>

                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: 1.7,
                                    color: '#687085',
                                    maxWidth: '520px',
                                    marginBottom: '40px',
                                }}>
                                    {t('contact_page.hero_desc')}
                                </p>

                                {/* Contact Info */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <a href={`mailto:${email}`} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        textDecoration: 'none',
                                        color: '#2b2d3b',
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseOver={e => e.currentTarget.style.color = '#7b8f47'}
                                    onMouseOut={e => e.currentTarget.style.color = '#2b2d3b'}
                                    >
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '12px',
                                            backgroundColor: '#eef3dd',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                        }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7b8f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                                <path d="M22 7L13.03 12.7a1.94 1.94 0 01-2.06 0L2 7" />
                                            </svg>
                                        </div>
                                        {email}
                                    </a>
                                    <a href={`tel:${phone}`} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        textDecoration: 'none',
                                        color: '#2b2d3b',
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseOver={e => e.currentTarget.style.color = '#7b8f47'}
                                    onMouseOut={e => e.currentTarget.style.color = '#2b2d3b'}
                                    >
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '12px',
                                            backgroundColor: '#eef3dd',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                        }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7b8f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                            </svg>
                                        </div>
                                        {phone}
                                    </a>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Right Form Card */}
                        <FadeIn direction="up" delay={150}>
                            <div style={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '22px',
                                padding: 'clamp(32px, 5vw, 56px) clamp(28px, 4.5vw, 48px)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                            }}>
                                <h3 style={{
                                    fontSize: '24px',
                                    fontWeight: 600,
                                    color: '#2b2d3b',
                                    margin: 0,
                                    marginBottom: '8px',
                                }}>
                                    Let's connect
                                </h3>
                                <p style={{ fontSize: '15px', color: '#687085', marginBottom: '24px' }}>
                                    Select the type of inquiry below.
                                </p>

                                <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
                                    <button onClick={() => setActiveTab('question')} style={tabStyle(activeTab === 'question')}>
                                        Ask a Question
                                    </button>
                                    <button onClick={() => setActiveTab('project')} style={tabStyle(activeTab === 'project')}>
                                        Submit Project
                                    </button>
                                </div>

                                {(formQuestion.recentlySuccessful || formProject.recentlySuccessful) && (
                                    <div style={{
                                        backgroundColor: '#eef3dd',
                                        borderLeft: '4px solid #7b8f47',
                                        padding: '16px 20px',
                                        borderRadius: '0 8px 8px 0',
                                        marginBottom: '32px',
                                        color: '#4f5331',
                                        fontSize: '15px',
                                        fontWeight: 500,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                    }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7b8f47" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                        Success! We will get back to you shortly.
                                    </div>
                                )}

                                {activeTab === 'question' ? (
                                    <form onSubmit={submitQuestion} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <input type="text" name="_website_url" value={formQuestion.data._website_url} onChange={e => formQuestion.setData('_website_url', e.target.value)} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                                        <div style={fieldGroupStyle}>
                                            <label style={labelStyle}>{t('contact_page.field_name')}</label>
                                            <input
                                                type="text"
                                                required
                                                value={formQuestion.data.name}
                                                onChange={e => formQuestion.setData('name', e.target.value)}
                                                placeholder={t('contact_page.placeholder_name')}
                                                style={inputStyle}
                                                onFocus={e => { e.target.style.borderColor = '#7b8f47'; e.target.style.boxShadow = '0 0 0 3px rgba(123,143,71,0.1)'; }}
                                                onBlur={e => { e.target.style.borderColor = '#E2E0DC'; e.target.style.boxShadow = 'none'; }}
                                            />
                                        </div>
                                        <div style={fieldGroupStyle}>
                                            <label style={labelStyle}>{t('contact_page.field_email')}</label>
                                            <input
                                                type="email"
                                                required
                                                value={formQuestion.data.email}
                                                onChange={e => formQuestion.setData('email', e.target.value)}
                                                placeholder={t('contact_page.placeholder_email')}
                                                style={inputStyle}
                                            />
                                        </div>
                                        <div style={fieldGroupStyle}>
                                            <label style={labelStyle}>{t('contact_page.field_phone')}</label>
                                            <input
                                                type="text"
                                                value={formQuestion.data.phone}
                                                onChange={e => formQuestion.setData('phone', e.target.value)}
                                                placeholder={t('contact_page.placeholder_phone')}
                                                style={inputStyle}
                                            />
                                        </div>
                                        <div style={fieldGroupStyle}>
                                            <label style={labelStyle}>Message / Question</label>
                                            <textarea
                                                required
                                                value={formQuestion.data.message}
                                                onChange={e => formQuestion.setData('message', e.target.value)}
                                                rows="4"
                                                placeholder="How can we help you?"
                                                style={{ ...inputStyle, resize: 'vertical' }}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={formQuestion.processing}
                                            style={{
                                                width: '100%',
                                                padding: '16px 32px',
                                                backgroundColor: '#4F5331',
                                                color: '#FFFFFF',
                                                border: 'none',
                                                borderRadius: '999px',
                                                fontSize: '15px',
                                                fontWeight: 600,
                                                cursor: formQuestion.processing ? 'not-allowed' : 'pointer',
                                                opacity: formQuestion.processing ? 0.7 : 1,
                                            }}
                                        >
                                            {formQuestion.processing ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </form>
                                ) : (
                                    <form onSubmit={submitProject} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <input type="text" name="_website_url" value={formProject.data._website_url} onChange={e => formProject.setData('_website_url', e.target.value)} style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                                        {/* Row 1: Name & Email */}
                                        <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                                            <div style={fieldGroupStyle}>
                                                <label style={labelStyle}>{t('contact_page.field_name')}</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formProject.data.name}
                                                    onChange={e => formProject.setData('name', e.target.value)}
                                                    placeholder={t('contact_page.placeholder_name')}
                                                    style={inputStyle}
                                                />
                                            </div>
                                            <div style={fieldGroupStyle}>
                                                <label style={labelStyle}>{t('contact_page.field_email')}</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formProject.data.email}
                                                    onChange={e => formProject.setData('email', e.target.value)}
                                                    placeholder={t('contact_page.placeholder_email')}
                                                    style={inputStyle}
                                                />
                                            </div>
                                        </div>

                                        {/* Row 2: Phone & Company */}
                                        <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                                            <div style={fieldGroupStyle}>
                                                <label style={labelStyle}>{t('contact_page.field_phone')}</label>
                                                <input
                                                    type="text"
                                                    value={formProject.data.phone}
                                                    onChange={e => formProject.setData('phone', e.target.value)}
                                                    placeholder={t('contact_page.placeholder_phone')}
                                                    style={inputStyle}
                                                />
                                            </div>
                                            <div style={fieldGroupStyle}>
                                                <label style={labelStyle}>{t('contact_page.field_company')}</label>
                                                <input
                                                    type="text"
                                                    value={formProject.data.company}
                                                    onChange={e => formProject.setData('company', e.target.value)}
                                                    placeholder={t('contact_page.placeholder_company')}
                                                    style={inputStyle}
                                                />
                                            </div>
                                        </div>

                                        {/* Row 3: Project Title */}
                                        <div style={fieldGroupStyle}>
                                            <label style={labelStyle}>{t('contact_page.field_project')}</label>
                                            <input
                                                type="text"
                                                value={formProject.data.project_title}
                                                onChange={e => formProject.setData('project_title', e.target.value)}
                                                placeholder={t('contact_page.placeholder_project')}
                                                style={inputStyle}
                                            />
                                        </div>

                                        {/* Row 4: Executive Summary */}
                                        <div style={fieldGroupStyle}>
                                            <label style={labelStyle}>{t('contact_page.field_summary')}</label>
                                            <textarea
                                                required
                                                value={formProject.data.project_description}
                                                onChange={e => formProject.setData('project_description', e.target.value)}
                                                rows="5"
                                                placeholder={t('contact_page.placeholder_summary')}
                                                style={{ ...inputStyle, resize: 'vertical' }}
                                            />
                                        </div>

                                        {/* Row 5: Sector & Ticket Size */}
                                        <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                                            <div style={fieldGroupStyle}>
                                                <label style={labelStyle}>{t('contact_page.field_sector')}</label>
                                                <input
                                                    type="text"
                                                    value={formProject.data.sector}
                                                    onChange={e => formProject.setData('sector', e.target.value)}
                                                    placeholder={t('contact_page.placeholder_sector')}
                                                    style={inputStyle}
                                                />
                                            </div>
                                            <div style={fieldGroupStyle}>
                                                <label style={labelStyle}>{t('contact_page.field_ticket_size')}</label>
                                                <input
                                                    type="text"
                                                    value={formProject.data.ticket_size_requested}
                                                    onChange={e => formProject.setData('ticket_size_requested', e.target.value)}
                                                    placeholder={t('contact_page.placeholder_ticket')}
                                                    style={inputStyle}
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={formProject.processing}
                                            style={{
                                                width: '100%',
                                                padding: '16px 32px',
                                                backgroundColor: '#4F5331',
                                                color: '#FFFFFF',
                                                border: 'none',
                                                borderRadius: '999px',
                                                fontSize: '15px',
                                                fontWeight: 600,
                                                cursor: formProject.processing ? 'not-allowed' : 'pointer',
                                                opacity: formProject.processing ? 0.7 : 1,
                                            }}
                                        >
                                            {formProject.processing ? 'Submitting...' : 'Submit Project'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ============================================================
                CONTACT INFO CARDS
                ============================================================ */}
            <section style={{ backgroundColor: '#F7F6F5', paddingTop: '18px', paddingBottom: '48px' }}>
                <div className="container">
                    <div className="contact-info-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
                        {/* Email Card */}
                        <FadeIn direction="up" delay={0}>
                            <div style={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '22px',
                                padding: '36px 32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                            }}>
                                <div style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '14px',
                                    backgroundColor: '#eef3dd',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7b8f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="M22 7L13.03 12.7a1.94 1.94 0 01-2.06 0L2 7" />
                                    </svg>
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        color: '#7b8f47',
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        marginBottom: '8px',
                                    }}>
                                        {t('contact_page.card_email')}
                                    </p>
                                    <a href={`mailto:${email}`} style={{
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        color: '#2b2d3b',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseOver={e => e.currentTarget.style.color = '#7b8f47'}
                                    onMouseOut={e => e.currentTarget.style.color = '#2b2d3b'}
                                    >
                                        {email}
                                    </a>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Phone Card */}
                        <FadeIn direction="up" delay={100}>
                            <div style={{
                                backgroundColor: '#FFFFFF',
                                borderRadius: '22px',
                                padding: '36px 32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                            }}>
                                <div style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '14px',
                                    backgroundColor: '#eef3dd',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7b8f47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        color: '#7b8f47',
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        marginBottom: '8px',
                                    }}>
                                        {t('contact_page.card_phone')}
                                    </p>
                                    <a href={`tel:${phone}`} style={{
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        color: '#2b2d3b',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseOver={e => e.currentTarget.style.color = '#7b8f47'}
                                    onMouseOut={e => e.currentTarget.style.color = '#2b2d3b'}
                                    >
                                        {phone}
                                    </a>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Office Card */}
                        <FadeIn direction="up" delay={200}>
                            <div style={{
                                backgroundColor: '#273315',
                                borderRadius: '22px',
                                padding: '36px 32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                color: '#FFFFFF',
                            }}>
                                <div style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '14px',
                                    backgroundColor: '#b9ca82',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#273315" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: '11px',
                                        fontWeight: 700,
                                        color: '#b9ca82',
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        marginBottom: '8px',
                                    }}>
                                        {t('contact_page.card_office')}
                                    </p>
                                    <p style={{
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        color: '#FFFFFF',
                                        lineHeight: 1.5,
                                        margin: 0,
                                    }}>
                                        {t('contact_page.office_city')}
                                    </p>
                                    <p style={{
                                        fontSize: '14px',
                                        color: '#A3A8A0',
                                        lineHeight: 1.5,
                                        marginTop: '4px',
                                    }}>
                                        {t('contact_page.office_desc')}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Spinner animation */}
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </Layout>
    );
}