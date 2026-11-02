const OTVETY_API = '/otvet-api'; // TODO: вынести потом в переменные окружения

/** Ошибка запроса к API */
export class OtvetApiError extends Error {
    readonly status: number;

    constructor(status: number, message: string) {
        super(message);
        this.name = 'OtvetApiError';
        this.status = status;
    }
}

/**
 * Функция-обертка для запросов к API Ответов
 * @param path путь запроса
 * @param params query параметры запроса
 * @returns разобранный JSON ответа
 */
export async function otvetRequest<T>(path: string, params?: Record<string, string>): Promise<T> {
    const query = params ? `?${new URLSearchParams(params).toString()}` : '';
    const response = await fetch(`${OTVETY_API}${path}${query}`);

    if (!response.ok) {
        throw new OtvetApiError(response.status, `Ошибка запроса: ${response.status}`);
    }

    const contentType = response.headers.get('content-type') ?? '';
    if (response.redirected || !contentType.includes('application/json')) {
        throw new OtvetApiError(
            429,
            'Сервер «Ответов» временно ограничил запросы, попробуйте позже',
        );
    }

    return (await response.json()) as T;
}
