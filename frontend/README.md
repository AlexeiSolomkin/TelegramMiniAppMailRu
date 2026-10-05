# Telegram Mini App Mail Ru Q&A Frontend Repository

## Требования

- Node.js 20 или новее
- npm

## Запуск

Все команды выполняются из папки `frontend`.

```bash
npm ci          # установка зависимостей строго по package-lock.json
npm run dev     # запуск в режиме разработки, адрес появится в консоли
```

В режиме разработки окружение Telegram подменяется моком (`src/mockEnv.ts`),
поэтому приложение открывается в обычном браузере.

## Сборка

```bash
npm run build   # проверка типов и сборка в папку dist
npm run preview # локальный просмотр собранной версии
```

## Проверка кода

```bash
npm run lint    # ESLint
npm run format  # форматирование через Prettier
```
