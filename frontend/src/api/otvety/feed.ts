import type { Post } from '@/types/post';
import type { FeedType } from '@/types/feed';
import { toPost } from '@/api/otvety/adapters';
import type { ApiFeedResponse } from '@/api/otvety/types';

const FEED_SORT: Record<FeedType, string> = {
    popular: 'rating',
    new: 'id',
    discussed: 'id', // TODO: уточнить сортировку для обсуждаемых
};

/**
 * Асинхронная функция запроса ленты постов по типу сортировки(Популярное, Новое, Обсуждаемое)
 */
export async function fetchFeed(feed: FeedType): Promise<Post[]> {
    const params = new URLSearchParams({
        limit: '20',
        storage: 'main',
        sort: FEED_SORT[feed],
        dir: '1',
        rank: '0',
    });
    const url = `/otvet-api/topic/feed?${params.toString()}`; // TODO: вынести потом в переменные окружения
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибка при получении ленты: ${response.status}`);
    }
    const data = (await response.json()) as ApiFeedResponse;
    return data.result.feed.map(toPost);
}
