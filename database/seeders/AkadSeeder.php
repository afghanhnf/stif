<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Akad;

class AkadSeeder extends Seeder
{
    public function run(): void
    {
        $akads = [
            ['number' => 1, 'slug' => 'mudarabah', 'arabic_name' => 'مُضَارَبَةٌ', 'latin_name' => 'Mudarabah', 'name_en' => 'Mudarabah', 'name_id' => 'Mudharabah', 'definition_en' => 'One party provides capital (rabbul-mal), the other provides expertise (mudarib). Profit is shared per agreed ratio, loss is borne by the capital provider.', 'definition_id' => 'Satu pihak menyediakan modal, pihak lain menyediakan keahlian. Keuntungan dibagi sesuai rasio yang disepakati, kerugian ditanggung penyedia modal.'],
            ['number' => 2, 'slug' => 'musharakah', 'arabic_name' => 'مُشَارَكَةٌ', 'latin_name' => 'Musharakah', 'name_en' => 'Musharakah', 'name_id' => 'Musyarakah', 'definition_en' => 'All partners contribute capital and/or labor. Profits are shared by agreed ratio, and losses are shared strictly in proportion to capital contribution.', 'definition_id' => 'Semua mitra berkontribusi modal dan/atau tenaga. Keuntungan dibagi sesuai kesepakatan, kerugian sesuai proporsi kontribusi modal.'],
            ['number' => 3, 'slug' => 'wakalah', 'arabic_name' => 'وَكَالَةٌ', 'latin_name' => 'Wakalah', 'name_en' => 'Wakalah', 'name_id' => 'Wakalah', 'definition_en' => 'Principal delegates a defined act to an agent for an agreed fee. Used for portfolio management, trade execution and trust administration.', 'definition_id' => 'Prinsipal mendelegasikan tindakan tertentu kepada agen dengan biaya yang disepakati. Digunakan untuk manajemen portofolio dan administrasi amanah.'],
            ['number' => 4, 'slug' => 'murabahah', 'arabic_name' => 'مُرَابَحَةٌ', 'latin_name' => 'Murabahah', 'name_en' => 'Murabahah', 'name_id' => 'Murabahah', 'definition_en' => 'Financier purchases the asset and resells to the client at a transparent markup. Profit must be disclosed; deferred payment is permissible.', 'definition_id' => 'Pemberi dana membeli aset dan menjualnya kembali kepada klien dengan margin transparan. Keuntungan harus diungkapkan; pembayaran tangguh diperbolehkan.'],
            ['number' => 5, 'slug' => 'ijarah', 'arabic_name' => 'إِجَارَةٌ', 'latin_name' => 'Ijarah', 'name_en' => 'Ijarah', 'name_id' => 'Ijarah', 'definition_en' => 'Transfer of usufruct (right to use an asset) to a lessee for a fixed rental period and price. Ownership remains with the lessor.', 'definition_id' => 'Pemindahan hak manfaat aset kepada penyewa untuk periode dan harga sewa tetap. Kepemilikan tetap pada pemberi sewa.'],
            ['number' => 6, 'slug' => 'ijarah-muntahiya-bittamleek', 'arabic_name' => 'إِجَارَةٌ وَعْدٌ بِالتَّمْلِيكِ', 'latin_name' => 'Ijarah Muntahiya Bittamleek', 'name_en' => 'IMBT', 'name_id' => 'IMBT', 'definition_en' => 'A lease contract with a promise from the lessor to transfer ownership at the end of the term, either via gift or separate sale.', 'definition_id' => 'Kontrak sewa dengan janji pengalihan kepemilikan di akhir masa sewa, baik melalui hibah maupun jual beli terpisah.'],
            ['number' => 7, 'slug' => 'diminishing-musharakah', 'arabic_name' => 'مُشَارَكَةٌ مُتَنَاقِصَةٌ', 'latin_name' => 'Diminishing Musharakah', 'name_en' => 'Diminishing Musharakah', 'name_id' => 'Musyarakah Mutanaqisah', 'definition_en' => 'Asset pledged as security against an obligation. Possession transfers to the pledgee for the duration of the obligation.', 'definition_id' => 'Kepemilikan mitra dibeli secara bertahap dari waktu ke waktu, umum digunakan untuk pembiayaan rumah sesuai Syariah.'],
            ['number' => 8, 'slug' => 'salam', 'arabic_name' => 'سَلَمٌ', 'latin_name' => 'Salam', 'name_en' => 'Salam', 'name_id' => 'Salam', 'definition_en' => 'Full advance payment for goods to be delivered later at a specified date, quality, and quantity. Used for agriculture or commodities.', 'definition_id' => 'Pembayaran penuh di muka untuk barang yang diserahkan kemudian dengan tanggal, kualitas, dan kuantitas tertentu.'],
            ['number' => 9, 'slug' => 'istisna', 'arabic_name' => 'إِسْتِصْنَاعٌ', 'latin_name' => 'Istisna', 'name_en' => 'Istisna', 'name_id' => 'Istishna', 'definition_en' => 'Financing tied to an asset being built or manufactured. Specifications, price and delivery are fixed at contract; payment can be staged.', 'definition_id' => 'Pembiayaan untuk aset yang dibangun atau diproduksi. Spesifikasi, harga, dan serah terima ditetapkan di awal; pembayaran dapat bertahap.'],
            ['number' => 10, 'slug' => 'qard', 'arabic_name' => 'قَرْضٌ', 'latin_name' => 'Qard', 'name_en' => 'Qard', 'name_id' => 'Qardh', 'definition_en' => 'An interest-free loan given for social or temporary relief. Only the principal is repayable. The lender may not demand any extra benefit.', 'definition_id' => 'Pinjaman tanpa bunga untuk bantuan sosial atau sementara. Hanya pokok yang wajib dikembalikan; pemberi pinjaman tidak boleh menuntut manfaat tambahan.'],
            ['number' => 11, 'slug' => 'waqf', 'arabic_name' => 'وَقْفٌ', 'latin_name' => 'Waqf', 'name_en' => 'Waqf', 'name_id' => 'Wakaf', 'definition_en' => 'Permanent dedication of an asset (cash, property, equipment) for charitable purposes. Principal is preserved, and income is distributed to beneficiaries.', 'definition_id' => 'Dedikasi permanen aset untuk tujuan amal. Pokok aset dipertahaman, sementara hasilnya didistribusikan kepada penerima manfaat.'],
        ];

        foreach ($akads as $akad) {
            $genericContentEn = '<p class="intro">In Islamic finance, <strong>' . $akad['name_en'] . '</strong> (' . $akad['arabic_name'] . ') is defined as a ' . strtolower($akad['definition_en']) . '.</p><p>This contract provides a robust framework for ethical financing and investment.</p>';
            
            $genericContentId = '<p class="intro">Dalam keuangan Islam, <strong>' . $akad['name_id'] . '</strong> (' . $akad['arabic_name'] . ') didefinisikan sebagai ' . strtolower($akad['definition_id']) . '.</p><p>Akad ini menyediakan kerangka kerja yang kuat untuk pembiayaan dan investasi etis.</p>';

            Akad::updateOrCreate(
                ['slug' => $akad['slug']],
                array_merge($akad, [
                    'jurisprudence_en' => $genericContentEn,
                    'jurisprudence_id' => $genericContentId,
                    'is_published' => true,
                ])
            );
        }
    }
}
