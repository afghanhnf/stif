import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import SeoHead from '@/components/seo/SeoHead';
import FadeIn from '@/components/animations/FadeIn';

export default function PrivacyPolicy({ locale, settings }) {
    const prefix = locale === 'id' ? '/id' : '';

    const content = {
        en: {
            title: 'Privacy Policy',
            subtitle: 'Last updated: June 18, 2026',
            badge: 'LEGAL & COMPLIANCE',
            intro: 'STIF Capital ("we", "us", "our") values your privacy. We are committed to protecting your personal data and ensuring transparent operations in alignment with our fiduciary duties and Sharia principles. This policy explains how we collect and process your information when you visit stifcapital.com or submit investment mandates.',
            sections: [
                {
                    id: 'introduction',
                    title: '1. Introduction',
                    text: 'We operate wholly under Sharia principles. Transparency, responsibility, and fairness are at the core of our business and how we handle client and visitor data. We implement this policy to explain the collection, usage, and security of information obtained via our website.',
                },
                {
                    id: 'information-collection',
                    title: '2. Information We Collect',
                    text: 'We collect information you provide voluntarily when submitting investment mandates or contacting us, including your name, email, phone number, firm name, and project description. We also collect automatic data like IP address, browser type, and page access patterns to improve security and performance.',
                },
                {
                    id: 'use-of-information',
                    title: '3. Use of Information',
                    text: 'Your information is processed to evaluate project submissions, manage our services, communicate updates, and perform compliance reviews. In keeping with Sharia transparency, we do not engage in unauthorized data sharing, monetization, or selling of personal details.',
                },
                {
                    id: 'sharia-compliance',
                    title: '4. Sharia Compliance Audits',
                    text: 'Under Sharia private equity principles, our contracts and operations are subject to oversight by our independent Shariah Supervisory Board. When audits are conducted, aggregate or anonymized data may be reviewed to verify the ethical integrity of transactions. Any sharing with board members is conducted under strict confidentiality.',
                },
                {
                    id: 'data-protection',
                    title: '5. Data Protection & Retention',
                    text: 'We apply institutional-grade technical and organizational security measures to protect your data. Information is retained only as long as necessary to fulfill the services or as required by regulatory compliance under Indonesian law.',
                },
                {
                    id: 'contact-us',
                    title: '6. Contact Us',
                    text: 'If you have questions about this policy or your personal data, please contact our privacy compliance team at partners@stifcapital.com.',
                }
            ],
            quickLinks: 'QUICK NAVIGATION'
        },
        id: {
            title: 'Kebijakan Privasi',
            subtitle: 'Terakhir diperbarui: 18 Juni 2026',
            badge: 'HUKUM & KEPATUHAN',
            intro: 'STIF Capital ("kami", "perusahaan") sangat menghargai privasi Anda. Kami berkomitmen untuk melindungi data pribadi Anda dan memastikan operasional yang transparan demi menjaga amanah serta kepatuhan terhadap prinsip Syariah. Kebijakan ini menjelaskan bagaimana kami mengumpulkan dan memproses informasi Anda saat mengunjungi stifcapital.com atau mengirimkan mandat proyek.',
            sections: [
                {
                    id: 'introduction',
                    title: '1. Pendahuluan',
                    text: 'Kami beroperasi sepenuhnya di bawah prinsip Syariah. Transparansi, tanggung jawab, dan keadilan adalah inti dari bisnis kami dan bagaimana kami menangani data klien serta pengunjung. Kami menerapkan kebijakan ini untuk menjelaskan pengumpulan, penggunaan, dan keamanan informasi yang diperoleh melalui situs web kami.',
                },
                {
                    id: 'information-collection',
                    title: '2. Informasi yang Kami Kumpulkan',
                    text: 'Kami mengumpulkan informasi yang Anda berikan secara sukarela saat mengajukan mandat investasi atau menghubungi kami, termasuk nama, email, nomor telepon, nama perusahaan, dan deskripsi proyek. Kami juga mengumpulkan data otomatis seperti alamat IP, jenis browser, dan pola akses halaman untuk meningkatkan keamanan serta kinerja situs.',
                },
                {
                    id: 'use-of-information',
                    title: '3. Penggunaan Informasi',
                    text: 'Informasi Anda diproses untuk mengevaluasi pengajuan proyek, mengelola layanan kami, mengomunikasikan pembaruan, dan melakukan tinjauan kepatuhan. Selaras dengan prinsip transparansi Syariah, kami tidak melakukan pembagian data secara tidak sah, monetisasi, atau penjualan detail pribadi Anda.',
                },
                {
                    id: 'sharia-compliance',
                    title: '4. Audit Kepatuhan Syariah',
                    text: 'Berdasarkan prinsip private equity Syariah, seluruh kontrak dan operasional kami diawasi oleh Dewan Pengawas Syariah kami yang independen. Saat audit dilakukan, data agregat atau anonim dapat ditinjau untuk memverifikasi integritas etis dari transaksi. Setiap pembagian data dengan anggota dewan dilakukan di bawah perjanjian kerahasiaan yang ketat.',
                },
                {
                    id: 'data-protection',
                    title: '5. Perlindungan & Penyimpanan Data',
                    text: 'Kami menerapkan langkah-langkah keamanan teknis dan organisasi tingkat institusi untuk melindungi data Anda. Informasi hanya disimpan selama diperlukan untuk memenuhi layanan atau sebagaimana diwajibkan oleh kepatuhan regulasi di bawah hukum Indonesia.',
                },
                {
                    id: 'contact-us',
                    title: '6. Hubungi Kami',
                    text: 'Jika Anda memiliki pertanyaan mengenai kebijakan ini atau data pribadi Anda, silakan hubungi tim kepatuhan privasi kami di partners@stifcapital.com.',
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
