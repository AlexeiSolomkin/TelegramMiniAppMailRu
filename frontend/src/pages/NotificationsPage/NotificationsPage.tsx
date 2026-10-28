import { useAuth } from '@/auth/AuthContext';
import { Page } from '@/components/Page';

import './NotificationsPage.css';

export function NotificationsPage() {
    const { isLinked, me, openAuthSheet, logout } = useAuth();

    if (!isLinked) {
        return (
            <Page back={false}>
                <main className="feed notifications">
                    <p>Войдите, чтобы видеть ответы на ваши комментарии</p>
                    <button type="button" className="notifications__action" onClick={openAuthSheet}>
                        Войти
                    </button>
                </main>
            </Page>
        );
    }

    return (
        <Page back={false}>
            <main className="feed notifications">
                <p>Пока всё тихо</p>

                {/* TODO: временно для проверки авторизации, в макете выхода здесь нет */}
                <p className="notifications__account">Вы вошли как {me?.vkid.name}</p>
                <button
                    type="button"
                    className="notifications__action"
                    onClick={() => void logout()}
                >
                    Выйти
                </button>
            </main>
        </Page>
    );
}
