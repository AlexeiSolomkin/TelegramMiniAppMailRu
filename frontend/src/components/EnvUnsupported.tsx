import { Placeholder, AppRoot } from '@telegram-apps/telegram-ui';
import { retrieveLaunchParams, isColorDark, isRGB } from '@tma.js/sdk-react';
import { useMemo } from 'react';

export function EnvUnsupported() {
    const [platform, isDark] = useMemo(() => {
        try {
            const lp = retrieveLaunchParams();
            const { bg_color: bgColor } = lp.tgWebAppThemeParams;
            return [lp.tgWebAppPlatform, bgColor && isRGB(bgColor) ? isColorDark(bgColor) : false];
        } catch {
            return ['android', false];
        }
    }, []);

    return (
        <AppRoot
            appearance={isDark ? 'dark' : 'light'}
            platform={['macos', 'ios'].includes(platform) ? 'ios' : 'base'}
        >
            <Placeholder
                header="Упс! Похоже, что ваше окружение не поддерживается."
                description="Вы используете слишком старый клиент Telegram для запуска этого приложения"
            ></Placeholder>
        </AppRoot>
    );
}
