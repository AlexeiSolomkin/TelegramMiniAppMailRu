import type { ComponentType, JSX } from 'react';

import { FeedPage } from "@/pages/FeedPage/FeedPage.tsx";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: FeedPage, title: 'Feed' },
];
