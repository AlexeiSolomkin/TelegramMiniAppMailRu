import { useEffect, useState } from 'react';

import { BackendError } from '@/api/backend/client';
import { useAuth } from '@/auth/AuthContext';

import './AuthSheet.css';

function getLoginErrorMessage(err: unknown): string {
    if (err instanceof BackendError && err.code.startsWith('init_data')) {
        return 'Не удалось проверить данные Telegram. Перезапустите приложение.';
    }
    return 'Не получилось начать вход. Попробуйте позже.';
}

/** Окно «Начните обсуждение» из макета: предлагает войти, чтобы голосовать и комментировать. */
export function AuthSheet() {
    const { isAuthSheetOpen, closeAuthSheet, login } = useAuth();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!isAuthSheetOpen) {
            return;
        }
        setError(null);

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeAuthSheet();
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isAuthSheetOpen, closeAuthSheet]);

    if (!isAuthSheetOpen) {
        return null;
    }

    const handleLogin = async () => {
        setIsSubmitting(true);
        setError(null);
        try {
            await login();
            closeAuthSheet();
        } catch (err) {
            console.warn('Не удалось начать вход:', err);
            setError(getLoginErrorMessage(err));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="auth-sheet" onClick={closeAuthSheet}>
            <section
                className="auth-sheet__panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby="auth-sheet-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="auth-sheet__close"
                    aria-label="Закрыть"
                    onClick={closeAuthSheet}
                >
                    ×
                </button>

                <h2 id="auth-sheet-title" className="auth-sheet__title">
                    Начните обсуждение
                </h2>
                <p className="auth-sheet__subtitle">
                    Мнения, знания, опыт, истории, важные и неважные вопросы — всё здесь
                </p>

                <button
                    type="button"
                    className="auth-sheet__login"
                    disabled={isSubmitting}
                    onClick={() => void handleLogin()}
                >
                    {/* ИКОНКА: логотип VK слева от текста, как в макете */}
                    {isSubmitting ? 'Открываем вход…' : 'Войти с VK ID'}
                </button>

                {/* TODO: кнопки «Mail», «Яндекс ID», «OK» из макета. Сейчас провайдер входа
                    задаётся на бэкенде одной настройкой VKID_PROVIDER, выбора на фронте нет. */}

                {error && <p className="auth-sheet__error">{error}</p>}

                {/* TODO: ссылки на пользовательское соглашение и политику конфиденциальности */}
                <p className="auth-sheet__terms">
                    Создавая аккаунт, вы принимаете Пользовательское соглашение и Политику
                    конфиденциальности сервиса
                </p>
            </section>
        </div>
    );
}
