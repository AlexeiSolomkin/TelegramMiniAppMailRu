import { HashRouter } from 'react-router';
import { useLaunchParams, useSignal, miniApp } from '@tma.js/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';

import { AuthProvider } from '@/auth/AuthContext';
import { AppRoutes } from '@/navigation/routes';

export function App() {
    const lp = useLaunchParams();
    const isDark = useSignal(miniApp.isDark);

    return (
        <AppRoot
            appearance={isDark ? 'dark' : 'light'}
            platform={['macos', 'ios'].includes(lp.tgWebAppPlatform) ? 'ios' : 'base'}
        >
            <AuthProvider>
                <HashRouter>
                    <AppRoutes />
                </HashRouter>
            </AuthProvider>
        </AppRoot>
    );
}
