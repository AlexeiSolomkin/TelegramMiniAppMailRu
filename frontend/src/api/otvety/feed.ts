import type { Post } from '@/types/post';
import type { FeedType } from '@/types/feed';
import { toPost } from '@/api/otvety/adapters';
import type { ApiFeedResponse } from '@/api/otvety/types';
import { otvetRequest } from '@/api/otvety/client';

const FEED_SORT: Record<FeedType, string> = {
    popular: 'rating',
    new: 'id',
    discussed: 'id', // TODO: уточнить сортировку для обсуждаемых
};

/**
 * Функция запроса ленты постов по типу сортировки(Популярное, Новое, Обсуждаемое)
 */
export async function fetchFeed(feed: FeedType): Promise<Post[]> {
    const url = `/topic/feed?`;
    const params = {
        limit: '5', // TODO: 5 для отладки, вернуть 20
        storage: 'main',
        sort: FEED_SORT[feed],
        dir: '1',
        rank: '0',
    };

    const data: ApiFeedResponse = await otvetRequest(url, params);
    return data.result.feed.map(toPost);
}
