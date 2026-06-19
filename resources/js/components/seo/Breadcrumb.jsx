import { Link, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Breadcrumb({ items }) {
    const { t } = useTranslation();
    const { props } = usePage();
    const appUrl = props.appUrl || (typeof window !== 'undefined' ? window.location.origin : 'https://stifcapital.com');

    if (!items || items.length === 0) return null;

    // Build JSON-LD Schema
    const schemaList = items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `${appUrl}${item.url}`
    }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": schemaList
    };

    return (
        <nav aria-label="breadcrumb" style={{ margin: '24px 0' }}>
            {/* JSON-LD Script */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <ol style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0, 
                display: 'flex', 
                alignItems: 'center', 
                flexWrap: 'wrap', 
                gap: '8px',
                fontSize: '14px',
                color: '#666666'
            }}>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    
                    return (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {isLast ? (
                                <span style={{ color: '#131810', fontWeight: 'bold' }} aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <>
                                    <Link 
                                        href={item.url} 
                                        style={{ textDecoration: 'none', color: '#6B6D0F', transition: 'color 0.2s' }}
                                        onMouseOver={(e) => e.target.style.color = '#4F5331'}
                                        onMouseOut={(e) => e.target.style.color = '#6B6D0F'}
                                    >
                                        {item.label}
                                    </Link>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
