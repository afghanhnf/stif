import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import SeoHead from '@/components/seo/SeoHead';
import Breadcrumb from '@/components/seo/Breadcrumb';
import FadeIn from '@/components/animations/FadeIn';

const BookIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
);

const ArrowRightIcon = ({ diagonal = false }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        {diagonal ? (
            <>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
            </>
        ) : (
            <>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
            </>
        )}
    </svg>
);

const copy = {
    en: {
        badge: 'Sharia Library - 11 Akad',
        heroTitle: ['Eleven akads,', 'one standard'],
        heroText: 'Every contract we structure draws from these eleven classical akads. Each is reviewed and approved by our independent supervisory board and published with binding fatwa.',
        readAkad: 'Read akad',
        ctaLabel: 'Fatwa Index',
        ctaTitle: ['Need a custom', 'structure?'],
        ctaText: 'Our supervisory board can review bespoke contracts within 14 working days.',
        ctaButton: 'Request fatwa',
    },
    id: {
        badge: 'Perpustakaan Syariah - 11 Akad',
        heroTitle: ['Sebelas akad,', 'satu standar'],
        heroText: 'Setiap kontrak yang kami susun merujuk pada sebelas akad klasik ini. Masing-masing ditinjau dan disetujui oleh dewan pengawas independen kami serta diterbitkan dengan fatwa yang mengikat.',
        readAkad: 'Baca akad',
        ctaLabel: 'Indeks Fatwa',
        ctaTitle: ['Butuh struktur', 'khusus?'],
        ctaText: 'Dewan pengawas kami dapat meninjau kontrak khusus dalam 14 hari kerja.',
        ctaButton: 'Minta fatwa',
    },
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
        subtitle: 'Lease',
        subtitleId: 'Sewa',
        desc: 'Transfer of usufruct (right to use an asset) to a lessee for a fixed rental period and price. Ownership remains with the lessor.',
        descId: 'Pemindahan hak manfaat aset kepada penyewa untuk periode dan harga sewa tetap. Kepemilikan tetap pada pemberi sewa.',
    },
    {
        number: 6,
        slug: 'wakalah',
        arabic: 'وَكَالَةٌ',
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
        descId: 'Dedikasi permanen aset untuk tujuan amal. Pokok aset dipertahankan, sementara hasilnya didistribusikan kepada penerima manfaat.',
    },
];

function normalizeAkads(akads, locale) {
    return defaultAkads.map((item) => {
        const match = akads?.find((akad) => Number(akad.number) === item.number || akad.slug === item.slug || (item.slug === 'murabaha' && akad.slug === 'murabahah'));
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

export default function ShariahLibraryIndex({ locale, akads, settings }) {
    const { t } = useTranslation();
    const prefix = locale === 'id' ? '/id' : '';
    const text = copy[locale] || copy.en;
    const displayAkads = normalizeAkads(akads, locale);

    const breadcrumbItems = [
        { label: locale === 'id' ? 'Beranda' : 'Home', url: prefix || '/' },
        { label: t('nav.sharia_library'), url: `${prefix}/sharia-library` }
    ];

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead title={t('nav.sharia_library')} description={text.heroText} />

            <section className="library-page">
                <div className="container library-stack">
                    <Breadcrumb items={breadcrumbItems} />
                    <FadeIn direction="up">
                        <section className="library-hero">
                            <span className="library-pill">
                                <BookIcon />
                                {text.badge}
                            </span>
                            <h1>
                                {text.heroTitle[0]} <em>{text.heroTitle[1]}</em>
                            </h1>
                            <p>{text.heroText}</p>
                        </section>
                    </FadeIn>

                    <FadeIn direction="up">
                        <section className="library-grid">
                            {displayAkads.map((akad) => (
                                <Link key={akad.id} href={`${prefix}/sharia-library/${akad.slug}`} className="library-card">
                                    <div className="library-card__top">
                                        <span lang="ar" dir="rtl">{akad.arabic}</span>
                                        <strong>{String(akad.number).padStart(2, '0')}</strong>
                                    </div>
                                    <h2>{akad.name}</h2>
                                    <h3>{akad.subtitle}</h3>
                                    <p>{akad.desc}</p>
                                    <span className="library-card__link">
                                        {text.readAkad}
                                        <ArrowRightIcon />
                                    </span>
                                </Link>
                            ))}
                        </section>
                    </FadeIn>

                    <FadeIn direction="up">
                        <section className="library-cta">
                            <div>
                                <span>{text.ctaLabel}</span>
                                <h2>{text.ctaTitle[0]} <em>{text.ctaTitle[1]}</em></h2>
                                <p>{text.ctaText}</p>
                            </div>
                            <Link href={`${prefix}/contact`} className="library-cta__button">
                                {text.ctaButton}
                                <ArrowRightIcon diagonal />
                            </Link>
                        </section>
                    </FadeIn>
                </div>
            </section>
        </Layout>
    );
}
