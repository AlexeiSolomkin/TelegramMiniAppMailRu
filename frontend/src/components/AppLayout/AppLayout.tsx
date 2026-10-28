import { Outlet } from 'react-router';

import { AuthResultSnackbar } from '@/auth/AuthResultSnackbar';
import { AuthSheet } from '@/components/AuthSheet/AuthSheet';
import { TabBar } from '@/components/TabBar/TabBar';

import './AppLayout.css';

export function AppLayout() {
    return (
        <div className="app-layout">
            <div className="app-layout__content">
                <Outlet />
            </div>
            <TabBar />
            <AuthSheet />
            <AuthResultSnackbar />
        </div>
    );
}
