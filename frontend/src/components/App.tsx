import { HashRouter } from 'react-router';
import { useLaunchParams, useSignal, miniApp } from '@tma.js/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';

import { AppRoutes } from '@/navigation/routes';

export function App() {
    const lp = useLaunchParams();
    const isDark = useSignal(miniApp.isDark);

    return (
        <AppRoot
            appearance={isDark ? 'dark' : 'light'}
            platform={['macos', 'ios'].includes(lp.tgWebAppPlatform) ? 'ios' : 'base'}
        >
            <HashRouter>
                <AppRoutes />
            </HashRouter>
        </AppRoot>
    );
}
