// Ответы нашего бэкенда (TelegramMiniAppMailru_backend, ветка features/vkid_oauth)

export interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
}

export interface VkidStatus {
    linked: boolean;
    user_id?: number;
    name?: string;
    email?: string;
    linked_at?: string;
}

/** GET /api/me */
export interface MeResponse {
    telegram_user: TelegramUser;
    vkid: VkidStatus;
}

/** POST /api/vkid/login */
export interface VkidLoginResponse {
    auth_url: string;
}

/** GET /api/vkid/profile */
export interface VkidProfile {
    user_id: number;
    first_name: string;
    last_name: string;
    email?: string;
    avatar?: string;
}
