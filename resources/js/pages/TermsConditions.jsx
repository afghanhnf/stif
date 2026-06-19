import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import SeoHead from '@/components/seo/SeoHead';
import FadeIn from '@/components/animations/FadeIn';

export default function TermsConditions({ locale, settings }) {
    const prefix = locale === 'id' ? '/id' : '';

    const content = {
        en: {
            title: 'Terms & Conditions',
            subtitle: 'Last updated: June 18, 2026',
            badge: 'LEGAL & COMPLIANCE',
            intro: 'Welcome to stifcapital.com. By accessing or using this website, you agree to comply with and be bound by the following Terms and Conditions of use, which govern STIF Capital\'s relationship with you in relation to this website.',
            sections: [
                {
                    id: 'agreement',
                    title: '1. Agreement to Terms',
                    text: 'By visiting and accessing our site, you acknowledge that you have read, understood, and agreed to be bound by these terms. If you do not agree to all of these terms, you are prohibited from using the website and must discontinue use immediately.',
                },
                {
                    id: 'no-advice',
                    title: '2. No Financial or Investment Advice',
                    text: 'The contents of this website are for general informational purposes only and do not constitute financial, investment, legal, or tax advice. STIF Capital is a private equity firm; past performance of any case studies or investments is not indicative of future returns.',
                },
                {
                    id: 'sharia-guidelines',
                    title: '3. Sharia Compliance Guidelines',
                    text: 'STIF Capital operates strictly under Sharia principles. Any mandate or project submitted to us must comply with Islamic finance principles. Submissions involving riba (interest/usury), gharar (speculative uncertainty), maysir (gambling), or non-halal business activities will be rejected immediately.',
                },
                {
                    id: 'intellectual-property',
                    title: '4. Intellectual Property Rights',
                    text: 'All content, logos, branding, layout design, photography, and business cases displayed on this website are the intellectual property of STIF Capital. You may not distribute, reproduce, modify, or use our intellectual property without our express prior written consent.',
                },
                {
                    id: 'limitation-liability',
                    title: '5. Limitation of Liability',
                    text: 'To the maximum extent permitted by law, STIF Capital shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your access to or use of the website, including but not limited to loss of data or technical errors.',
                },
                {
                    id: 'governing-law',
                    title: '6. Governing Law & Jurisdiction',
                    text: 'These terms are governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in Jakarta, Indonesia.',
                }
            ],
            quickLinks: 'QUICK NAVIGATION'
        },
        id: {
            title: 'Syarat & Ketentuan',
            subtitle: 'Terakhir diperbarui: 18 Juni 2026',
            badge: 'HUKUM & KEPATUHAN',
            intro: 'Selamat datang di stifcapital.com. Dengan mengakses atau menggunakan situs web ini, Anda setuju untuk mematuhi dan terikat oleh Syarat dan Ketentuan berikut, yang mengatur hubungan STIF Capital dengan Anda terkait dengan penggunaan situs web ini.',
            sections: [
                {
                    id: 'agreement',
                    title: '1. Persetujuan Ketentuan',
                    text: 'Dengan mengunjungi dan mengakses situs kami, Anda mengakui bahwa Anda telah membaca, memahami, dan setuju untuk terikat oleh ketentuan ini. Jika Anda tidak menyetujui semua ketentuan ini, Anda dilarang menggunakan situs web ini dan harus segera menghentikan penggunaan.',
                },
                {
                    id: 'no-advice',
                    title: '2. Bukan Nasihat Keuangan atau Investasi',
                    text: 'Konten dalam situs web ini hanya untuk tujuan informasi umum dan tidak merupakan nasihat keuangan, investasi, hukum, atau pajak. STIF Capital adalah perusahaan private equity; kinerja masa lalu dari studi kasus atau investasi tidak mencerminkan imbal hasil di masa depan.',
                },
                {
                    id: 'sharia-guidelines',
                    title: '3. Pedoman Kepatuhan Syariah',
                    text: 'STIF Capital beroperasi secara ketat di bawah hukum Syariah. Setiap mandat atau proyek yang diajukan kepada kami harus mematuhi prinsip keuangan Islam. Pengajuan yang melibatkan riba (bunga), gharar (ketidakpastian spekulatif), maysir (perjudian), atau kegiatan bisnis non-halal akan segera ditolak.',
                },
                {
                    id: 'intellectual-property',
                    title: '4. Hak Kekayaan Intelektual',
                    text: 'Semua konten, logo, branding, desain tata letak, foto, dan kasus bisnis yang ditampilkan di situs web ini merupakan kekayaan intelektual milik STIF Capital. Anda tidak diperkenankan menyebarluaskan, memproduksi ulang, mengubah, atau menggunakan kekayaan intelektual kami tanpa persetujuan tertulis sebelumnya.',
                },
                {
                    id: 'limitation-liability',
                    title: '5. Batasan Tanggung Jawab',
                    text: 'Sejauh diizinkan oleh hukum yang berlaku, STIF Capital tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari akses atau penggunaan situs web ini, termasuk namun tidak terbatas pada kehilangan data atau kesalahan teknis.',
                },
                {
                    id: 'governing-law',
                    title: '6. Hukum yang Mengatur & Yurisdiksi',
                    text: 'Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap perselisihan yang timbul akan tunduk pada yurisdiksi eksklusif pengadilan yang berwenang di Jakarta, Indonesia.',
                }
            ],
            quickLinks: 'NAVIGASI CEPAT'
        }
    };

    const text = content[locale] || content.en;
    const [activeSection, setActiveSection] = useState(text.sections[0].id);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (const section of text.sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [text.sections]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            window.scrollTo({
                top: el.offsetTop - 120,
                behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead title={text.title} description={text.intro} />

            <section style={{ backgroundColor: 'var(--color-cream-50)', paddingBottom: '80px' }}>
                {/* Header Banner */}
                <div style={{ backgroundColor: '#EEF2EB', borderBottom: '1px solid var(--color-neutral-200)', padding: '60px 0' }}>
                    <div className="container">
                        <FadeIn direction="up">
                            <span style={{
                                display: 'inline-block',
                                padding: '4px 12px',
                                borderRadius: '4px',
                                backgroundColor: 'rgba(107, 109, 15, 0.08)',
                                color: 'var(--color-primary-500)',
                                fontSize: '11px',
                                fontWeight: 'bold',
                                letterSpacing: '0.05em',
                                marginBottom: '16px'
                            }}>
                                {text.badge}
                            </span>
                            <h1 style={{
                                fontSize: '42px',
                                fontWeight: 300,
                                fontFamily: 'var(--font-family-heading)',
                                color: 'var(--color-forest-900)',
                                margin: '0 0 8px 0',
                                lineHeight: 1.2
                            }}>
                                {text.title}
                            </h1>
                            <p style={{
                                margin: 0,
                                fontSize: '14px',
                                color: 'var(--color-neutral-500)',
                                fontFamily: 'var(--font-family-body)'
                            }}>
                                {text.subtitle}
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="container" style={{ marginTop: '50px' }}>
                    <div style={{ display: 'flex', gap: '40px', position: 'relative' }}>
                        
                        {/* Sidebar Navigation - Left */}
                        <div className="hide-mobile" style={{ width: '260px', flexShrink: 0 }}>
                            <div style={{ position: 'sticky', top: '120px' }}>
                                <span style={{
                                    fontSize: '11px',
                                    fontWeight: 'bold',
                                    color: 'var(--color-neutral-400)',
                                    letterSpacing: '0.05em',
                                    display: 'block',
                                    marginBottom: '16px'
                                }}>
                                    {text.quickLinks}
                                </span>
                                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {text.sections.map((section) => {
                                        const isActive = activeSection === section.id;
                                        return (
                                            <li key={section.id}>
                                                <button
                                                    onClick={() => scrollTo(section.id)}
                                                    style={{
                                                        background: 'none',
                                                        border: 'none',
                                                        textAlign: 'left',
                                                        cursor: 'pointer',
                                                        fontSize: '14px',
                                                        fontFamily: 'var(--font-family-body)',
                                                        fontWeight: isActive ? '600' : '400',
                                                        color: isActive ? 'var(--color-primary-500)' : 'var(--color-neutral-500)',
                                                        padding: '4px 0',
                                                        transition: 'all 0.2s ease',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px'
                                                    }}
                                                >
                                                    <span style={{
                                                        width: '6px',
                                                        height: '6px',
                                                        borderRadius: '50%',
                                                        backgroundColor: isActive ? 'var(--color-primary-500)' : 'transparent',
                                                        transition: 'background-color 0.2s'
                                                    }} />
                                                    {section.title.split('. ')[1] || section.title}
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                        {/* Main Body text - Right */}
                        <div style={{ flex: 1, maxWidth: '820px' }}>
                            <FadeIn direction="up">
                                <div style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '24px',
                                    padding: '40px 48px',
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.02)',
                                    border: '1px solid var(--color-neutral-200)',
                                    boxSizing: 'border-box'
                                }}>
                                    <p style={{
                                        fontSize: '16px',
                                        lineHeight: '1.7',
                                        color: 'var(--color-neutral-700)',
                                        fontFamily: 'var(--font-family-body)',
                                        marginBottom: '40px',
                                        fontWeight: '500'
                                    }}>
                                        {text.intro}
                                    </p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                        {text.sections.map((section, idx) => (
                                            <div
                                                id={section.id}
                                                key={section.id}
                                                style={{
                                                    borderTop: idx > 0 ? '1px solid var(--color-neutral-100)' : 'none',
                                                    paddingTop: idx > 0 ? '32px' : '0'
                                                }}
                                            >
                                                <h2 style={{
                                                    fontSize: '22px',
                                                    fontWeight: '600',
                                                    fontFamily: 'var(--font-family-heading)',
                                                    color: 'var(--color-forest-900)',
                                                    margin: '0 0 16px 0',
                                                    lineHeight: '1.3'
                                                }}>
                                                    {section.title}
                                                </h2>
                                                <p style={{
                                                    fontSize: '15px',
                                                    lineHeight: '1.7',
                                                    color: 'var(--color-neutral-600)',
                                                    fontFamily: 'var(--font-family-body)',
                                                    margin: 0
                                                }}>
                                                    {section.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                    </div>
                </div>
            </section>
        </Layout>
    );
}
