import { useCallback, useState } from 'react';
import { useLaunchParams } from '@tma.js/sdk-react';

import { Snackbar } from '@/components/Snackbar/Snackbar';

/**
 * Результаты входа, которые бэкенд передаёт стартовым параметром Mini App
 * после возврата со страницы VK ID (/oauth/callback → t.me/...?startapp=vkid_...).
 */
const AUTH_RESULTS: Record<string, { message: string; variant: 'success' | 'error' }> = {
    vkid_ok: { message: 'Вы вошли в аккаунт', variant: 'success' },
    vkid_denied: { message: 'Вход отменён', variant: 'error' },
    vkid_expired: { message: 'Ссылка для входа устарела, попробуйте ещё раз', variant: 'error' },
    vkid_conflict: {
        message: 'Этот аккаунт уже привязан к другому пользователю Telegram',
        variant: 'error',
    },
    vkid_failed: {
        message: 'Не получилось войти. Попробуйте другой способ или зайдите чуть позже',
        variant: 'error',
    },
};

export function AuthResultSnackbar() {
    const startParam = useLaunchParams().tgWebAppStartParam;
    const result = startParam ? AUTH_RESULTS[startParam] : undefined;
    const [isVisible, setIsVisible] = useState(true);

    const hide = useCallback(() => setIsVisible(false), []);

    if (!result || !isVisible) {
        return null;
    }

    return <Snackbar message={result.message} variant={result.variant} onClose={hide} />;
}
