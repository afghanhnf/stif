import { useTranslation } from 'react-i18next';
import styles from './USPSection.module.css';

export default function USPSection({ locale }) {
    const { t } = useTranslation();

    const usps = [
        {
            title: t('usp.title_1'),
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        },
        {
            title: t('usp.title_2'),
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
        },
        {
            title: t('usp.title_3'),
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        },
        {
            title: t('usp.title_4'),
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        }
    ];

    return (
        <section className={styles.usp}>
            <div className="container">
                <div className={styles.uspGrid}>
                    {usps.map((usp, idx) => (
                        <div key={idx} className={styles.uspItem}>
                            <div className="icon-box icon-box--primary">
                                {usp.icon}
                            </div>
                            <h3 className={`text-h4 ${styles.uspTitle}`}>
                                {usp.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
