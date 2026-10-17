import type { Post } from '@/types/post';
import type { FeedType } from '@/types/feed';
import { posts } from '@/api/mocks/posts';

export async function fetchFeedMock(feed: FeedType): Promise<Post[]> {
    await new Promise((resolve) => setTimeout(resolve, 500)); // задержка для состояния загрузки

    // Временная сортировка моков.
    const sorted = [...posts];

    switch (feed) {
        case 'popular':
            return sorted.sort((a, b) => b.likesCount - a.likesCount);
        case 'new':
            return sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
        case 'discussed':
            return sorted.sort((a, b) => b.commentsCount - a.commentsCount);
    }
}
