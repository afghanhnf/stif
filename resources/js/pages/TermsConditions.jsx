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
            intro: 'Welcome to stifcapital.com. These Terms and Conditions outline the rules and regulations for the use of STIF Capital\'s Website and Services. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use stifcapital.com if you do not accept all of the terms and conditions stated on this page.',
            sections: [
                {
                    id: 'agreement',
                    title: '1. Agreement to Terms',
                    text: 'By visiting and accessing our site, you acknowledge that you have read, understood, and agreed to be bound by these Terms. These Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and STIF Capital. If you do not agree to all of these Terms, you are expressly prohibited from using the Site and must discontinue use immediately.',
                },
                {
                    id: 'no-advice',
                    title: '2. No Financial or Investment Advice',
                    text: 'The contents of this website, including but not limited to text, graphics, images, and other material contained herein, are for informational purposes only. The information does not constitute financial, investment, legal, or tax advice. STIF Capital does not warrant the completeness, reliability, or accuracy of this information. Any action you take upon the information on this website is strictly at your own risk.',
                },
                {
                    id: 'sharia-guidelines',
                    title: '3. Sharia Compliance Guidelines',
                    text: 'As a Sharia-compliant Private Equity firm, STIF Capital operates strictly under Islamic finance principles. Any mandate, partnership, or project submitted to us must comply with these principles. Submissions involving riba (interest/usury), gharar (speculative uncertainty), maysir (gambling), or non-halal business sectors (e.g., alcohol, pork, conventional financial services) will be immediately rejected.',
                },
                {
                    id: 'intellectual-property',
                    title: '4. Intellectual Property Rights',
                    text: 'Unless otherwise stated, STIF Capital and/or its licensors own the intellectual property rights for all material on stifcapital.com. All intellectual property rights are reserved. You may access this from stifcapital.com for your own personal use subjected to restrictions set in these terms and conditions. You must not republish, sell, rent, or sub-license material from stifcapital.com.',
                },
                {
                    id: 'user-submissions',
                    title: '5. User Submissions & Confidentiality',
                    text: 'Any project details, business plans, or investment mandates submitted through our platform will be treated with professional confidentiality. However, submitting a project does not create a formal partnership or fiduciary duty until a legally binding non-disclosure agreement (NDA) or contract is executed between both parties.',
                },
                {
                    id: 'limitation-liability',
                    title: '6. Limitation of Liability',
                    text: 'In no event shall STIF Capital, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract, tort, or otherwise. STIF Capital shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.',
                },
                {
                    id: 'indemnification',
                    title: '7. Indemnification',
                    text: 'You hereby indemnify to the fullest extent STIF Capital from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.',
                },
                {
                    id: 'governing-law',
                    title: '8. Governing Law & Jurisdiction',
                    text: 'These Terms will be governed by and interpreted in accordance with the laws of the Republic of Indonesia. You submit to the non-exclusive jurisdiction of the state and federal courts located in Jakarta, Indonesia for the resolution of any disputes.',
                }
            ],
            quickLinks: 'QUICK NAVIGATION'
        },
        id: {
            title: 'Syarat & Ketentuan',
            subtitle: 'Terakhir diperbarui: 18 Juni 2026',
            badge: 'HUKUM & KEPATUHAN',
            intro: 'Selamat datang di stifcapital.com. Syarat dan Ketentuan ini menguraikan aturan dan peraturan untuk penggunaan Situs Web dan Layanan STIF Capital. Dengan mengakses situs web ini, kami menganggap Anda menerima syarat dan ketentuan ini secara penuh.',
            sections: [
                {
                    id: 'agreement',
                    title: '1. Persetujuan Ketentuan',
                    text: 'Dengan mengunjungi dan mengakses situs kami, Anda mengakui bahwa Anda telah membaca, memahami, dan setuju untuk terikat oleh Ketentuan ini. Ketentuan ini merupakan perjanjian yang mengikat secara hukum yang dibuat antara Anda dan STIF Capital. Jika Anda tidak menyetujui ketentuan ini, Anda dilarang menggunakan Situs ini.',
                },
                {
                    id: 'no-advice',
                    title: '2. Bukan Nasihat Keuangan atau Investasi',
                    text: 'Konten dalam situs web ini hanya untuk tujuan informasi umum dan tidak merupakan nasihat keuangan, investasi, hukum, atau pajak. STIF Capital tidak menjamin kelengkapan, keandalan, atau keakuratan informasi ini. Segala tindakan yang Anda ambil atas informasi di situs web ini sepenuhnya merupakan risiko Anda sendiri.',
                },
                {
                    id: 'sharia-guidelines',
                    title: '3. Pedoman Kepatuhan Syariah',
                    text: 'STIF Capital beroperasi secara ketat di bawah prinsip-prinsip keuangan Islam. Setiap mandat atau proyek yang diajukan kepada kami harus mematuhi prinsip-prinsip ini. Pengajuan yang melibatkan riba (bunga), gharar (ketidakpastian), maysir (perjudian), atau sektor bisnis non-halal akan segera ditolak.',
                },
                {
                    id: 'intellectual-property',
                    title: '4. Hak Kekayaan Intelektual',
                    text: 'Kecuali dinyatakan lain, STIF Capital dan/atau pemberi lisensinya memiliki hak kekayaan intelektual atas semua materi di stifcapital.com. Anda tidak diperkenankan menyebarluaskan, menjual, menyewakan, atau mensublisensikan materi dari stifcapital.com tanpa izin tertulis kami.',
                },
                {
                    id: 'user-submissions',
                    title: '5. Pengajuan Pengguna & Kerahasiaan',
                    text: 'Setiap detail proyek atau mandat investasi yang diajukan melalui platform kami akan diperlakukan dengan kerahasiaan profesional. Namun, pengajuan proyek tidak menciptakan kemitraan formal sampai perjanjian kerahasiaan (NDA) atau kontrak yang mengikat secara hukum ditandatangani.',
                },
                {
                    id: 'limitation-liability',
                    title: '6. Batasan Tanggung Jawab',
                    text: 'Dalam keadaan apa pun, STIF Capital, maupun pejabat, direktur, dan karyawannya, tidak bertanggung jawab atas apa pun yang timbul dari atau dengan cara apa pun terkait dengan penggunaan situs web ini. STIF Capital tidak bertanggung jawab atas kewajiban tidak langsung, konsekuensial, atau khusus.',
                },
                {
                    id: 'indemnification',
                    title: '7. Ganti Rugi',
                    text: 'Anda dengan ini membebaskan STIF Capital sepenuhnya dari dan terhadap segala kewajiban, biaya, tuntutan, penyebab tindakan, kerusakan, dan pengeluaran yang timbul dengan cara apa pun terkait dengan pelanggaran Anda terhadap salah satu ketentuan dalam Syarat ini.',
                },
                {
                    id: 'governing-law',
                    title: '8. Hukum yang Mengatur & Yurisdiksi',
                    text: 'Ketentuan ini akan diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap perselisihan yang timbul akan tunduk pada yurisdiksi eksklusif pengadilan yang berwenang di Jakarta, Indonesia.',
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
