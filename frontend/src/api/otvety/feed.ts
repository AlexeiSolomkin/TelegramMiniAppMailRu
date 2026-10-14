import type { Post } from '@/types/post';
import type { FeedType } from '@/types/feed';

const params = new URLSearchParams({
    limit: '20',
    storage: 'main',
    sort: FEED_SORT[feed],
    dir: '1',
    rank: '0',
});
const url = `/otvet-api/topic/feed?${params.toString()}`;

export async function fetchFeed(feed: FeedType): Promise<Post[]> {
    // 1. собрать адрес запроса
    // 2. отправить запрос
    // 3. проверить, что ответ успешный
    // 4. разобрать JSON и прогнать через toPost
}
