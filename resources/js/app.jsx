import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

createInertiaApp({
    title: (title) => `${title} — STIF Capital`,
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.jsx`,
            import.meta.glob('./pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <I18nextProvider i18n={i18n}>
                <App {...props} />
            </I18nextProvider>
        );
    },
    progress: {
        delay: 0,
        color: '#7B8F47',
        includeCSS: true,
        showSpinner: false,
    },
});
