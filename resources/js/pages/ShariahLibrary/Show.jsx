import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import SeoHead from '@/components/seo/SeoHead';
import Breadcrumb from '@/components/seo/Breadcrumb';
import FadeIn from '@/components/animations/FadeIn';

const BookIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
);

const stifApplicationCopy = {
    en: {
        mudarabah: "Stif uses Mudarabah as a primary structure for portfolio that fit its commercial profile. Each deployment is supported by a binding fatwa specific to the transaction.",
        musharakah: "Stif uses Musharakah to co-invest alongside sponsors in high-yield project developments. Both partners share in the equity and operational oversight.",
        murabaha: "Stif applies Murabaha for asset acquisition and trade financing. This allows clients to acquire machinery, inventory, or materials with transparent cost-plus pricing.",
        istisna: "Stif utilizes Istisna for greenfield developments and construction projects. Stage payments are disbursed based on verified construction milestones.",
        ijarah: "Stif structures Ijarah leases for heavy equipment and commercial real estate. Lessees benefit from asset usage rights without the upfront capital expenditure of purchase.",
        wakalah: "Stif acts as a Wakeel (agent) for institutional capital routing, managing assets under strict mandates to optimize yield and maintain Sharia compliance.",
        salam: "Stif deploys Salam contracts in commodity trade and agricultural finance, securing future supply at a pre-agreed price via upfront capital injection.",
        'ijarah-muntahiya-bittamleek': "Stif structures lease-to-own agreements for commercial vehicles and plant equipment, transferring full ownership to the lessee upon final rental payment.",
        'diminishing-musharakah': "Stif employs Diminishing Musharakah for joint property acquisitions, allowing the client to gradually purchase Stif's equity share over the contract term.",
        qard: "Stif provides Qard contracts for short-term liquidity bridging or social impact initiatives, ensuring zero-interest financing to support community projects.",
        waqf: "Stif supports Waqf endowments by structuring yields from dedicated income-generating assets, ensuring perpetual social returns for designated community trusts."
    },
    id: {
        mudarabah: "Stif menggunakan Mudharabah sebagai struktur utama untuk portofolio yang sesuai dengan profil komersialnya. Setiap penyaluran didukung oleh fatwa mengikat yang spesifik untuk transaksi tersebut.",
        musharakah: "Stif menggunakan Musyarakah untuk berinvestasi bersama sponsor dalam pengembangan proyek berimbal hasil tinggi. Kedua mitra berbagi ekuitas dan pengawasan operasional.",
        murabaha: "Stif menerapkan Murabahah untuk akuisisi aset dan pembiayaan perdagangan. Ini memungkinkan klien memperoleh mesin, inventaris, atau bahan dengan harga biaya-plus yang transparan.",
        istisna: "Stif menggunakan Istishna' untuk pengembangan lahan kosong dan proyek konstruksi. Pembayaran bertahap dicairkan berdasarkan pencapaian konstruksi yang terverifikasi.",
        ijarah: "Stif menyusun sewa Ijarah untuk peralatan berat dan real estat komersial. Penyewa mendapat manfaat dari hak penggunaan aset tanpa pengeluaran modal awal untuk pembelian.",
        wakalah: "Stif bertindak sebagai Wakeel (agen) untuk penyaluran modal institusional, mengelola aset di bawah mandat ketat untuk mengoptimalkan hasil dan menjaga kepatuhan syariah.",
        salam: "Stif menyebarkan kontrak Salam dalam perdagangan komoditas dan pembiayaan pertanian, mengamankan pasokan masa depan pada harga yang disepakati melalui suntikan modal di muka.",
        'ijarah-muntahiya-bittamleek': "Stif menyusun perjanjian sewa-beli untuk kendaraan komersial dan peralatan pabrik, mengalihkan kepemilikan penuh kepada penyewa setelah pembayaran sewa akhir.",
        'diminishing-musharakah': "Stif menggunakan Musyarakah Mutanaqisah untuk akuisisi properti bersama, memungkinkan klien secara bertahap membeli bagian ekuitas Stif selama jangka waktu kontrak.",
        qard: "Stif menyediakan kontrak Qardh untuk menjembatani likuiditas jangka pendek atau inisiatif dampak sosial, memastikan pembiayaan tanpa bunga untuk mendukung proyek komunitas.",
        waqf: "Stif mendukung wakaf dengan menyusun hasil dari aset penghasil pendapatan khusus, memastikan pengembalian sosial abadi untuk perwalian komunitas yang ditunjuk."
    }
};

const exampleTitles = {
    en: {
        mudarabah: "Investment Structure",
        musharakah: "Partnership Structure",
        murabaha: "Trade Structure",
        istisna: "Manufacturing Structure",
        ijarah: "Lease Structure",
        wakalah: "Agency Structure",
        salam: "Forward Purchase Structure",
        'ijarah-muntahiya-bittamleek': "Lease-to-Own Structure",
        'diminishing-musharakah': "Diminishing Partnership Structure",
        qard: "Benevolent Loan Structure",
        waqf: "Waqf Endowment Structure"
    },
    id: {
        mudarabah: "Struktur Investasi",
        musharakah: "Struktur Kemitraan",
        murabaha: "Struktur Perdagangan",
        istisna: "Struktur Manufaktur",
        ijarah: "Struktur Sewa",
        wakalah: "Struktur Keagenan",
        salam: "Struktur Pembelian di Muka",
        'ijarah-muntahiya-bittamleek': "Struktur Sewa-Beli",
        'diminishing-musharakah': "Struktur Kemitraan Bertahap",
        qard: "Struktur Pinjaman Kebajikan",
        waqf: "Struktur Wakaf"
    }
};

const defaultAkads = [
    {
        number: 1,
        slug: 'mudarabah',
        arabic: 'مُضَارَبَةٌ',
        name: 'Mudarabah',
        titleId: 'Mudharabah',
        subtitle: 'Profit-Sharing Partnership',
        subtitleId: 'Kemitraan Bagi Hasil',
        desc: 'One party provides capital (rabbul-mal), the other provides expertise (mudarib). Profit is shared per agreed ratio, loss is borne by the capital provider.',
        descId: 'Satu pihak menyediakan modal, pihak lain menyediakan keahlian. Keuntungan dibagi sesuai rasio yang disepakati, kerugian ditanggung penyedia modal.',
    },
    {
        number: 2,
        slug: 'musharakah',
        arabic: 'مُشَارَكَةٌ',
        name: 'Musharakah',
        titleId: 'Musyarakah',
        subtitle: 'Joint-Venture Equity',
        subtitleId: 'Ekuitas Usaha Bersama',
        desc: 'All partners contribute capital and/or labor. Profits are shared by agreed ratio, and losses are shared strictly in proportion to capital contribution.',
        descId: 'Semua mitra berkontribusi modal dan/atau tenaga. Keuntungan dibagi sesuai kesepakatan, kerugian sesuai proporsi kontribusi modal.',
    },
    {
        number: 3,
        slug: 'murabaha',
        arabic: 'مُرَابَحَةٌ',
        name: 'Murabahah',
        titleId: 'Murabahah',
        subtitle: 'Cost-Plus Sale',
        subtitleId: 'Jual Beli Margin',
        desc: 'Financier purchases the asset and resells to the client at a transparent markup. Profit must be disclosed; deferred payment is permissible.',
        descId: 'Pemberi dana membeli aset dan menjualnya kembali kepada klien dengan margin transparan. Keuntungan harus diungkapkan; pembayaran tangguh diperbolehkan.',
    },
    {
        number: 4,
        slug: 'istisna',
        arabic: 'إِسْتِصْنَاعٌ',
        name: "Istisna'",
        titleId: "Istishna'",
        subtitle: 'Manufacturing Contract',
        subtitleId: 'Kontrak Manufaktur',
        desc: 'Financing tied to an asset being built or manufactured. Specifications, price and delivery are fixed at contract; payment can be staged.',
        descId: 'Pembiayaan untuk aset yang dibangun atau diproduksi. Spesifikasi, harga, dan serah terima ditetapkan di awal; pembayaran dapat bertahap.',
    },
    {
        number: 5,
        slug: 'ijarah',
        arabic: 'إِجَارَةٌ',
        name: 'Ijarah',
        titleId: 'Ijarah',
        subtitle: 'Lease / Lease-to-Own',
        subtitleId: 'Sewa / Sewa Beli',
        desc: 'Transfer of usufruct (right to use an asset) to a lessee for a fixed rental period and price. Ownership remains with the lessor.',
        descId: 'Pemindahan hak manfaat aset kepada penyewa untuk periode dan harga sewa tetap. Kepemilikan tetap pada pemberi sewa.',
    },
    {
        number: 6,
        slug: 'wakalah',
        arabic: 'وَكَALَةٌ',
        name: 'Wakalah',
        titleId: 'Wakalah',
        subtitle: 'Agency',
        subtitleId: 'Keagenan',
        desc: 'Principal delegates a defined act to an agent for an agreed fee. Used for portfolio management, trade execution and trust administration.',
        descId: 'Prinsipal mendelegasikan tindakan tertentu kepada agen dengan biaya yang disepakati. Digunakan untuk manajemen portofolio dan administrasi amanah.',
    },
    {
        number: 7,
        slug: 'salam',
        arabic: 'سَلَمٌ',
        name: 'Salam',
        titleId: 'Salam',
        subtitle: 'Forward Purchase',
        subtitleId: 'Pembelian di Muka',
        desc: 'Full advance payment for goods to be delivered later at a specified date, quality, and quantity. Used for agriculture or commodities.',
        descId: 'Pembayaran penuh di muka untuk barang yang diserahkan kemudian dengan tanggal, kualitas, dan kuantitas tertentu.',
    },
    {
        number: 8,
        slug: 'ijarah-muntahiya-bittamleek',
        arabic: 'إِجَارَةٌ مُنْتَهِيَةٌ بِالتَّمْلِيكِ',
        name: 'Ijarah Muntahiya Bittamleek',
        titleId: 'Ijarah Muntahiya Bittamleek',
        subtitle: 'Lease-to-Own',
        subtitleId: 'Sewa Beli',
        desc: 'A lease contract with a promise from the lessor to transfer ownership at the end of the term, either via gift or separate sale.',
        descId: 'Kontrak sewa dengan janji pengalihan kepemilikan di akhir masa sewa, baik melalui hibah maupun jual beli terpisah.',
    },
    {
        number: 9,
        slug: 'diminishing-musharakah',
        arabic: 'مُشَارَكَةٌ مُتَنَاقِصَةٌ',
        name: 'Diminishing Musharakah',
        titleId: 'Musyarakah Mutanaqisah',
        subtitle: 'Partnership with Buyout',
        subtitleId: 'Kemitraan Bertahap',
        desc: 'Asset pledged as security against an obligation. Possession transfers to the pledgee for the duration of the obligation.',
        descId: 'Kepemilikan mitra dibeli secara bertahap dari waktu ke waktu, umum digunakan untuk pembiayaan rumah sesuai Syariah.',
    },
    {
        number: 10,
        slug: 'qard',
        arabic: 'قَرْضٌ',
        name: 'Qard',
        titleId: 'Qardh',
        subtitle: 'Benevolent Loan',
        subtitleId: 'Pinjaman Kebajikan',
        desc: 'An interest-free loan given for social or temporary relief. Only the principal is repayable. The lender may not demand any extra benefit.',
        descId: 'Pinjaman tanpa bunga untuk bantuan sosial atau sementara. Hanya pokok yang wajib dikembalikan; pemberi pinjaman tidak boleh menuntut manfaat tambahan.',
    },
    {
        number: 11,
        slug: 'waqf',
        arabic: 'وَقْفٌ',
        name: 'Waqf',
        titleId: 'Wakaf',
        subtitle: 'Charitable Endowment',
        subtitleId: 'Wakaf Amal',
        desc: 'Permanent dedication of an asset (cash, property, equipment) for charitable purposes. Principal is preserved, and income is distributed to beneficiaries.',
        descId: 'Dedikasi permanen aset untuk tujuan amal. Pokok aset dipertahaman, sementara hasilnya didistribusikan kepada penerima manfaat.',
    },
];

function normalizeAkads(dbAkads, locale) {
    return defaultAkads.map((item) => {
        const match = dbAkads?.find((akad) => 
            Number(akad.number) === item.number || 
            akad.slug === item.slug || 
            (item.slug === 'murabaha' && akad.slug === 'murabahah')
        );
        const isId = locale === 'id';

        return {
            ...item,
            id: match?.id || item.slug,
            slug: match?.slug || item.slug,
            name: match ? (isId && match.name_id ? match.name_id : match.name_en) : (isId ? item.titleId : item.name),
            subtitle: isId ? item.subtitleId : item.subtitle,
            desc: isId ? item.descId : item.desc,
            arabic: match?.arabic_name && !match.arabic_name.includes('Ù') ? match.arabic_name : item.arabic,
        };
    });
}



const cleanSlug = (slug) => {
    if (slug === 'murabahah') return 'murabaha';
    return slug;
};

export default function ShariahLibraryShow({ locale, akad, prev, next, akads, settings }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';
    const normalizedSlug = cleanSlug(akad.slug);
    const defaultAkad = defaultAkads.find(item => item.slug === normalizedSlug) || {};

    const name = locale === 'id' ? (akad.name_id || defaultAkad.titleId || defaultAkad.name) : (akad.name_en || defaultAkad.name);
    
    // Normalize definitions
    const definition = locale === 'id' ? (akad.definition_id || defaultAkad.descId) : (akad.definition_en || defaultAkad.desc);
    const example = locale === 'id' && akad.example_id ? akad.example_id : akad.example_en;
    const sponsorBenefits = locale === 'id' && akad.sponsor_benefits_id ? akad.sponsor_benefits_id : akad.sponsor_benefits_en;
    const arabicName = akad.arabic_name && !akad.arabic_name.includes('Ù') ? akad.arabic_name : defaultAkad.arabic;
    
    // Get custom example title and stif application description
    const currentExampleTitle = exampleTitles[locale]?.[normalizedSlug] || exampleTitles.en[normalizedSlug] || (locale === 'id' ? 'Struktur Contoh' : 'Structure Example');
    const currentStifDescription = stifApplicationCopy[locale]?.[normalizedSlug] || stifApplicationCopy.en[normalizedSlug] || '';



    // Normalize all akads and filter/slice for Explore grid
    const allDisplayAkads = normalizeAkads(akads, locale);
    const otherAkads = allDisplayAkads
        .filter(item => cleanSlug(item.slug) !== normalizedSlug)
        .slice(0, 4);

    const breadcrumbItems = [
        { label: locale === 'id' ? 'Beranda' : 'Home', url: prefix || '/' },
        { label: t('nav.sharia_library'), url: `${prefix}/sharia-library` },
        { label: name, url: `${prefix}/sharia-library/${akad.slug}` }
    ];

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead title={`${name} (${akad.latin_name})`} description={definition} />

            <div className="akad-detail-page">
                <div className="container">
                    <Breadcrumb items={breadcrumbItems} />
                    {/* Back Link */}
                    <FadeIn direction="up">
                        <Link href={`${prefix}/sharia-library`} className="back-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="19" y1="12" x2="5" y2="12"/>
                                <polyline points="12 19 5 12 12 5"/>
                            </svg>
                            {locale === 'id' ? 'Semua akad' : 'All akads'}
                        </Link>
                    </FadeIn>

                    {/* Top Main Grid */}
                    <FadeIn direction="up">
                        <div className="akad-main-grid">
                            
                            {/* Left Calligraphy Card */}
                            <div className="akad-side-card">
                                <div className="akad-calligraphy-container">
                                    <div className="akad-calligraphy" lang="ar" dir="rtl">
                                        {arabicName}
                                    </div>
                                </div>
                                <div className="akad-side-meta">
                                    <span className="akad-side-number">
                                        AKAD {String(akad.number).padStart(2, '0')}
                                    </span>
                                    <h2 className="akad-side-title">{name}</h2>
                                    <p className="akad-side-subtitle">
                                        {locale === 'id' ? (
                                            defaultAkads.find(item => item.slug === normalizedSlug)?.subtitleId || akad.latin_name
                                        ) : (
                                            defaultAkads.find(item => item.slug === normalizedSlug)?.subtitle || akad.latin_name
                                        )}
                                    </p>
                                </div>
                            </div>

                            {/* Right Content Card (Definition & Key Conditions) */}
                            <div className="akad-content-card">
                                <div>
                                    <span className="label-gold">{locale === 'id' ? 'DEFINISI' : 'DEFINITION'}</span>
                                    <h3 className="akad-section-title">
                                        {locale === 'id' ? `Apa itu ${name}?` : `What is ${name}?`}
                                    </h3>
                                    <p className="akad-section-text">{definition}</p>
                                </div>

                                {sponsorBenefits && (
                                    <div>
                                        <span className="label-gold" style={{ display: 'block', marginBottom: '8px' }}>
                                            {locale === 'id' ? 'KETENTUAN UTAMA' : 'KEY CONDITIONS'}
                                        </span>
                                        <div className="akad-section-text rich-content" dangerouslySetInnerHTML={{ __html: sponsorBenefits }} />
                                    </div>
                                )}
                            </div>

                        </div>
                    </FadeIn>

                    {/* Bottom Row Grid (Example & STIF Application) */}
                    <FadeIn direction="up">
                        <div className="akad-row-grid">
                            
                            {/* Example Card */}
                            <div className="akad-detail-card">
                                <span className="label-gold">{locale === 'id' ? 'Contoh' : 'Example'}</span>
                                <h3 className="akad-section-title" style={{ fontSize: '28px' }}>
                                    {currentExampleTitle}
                                </h3>
                                {example && (
                                    <div className="akad-section-text rich-content" dangerouslySetInnerHTML={{ __html: example }} />
                                )}
                            </div>

                            {/* STIF Application Card */}
                            <div className="akad-detail-card">
                                <span className="label-gold">STIF APPLICATION</span>
                                <h3 className="akad-section-title" style={{ fontSize: '28px' }}>
                                    {locale === 'id' ? 'Bagaimana kami menerapkan akad ini' : 'How we deploy this akad'}
                                </h3>
                                <p className="akad-section-text" style={{ marginBottom: '24px' }}>
                                    {currentStifDescription}
                                </p>
                                <Link href={`${prefix}/business-case`} className="akad-case-link">
                                    {locale === 'id' ? 'Lihat Kasus Bisnis' : 'See Business Case'}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </FadeIn>

                    {/* Explore Section */}
                    <FadeIn direction="up">
                        <div className="explore-section">
                            <span className="explore-label">
                                {locale === 'id' ? 'JELAJAHI AKAD LAINNYA' : 'EXPLORE OTHER AKADS'}
                            </span>
                            <div className="explore-grid">
                                {otherAkads.map((item) => (
                                    <Link key={item.id} href={`${prefix}/sharia-library/${item.slug}`} className="explore-card">
                                        <div className="explore-card__top">
                                            <span className="explore-card__icon"><BookIcon /></span>
                                            <span className="explore-card__arabic" lang="ar" dir="rtl">
                                                {item.arabic}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="explore-card__name">{item.name}</h4>
                                            <p className="explore-card__sub">{item.subtitle}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Fatwa CTA Card */}
                    <FadeIn direction="up">
                        <div className="fatwa-cta-card">
                            <div>
                                <h2>
                                    {locale === 'id' ? 'Butuh fatwa untuk struktur Anda?' : 'Need a fatwa on your structure?'}
                                </h2>
                                <p>
                                    {locale === 'id' 
                                        ? 'Dewan pengawas kami merespons dalam waktu 14 hari kerja.' 
                                        : 'Our supervisory board responds within 14 working days.'}
                                </p>
                            </div>
                            <Link href={`${prefix}/contact`} className="fatwa-cta-btn">
                                {locale === 'id' ? 'Ajukan peninjauan' : 'Request review'}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </Link>
                        </div>
                    </FadeIn>

                </div>
            </div>

            {/* Custom Embedded CSS Styles */}
            <style>{`
                .akad-detail-page {
                    background-color: #F7F6F3;
                    padding: 48px 0 120px;
                }
                
                .rich-content ul {
                    list-style: disc;
                    padding-left: 20px;
                    margin: 16px 0;
                }
                .rich-content ol {
                    list-style: decimal;
                    padding-left: 20px;
                    margin: 16px 0;
                }
                .rich-content li {
                    margin-bottom: 8px;
                }
                .rich-content p {
                    margin-bottom: 16px;
                }
                .rich-content strong, .rich-content b {
                    font-weight: 800;
                    color: #131810;
                }
                
                .back-link {
                    display: inline-flex;
                    align-items: center;
                    color: #718844;
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    margin-bottom: 32px;
                    transition: gap 0.25s ease, color 0.25s ease;
                    gap: 8px;
                    text-decoration: none;
                }
                
                .back-link:hover {
                    gap: 12px;
                    color: #4b5d2a;
                }
                
                .akad-main-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.8fr;
                    gap: 24px;
                    margin-bottom: 24px;
                }
                
                .akad-side-card {
                    background-color: #2C3621;
                    border-radius: 24px;
                    padding: 44px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    min-height: 480px;
                    color: #ffffff;
                }
                
                .akad-calligraphy-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-grow: 1;
                }
                
                .akad-calligraphy {
                    font-family: "Amiri", "Times New Roman", serif;
                    font-size: 96px;
                    color: #C3CF92;
                    text-align: center;
                    line-height: 1.1;
                    margin-bottom: 20px;
                }
                
                .akad-side-meta {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                
                .akad-side-number {
                    color: #B8BE7E;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                }
                
                .akad-side-title {
                    font-family: var(--font-family-heading);
                    font-size: 34px;
                    font-weight: 300;
                    margin: 4px 0 0 0;
                    color: #ffffff;
                }
                
                .akad-side-subtitle {
                    color: #B8BE7E;
                    font-size: 15px;
                    font-weight: 400;
                    margin: 2px 0 0 0;
                    opacity: 0.9;
                }
                
                .akad-content-card {
                    background-color: #ffffff;
                    border: 1px solid rgba(107, 109, 15, 0.08);
                    border-radius: 24px;
                    padding: 44px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 36px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.01);
                }
                
                .label-gold {
                    color: #718844;
                    font-size: 11px;
                    font-weight: 900;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    display: block;
                }
                
                .akad-section-title {
                    font-family: var(--font-family-heading);
                    font-size: 44px;
                    font-weight: 300;
                    color: #2b2d3b;
                    margin: 8px 0 16px 0;
                    line-height: 1.15;
                }
                
                .akad-section-text {
                    color: #687085;
                    font-size: 16px;
                    line-height: 1.7;
                    margin: 0;
                }
                
                .conditions-list {
                    list-style: none;
                    padding: 0;
                    margin: 16px 0 0 0;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }
                
                .conditions-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    color: #5f5f38;
                    font-size: 15px;
                    line-height: 1.5;
                }
                
                .akad-row-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                    margin-bottom: 64px;
                }
                
                .akad-detail-card {
                    background-color: #ffffff;
                    border: 1px solid rgba(107, 109, 15, 0.08);
                    border-radius: 24px;
                    padding: 44px;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.01);
                }
                
                .akad-bullet-list {
                    list-style: none;
                    padding: 0;
                    margin: 20px 0 0 0;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }
                
                .akad-bullet-list li {
                    position: relative;
                    padding-left: 20px;
                    color: #687085;
                    font-size: 15px;
                    line-height: 1.6;
                }
                
                .akad-bullet-list li::before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: #718844;
                    font-size: 18px;
                    line-height: 1;
                    top: 0px;
                }
                
                .akad-case-link {
                    margin-top: auto;
                    display: inline-flex;
                    align-items: center;
                    color: #718844;
                    font-size: 14px;
                    font-weight: 800;
                    gap: 6px;
                    transition: gap 0.25s ease, color 0.25s ease;
                    text-decoration: none;
                    padding-top: 24px;
                    width: fit-content;
                }
                
                .akad-case-link:hover {
                    gap: 10px;
                    color: #4b5d2a;
                }
                
                .explore-section {
                    margin-top: 64px;
                }
                
                .explore-label {
                    color: #718844;
                    font-size: 11px;
                    font-weight: 900;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    display: block;
                    margin-bottom: 24px;
                }
                
                .explore-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 18px;
                    margin-bottom: 64px;
                }
                
                .explore-card {
                    background-color: #ffffff;
                    border: 1px solid rgba(107, 109, 15, 0.08);
                    border-radius: 16px;
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
                    text-decoration: none;
                }
                
                .explore-card:hover {
                    transform: translateY(-3px);
                    border-color: rgba(107, 109, 15, 0.16);
                    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.035);
                }
                
                .explore-card__top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .explore-card__icon {
                    color: #718844;
                    display: flex;
                    align-items: center;
                }
                
                .explore-card__arabic {
                    font-family: "Amiri", "Times New Roman", serif;
                    font-size: 24px;
                    color: #718844;
                    line-height: 1;
                }
                
                .explore-card__name {
                    font-size: 18px;
                    font-weight: 800;
                    color: #2b2d3b;
                    margin: 0 0 4px 0;
                    line-height: 1.2;
                }
                
                .explore-card__sub {
                    font-size: 13px;
                    color: #687085;
                    margin: 0;
                    line-height: 1.4;
                }
                
                .fatwa-cta-card {
                    background-color: #131810;
                    border-radius: 24px;
                    padding: 48px 52px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #ffffff;
                    gap: 32px;
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.04);
                }
                
                .fatwa-cta-card h2 {
                    font-size: 36px;
                    font-weight: 300;
                    margin: 0 0 8px 0;
                    font-family: var(--font-family-heading);
                    color: #ffffff;
                    line-height: 1.2;
                }
                
                .fatwa-cta-card p {
                    color: rgba(255, 255, 255, 0.65);
                    font-size: 15px;
                    margin: 0;
                    line-height: 1.5;
                }
                
                .fatwa-cta-btn {
                    background-color: #ffffff;
                    color: #131810;
                    padding: 14px 28px;
                    border-radius: 9999px;
                    font-weight: 800;
                    font-size: 14px;
                    white-space: nowrap;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    transition: background-color 0.25s ease, transform 0.25s ease;
                    text-decoration: none;
                }
                
                .fatwa-cta-btn:hover {
                    background-color: #f4f5ef;
                    transform: translateY(-1px);
                }
                
                @media (max-width: 1024px) {
                    .akad-main-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    
                    .akad-side-card {
                        min-height: 380px;
                        padding: 36px;
                    }
                    
                    .akad-calligraphy {
                        font-size: 84px;
                    }
                    
                    .akad-row-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    
                    .explore-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    
                    .fatwa-cta-card {
                        flex-direction: column;
                        align-items: flex-start;
                        text-align: left;
                        padding: 36px;
                        gap: 24px;
                    }
                    
                    .fatwa-cta-btn {
                        width: 100%;
                        justify-content: center;
                    }
                }
                
                @media (max-width: 640px) {
                    .akad-detail-page {
                        padding: 24px 0 80px;
                    }
                    
                    .back-link {
                        margin-bottom: 24px;
                    }
                    
                    .akad-side-card {
                        padding: 28px;
                        min-height: 320px;
                    }
                    
                    .akad-calligraphy {
                        font-size: 72px;
                    }
                    
                    .akad-content-card, .akad-detail-card {
                        padding: 28px;
                    }
                    
                    .akad-section-title {
                        font-size: 32px;
                    }
                    
                    .explore-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </Layout>
    );
}
