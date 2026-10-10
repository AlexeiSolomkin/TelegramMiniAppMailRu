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
    {
        to: '/notifications',
        label: 'Уведомления',
        icon: notificationsIcon,
        activeIcon: notificationsActiveIcon,
    },
];

export function TabBar() {
    return (
        <nav className="tab-bar" aria-label="Разделы">
            {TABS.map((tab) => (
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
        </nav>
    );
}
