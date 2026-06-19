import { useTranslation } from 'react-i18next';
import Layout from '@/components/layout/Layout';
import SeoHead from '@/components/seo/SeoHead';
import Breadcrumb from '@/components/seo/Breadcrumb';
import FadeIn from '@/components/animations/FadeIn';

import HeroSection from '@/components/sections/HeroSection';
import HeroFeaturesSection from '@/components/sections/HeroFeaturesSection';
import WhoWeAreTeaserSection from '@/components/sections/WhoWeAreTeaserSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ValuesSection from '@/components/sections/ValuesSection';
import BusinessCaseSection from '@/components/sections/BusinessCaseSection';
import VideoBannerSection from '@/components/sections/VideoBannerSection';
import LibraryPreviewSection from '@/components/sections/LibraryPreviewSection';
import InsightSection from '@/components/sections/InsightSection';
import CTASection from '@/components/sections/CTASection';

export default function Home({ locale, akads, services, articles, portfolios, settings, heroSection, profile }) {
    const { t } = useTranslation();

    return (
        <Layout locale={locale} settings={settings}>
            <SeoHead title={t('hero.badge')} />
            <Breadcrumb />

            <HeroSection locale={locale} data={heroSection} />
            
            <FadeIn delay={100} direction="up">
                <HeroFeaturesSection locale={locale} data={profile} />
            </FadeIn>

            <FadeIn delay={100} direction="up">
                <WhoWeAreTeaserSection locale={locale} data={profile} />
            </FadeIn>

            <FadeIn delay={100} direction="up">
                <ServicesSection services={services} locale={locale} />
            </FadeIn>

            <FadeIn delay={100} direction="up">
                <ValuesSection locale={locale} data={profile} />
            </FadeIn>

            <FadeIn delay={100} direction="up">
                <BusinessCaseSection portfolios={portfolios} locale={locale} />
            </FadeIn>

            <FadeIn delay={100} direction="up">
                <VideoBannerSection />
            </FadeIn>

            <FadeIn delay={100} direction="up">
                <LibraryPreviewSection akads={akads} locale={locale} />
            </FadeIn>

            <FadeIn delay={100} direction="up">
                <InsightSection articles={articles} locale={locale} />
            </FadeIn>

            <FadeIn delay={100} direction="up">
                <CTASection locale={locale} />
            </FadeIn>

        </Layout>
    );
}
