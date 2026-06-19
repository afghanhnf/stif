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
            intro: 'STIF Capital ("we", "us", "our") values your privacy and is committed to protecting your personal data in accordance with prevailing data protection laws and Sharia principles. This Privacy Policy details our practices concerning the collection, use, and disclosure of your information when you visit stifcapital.com or engage with our services.',
            sections: [
                {
                    id: 'introduction',
                    title: '1. Introduction',
                    text: 'This Privacy Policy governs the manner in which STIF Capital collects, uses, maintains, and discloses information collected from users of our website and services. Operating under Sharia principles, transparency, responsibility, and fairness are at the core of our business and how we handle client data. By using our website, you consent to the data practices described in this statement.',
                },
                {
                    id: 'information-collection',
                    title: '2. Information We Collect',
                    text: 'We collect personally identifiable information that you voluntarily provide to us when submitting investment mandates, subscribing to our newsletter, or contacting us. This may include your name, email address, phone number, company name, and project descriptions. We also automatically collect anonymous demographic information, such as your IP address, browser type, domain names, access times, and referring website addresses to maintain the quality of our service and generate general statistics regarding use of the website.',
                },
                {
                    id: 'use-of-information',
                    title: '3. Use of Your Information',
                    text: 'STIF Capital collects and uses your personal information to operate its website and deliver the services you have requested. We may also use your personally identifiable information to inform you of other products or services available from STIF Capital and its affiliates. We do not sell, rent, or lease our customer lists to third parties.',
                },
                {
                    id: 'sharia-compliance',
                    title: '4. Sharia Compliance Audits',
                    text: 'Under Sharia private equity principles, our contracts and operations are subject to oversight by our independent Shariah Supervisory Board. When audits are conducted, aggregate or anonymized data may be reviewed to verify the ethical integrity of transactions. Any sharing with board members is conducted under strict confidentiality agreements.',
                },
                {
                    id: 'cookies',
                    title: '5. Use of Cookies',
                    text: 'Our website may use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.',
                },
                {
                    id: 'third-parties',
                    title: '6. Third-Party Links & Services',
                    text: 'Our website may contain links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.',
                },
                {
                    id: 'data-protection',
                    title: '7. Security & Data Retention',
                    text: 'We secure your personal information from unauthorized access, use, or disclosure. We use SSL protocol to protect data transmitted through our website. We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements under Indonesian law.',
                },
                {
                    id: 'contact-us',
                    title: '8. Contact Information',
                    text: 'STIF Capital welcomes your questions or comments regarding this Privacy Policy. If you believe that we have not adhered to this Statement, please contact our compliance team at partners@stifcapital.com or write to us at our registered office.',
                }
            ],
            quickLinks: 'QUICK NAVIGATION'
        },
        id: {
            title: 'Kebijakan Privasi',
            subtitle: 'Terakhir diperbarui: 18 Juni 2026',
            badge: 'HUKUM & KEPATUHAN',
            intro: 'STIF Capital ("kami", "perusahaan") sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda sesuai dengan undang-undang perlindungan data yang berlaku serta prinsip-prinsip Syariah. Kebijakan Privasi ini menjelaskan praktik kami terkait pengumpulan, penggunaan, dan pengungkapan informasi Anda.',
            sections: [
                {
                    id: 'introduction',
                    title: '1. Pendahuluan',
                    text: 'Kebijakan Privasi ini mengatur cara STIF Capital mengumpulkan, menggunakan, memelihara, dan mengungkapkan informasi yang dikumpulkan dari pengguna situs web dan layanan kami. Beroperasi di bawah prinsip Syariah, transparansi, tanggung jawab, dan keadilan adalah inti dari bisnis kami. Dengan menggunakan situs web kami, Anda menyetujui praktik data yang dijelaskan dalam pernyataan ini.',
                },
                {
                    id: 'information-collection',
                    title: '2. Informasi yang Kami Kumpulkan',
                    text: 'Kami mengumpulkan informasi identitas pribadi yang Anda berikan secara sukarela saat mengajukan mandat investasi, berlangganan nawala kami, atau menghubungi kami. Ini dapat mencakup nama, alamat email, nomor telepon, nama perusahaan, dan deskripsi proyek Anda. Kami juga secara otomatis mengumpulkan informasi demografis anonim seperti alamat IP, jenis browser, dan waktu akses untuk meningkatkan kualitas layanan kami.',
                },
                {
                    id: 'use-of-information',
                    title: '3. Penggunaan Informasi Anda',
                    text: 'STIF Capital menggunakan informasi pribadi Anda untuk mengoperasikan situs webnya dan memberikan layanan yang Anda minta. Kami juga dapat menggunakan informasi identitas pribadi Anda untuk memberi tahu Anda tentang produk atau layanan lain yang tersedia dari STIF Capital. Kami tidak menjual, menyewakan, atau meminjamkan daftar pelanggan kami kepada pihak ketiga.',
                },
                {
                    id: 'sharia-compliance',
                    title: '4. Audit Kepatuhan Syariah',
                    text: 'Berdasarkan prinsip private equity Syariah, operasional kami diawasi oleh Dewan Pengawas Syariah yang independen. Saat audit dilakukan, data agregat atau anonim dapat ditinjau untuk memverifikasi integritas etis dari transaksi. Setiap pembagian data dengan anggota dewan dilakukan di bawah perjanjian kerahasiaan yang ketat.',
                },
                {
                    id: 'cookies',
                    title: '5. Penggunaan Cookie',
                    text: 'Situs web kami dapat menggunakan "cookie" untuk membantu Anda mempersonalisasi pengalaman online Anda. Cookie adalah file teks yang ditempatkan di hard disk Anda oleh server halaman web. Anda memiliki kemampuan untuk menerima atau menolak cookie melalui pengaturan browser Anda.',
                },
                {
                    id: 'third-parties',
                    title: '6. Tautan & Layanan Pihak Ketiga',
                    text: 'Situs web kami mungkin berisi tautan ke situs lain. Harap dicatat bahwa kami tidak bertanggung jawab atas konten atau praktik privasi situs lain tersebut. Kami mendorong pengguna kami untuk waspada ketika mereka meninggalkan situs kami dan membaca pernyataan privasi dari situs lain mana pun yang mengumpulkan informasi identitas pribadi.',
                },
                {
                    id: 'data-protection',
                    title: '7. Keamanan & Retensi Data',
                    text: 'Kami mengamankan informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah menggunakan protokol keamanan institusional (SSL). Kami menyimpan data pribadi hanya selama diperlukan untuk memenuhi tujuan pengumpulannya, termasuk untuk memenuhi persyaratan hukum, peraturan, pajak, atau akuntansi di bawah hukum Indonesia.',
                },
                {
                    id: 'contact-us',
                    title: '8. Informasi Kontak',
                    text: 'STIF Capital menyambut pertanyaan atau komentar Anda mengenai Kebijakan Privasi ini. Jika Anda memiliki keluhan atau pertanyaan, silakan hubungi tim kepatuhan kami di partners@stifcapital.com atau kirimkan surat ke kantor terdaftar kami.',
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
