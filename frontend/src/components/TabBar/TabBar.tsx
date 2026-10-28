import { NavLink } from 'react-router';
import clsx from 'clsx';

import homeIcon from '@/assets/icons/home.svg';
import homeActiveIcon from '@/assets/icons/home-active.svg';
import newIcon from '@/assets/icons/lightning.svg';
import newActiveIcon from '@/assets/icons/lightning-active.svg';
import discussedIcon from '@/assets/icons/chat.svg';
import discussedActiveIcon from '@/assets/icons/chat-active.svg';
import notificationsIcon from '@/assets/icons/bell.svg';
import notificationsActiveIcon from '@/assets/icons/bell-active.svg';
import profileIcon from '@/assets/icons/profile.svg';
import { useAuth } from '@/auth/AuthContext';

import './TabBar.css';

const TABS = [
    { to: '/', label: 'Популярное', icon: homeIcon, activeIcon: homeActiveIcon },
    { to: '/new', label: 'Новое', icon: newIcon, activeIcon: newActiveIcon },
    {
        to: '/discussed',
        label: 'Обсуждаемое',
        icon: discussedIcon,
        activeIcon: discussedActiveIcon,
    },
];

const NOTIFICATIONS_TAB = {
    to: '/notifications',
    label: 'Уведомления',
    icon: notificationsIcon,
    activeIcon: notificationsActiveIcon,
};

export function TabBar() {
    const { isLinked, openAuthSheet } = useAuth();

    // По макету: до входа последняя вкладка — аватар, который открывает окно входа,
    // после входа — уведомления.
    const tabs = isLinked ? [...TABS, NOTIFICATIONS_TAB] : TABS;

    return (
        <nav className="tab-bar" aria-label="Разделы">
            {tabs.map((tab) => (
                <NavLink
                    key={tab.to}
                    to={tab.to}
                    end
                    aria-label={tab.label}
                    className={({ isActive }) =>
                        clsx('tab-bar__item', isActive && 'tab-bar__item--active')
                    }
                >
                    {({ isActive }) => (
                        <img
                            className="tab-bar__icon"
                            src={isActive ? tab.activeIcon : tab.icon}
                            alt=""
                        />
                    )}
                </NavLink>
            ))}
            {!isLinked && (
                <button
                    type="button"
                    className="tab-bar__item"
                    aria-label="Войти"
                    onClick={openAuthSheet}
                >
                    <img className="tab-bar__icon" src={profileIcon} alt="" />
                </button>
            )}
        </nav>
    );
}
