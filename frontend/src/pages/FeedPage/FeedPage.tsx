import { Page } from '@/components/Page';
import { PostCard } from '@/components/PostCard/PostCard';
import { posts } from '@/api/mocks/posts';

import './FeedPage.css';

export function FeedPage() {
    return (
        <Page back={false}>
            <main className="feed">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </main>
        </Page>
    );
}
