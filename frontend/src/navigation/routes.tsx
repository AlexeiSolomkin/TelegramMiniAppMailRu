import { Navigate, Route, Routes } from 'react-router';

import { AppLayout } from '@/components/AppLayout/AppLayout';
import { FeedPage } from '@/pages/FeedPage/FeedPage';
import { NotificationsPage } from '@/pages/NotificationsPage/NotificationsPage';
import { PostPage } from '@/pages/PostPage/PostPage';

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route index element={<FeedPage key="popular" feed="popular" />} />
                <Route path="new" element={<FeedPage key="new" feed="new" />} />
                <Route path="discussed" element={<FeedPage key="discussed" feed="discussed" />} />
                <Route path="notifications" element={<NotificationsPage />} />
                <Route path="post/:id" element={<PostPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
