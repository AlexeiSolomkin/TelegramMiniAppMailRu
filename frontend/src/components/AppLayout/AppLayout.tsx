import { Outlet } from 'react-router';

import { TabBar } from '@/components/TabBar/TabBar';

import './AppLayout.css';

export function AppLayout() {
    return (
        <div className="app-layout">
            <div className="app-layout__content">
                <Outlet />
            </div>
            <TabBar />
        </div>
    );
}
