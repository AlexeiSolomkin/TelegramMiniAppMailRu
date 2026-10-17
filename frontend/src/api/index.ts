import { fetchFeed } from '@/api/otvety/feed';
import { fetchFeedMock } from '@/api/mocks/feed';

const useMocks = import.meta.env.VITE_USE_MOCKS === 'true';

export const getFeed = useMocks ? fetchFeedMock : fetchFeed;
