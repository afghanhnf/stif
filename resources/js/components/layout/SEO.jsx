import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function SEO({ title, description, image, url }) {
    const { t, i18n } = useTranslation();
    const siteName = 'STIF Capital';
    const defaultDescription = t('values.description');
    const defaultImage = '/images/og-image.jpg'; // Recommended size: 1200x630

    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const finalDescription = description || defaultDescription;
    const finalImage = image || defaultImage;

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={finalDescription} />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || window.location.href} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:locale" content={i18n.language === 'id' ? 'id_ID' : 'en_US'} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url || window.location.href} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={finalDescription} />
            <meta property="twitter:image" content={finalImage} />
        </Head>
    );
}
