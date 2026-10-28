import { backendRequest } from '@/api/backend/client';
import type { MeResponse, VkidLoginResponse, VkidProfile } from '@/api/backend/types';

/** Текущий пользователь Telegram и статус привязки VK ID. */
export function getMe(): Promise<MeResponse> {
    return backendRequest<MeResponse>('/api/me');
}

/** Начать привязку VK ID: бэкенд вернёт ссылку на страницу входа. */
export async function startVkidLogin(): Promise<string> {
    const { auth_url } = await backendRequest<VkidLoginResponse>('/api/vkid/login', {
        method: 'POST',
    });
    return auth_url;
}

/** Отвязать VK ID от текущего пользователя Telegram. */
export function vkidLogout(): Promise<void> {
    return backendRequest<void>('/api/vkid/logout', { method: 'POST' });
}

/** Профиль из VK ID. 404 vkid_not_linked — не привязан, 409 vkid_relink_required — нужно войти заново. */
export function getVkidProfile(): Promise<VkidProfile> {
    return backendRequest<VkidProfile>('/api/vkid/profile');
}
