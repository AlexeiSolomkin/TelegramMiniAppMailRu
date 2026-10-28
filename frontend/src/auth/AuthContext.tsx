import {
    createContext,
    type PropsWithChildren,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { openLink } from '@tma.js/sdk-react';

import { getMe, startVkidLogin, vkidLogout } from '@/api/backend/auth';
import type { MeResponse } from '@/api/backend/types';

interface AuthContextValue {
    /** Ответ /api/me или null, если бэкенд недоступен или не принял initData. */
    me: MeResponse | null;
    /** Привязан ли VK ID — то есть «вошёл» ли пользователь. */
    isLinked: boolean;
    isLoading: boolean;
    /** Перезапросить /api/me, например после возврата со страницы входа. */
    refresh: () => Promise<void>;
    /** Получить ссылку на вход VK ID у бэкенда и открыть её во внешнем браузере. */
    login: () => Promise<void>;
    logout: () => Promise<void>;

    /** Окно «Начните обсуждение» с кнопкой входа. */
    isAuthSheetOpen: boolean;
    openAuthSheet: () => void;
    closeAuthSheet: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * Общее состояние авторизации для всего приложения.
 * Быстрый вариант на контексте React; позже можно перенести в стор.
 */
export function AuthProvider({ children }: PropsWithChildren) {
    const [me, setMe] = useState<MeResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthSheetOpen, setIsAuthSheetOpen] = useState(false);

    const refresh = useCallback(async () => {
        setIsLoading(true);
        try {
            setMe(await getMe());
        } catch (err) {
            // Без бэкенда приложение работает в режиме «не вошёл»: лента читается и так
            console.warn('Не удалось получить /api/me:', err);
            setMe(null);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        void refresh();
    }, [refresh]);

    const login = useCallback(async () => {
        const authUrl = await startVkidLogin();
        openLink(authUrl);
    }, []);

    const logout = useCallback(async () => {
        await vkidLogout();
        await refresh();
    }, [refresh]);

    const openAuthSheet = useCallback(() => setIsAuthSheetOpen(true), []);
    const closeAuthSheet = useCallback(() => setIsAuthSheetOpen(false), []);

    const value = useMemo<AuthContextValue>(
        () => ({
            me,
            isLinked: me?.vkid.linked ?? false,
            isLoading,
            refresh,
            login,
            logout,
            isAuthSheetOpen,
            openAuthSheet,
            closeAuthSheet,
        }),
        [me, isLoading, refresh, login, logout, isAuthSheetOpen, openAuthSheet, closeAuthSheet],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth нужно вызывать внутри AuthProvider');
    }
    return context;
}
