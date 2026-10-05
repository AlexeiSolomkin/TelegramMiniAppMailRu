import type { ComponentType } from 'react';

import { FeedPage } from '@/pages/FeedPage/FeedPage.tsx';

interface Route {
    path: string;
    Component: ComponentType;
    title?: string;
}

export const routes: Route[] = [{ path: '/', Component: FeedPage, title: 'Feed' }];
