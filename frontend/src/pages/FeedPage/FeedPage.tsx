import { Page } from '@/components/Page';
import { PostCard } from '@/components/PostCard/PostCard';
import { posts } from '@/api/mocks/posts';
import type { Post } from '@/types/post';
import type { FeedType } from '@/types/feed';

import './FeedPage.css';

interface FeedPageProps {
    feed: FeedType;
}

// Временная сортировка моков. Когда появится API, каждую ленту будет отдавать сервер.
function getFeedPosts(feed: FeedType): Post[] {
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

export function FeedPage({ feed }: FeedPageProps) {
    const feedPosts = getFeedPosts(feed);

    return (
        <Page back={false}>
            <main className="feed">
                {feedPosts.map((post) => (
                    <PostCard key={post.id} post={post} to={`/post/${post.id}`} />
                ))}
            </main>
        </Page>
    );
}
