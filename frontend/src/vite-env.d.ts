/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_USE_MOCKS?: string;
    /** Только для разработки: initData, подписанный токеном бота (go run ./cmd/initdata в бэкенде). */
    readonly VITE_DEV_INIT_DATA?: string;
}
