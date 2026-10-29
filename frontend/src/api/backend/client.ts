import { initData } from '@tma.js/sdk-react';

const BACKEND_BASE = '/backend';

/** Ошибка от нашего бэкенда: HTTP-статус и код из тела ответа { "error": "..." }. */
export class BackendError extends Error {
    readonly status: number;
    readonly code: string;

    constructor(status: number, code: string) {
        super(`Ошибка бэкенда ${status}: ${code}`);
        this.name = 'BackendError';
        this.status = status;
        this.code = code;
    }
}

/**
 * Обёртка над fetch для запросов к нашему бэкенду:
 * базовый адрес, авторизация через initData, проверка ответа и разбор JSON.
 */
export async function backendRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
    const headers = new Headers(init.headers);
    // В Telegram — настоящий initData, в разработке — подписанный из VITE_DEV_INIT_DATA (см. mockEnv.ts)
    headers.set('Authorization', `tma ${initData.raw() ?? ''}`);

    const response = await fetch(`${BACKEND_BASE}${path}`, { ...init, headers });

    if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new BackendError(response.status, body?.error ?? 'unknown');
    }

    if (response.status === 204) {
        return undefined as T;
    }

    return (await response.json()) as T;
}
