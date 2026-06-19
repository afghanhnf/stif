import { Head, usePage } from '@inertiajs/react';

export default function SeoHead({ 
    title, 
    description = 'STIF Capital - Premier Sharia-compliant Private Equity and Corporate Finance Advisory firm.', 
    image = '/images/color-logos.png', 
    url, 
    type = 'website' 
}) {
    const { url: currentPath, props } = usePage();
    
    // Determine the full URL
    const appUrl = props.appUrl || (typeof window !== 'undefined' ? window.location.origin : 'https://stifcapital.com');
    const fullUrl = url ? `${appUrl}${url}` : `${appUrl}${currentPath}`;
    const fullImage = image.startsWith('http') ? image : `${appUrl}${image}`;
    const fullTitle = title ? `${title} | STIF Capital` : 'STIF Capital';

    // Basic JSON-LD
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": type === 'article' ? "Article" : "Organization",
        "url": fullUrl,
        "name": fullTitle,
        "description": description,
        "image": fullImage,
        ...(type === 'article' && {
            "headline": fullTitle,
            "publisher": {
                "@type": "Organization",
                "name": "STIF Capital",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${appUrl}/images/color-logos.png`
                }
            }
        })
    };

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullUrl} />
            <meta name="robots" content="index, follow" />
            
            {/* OpenGraph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:type" content={type} />
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Head>
    );
}
