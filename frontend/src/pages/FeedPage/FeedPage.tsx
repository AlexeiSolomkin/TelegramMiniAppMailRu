import { Page } from '@/components/Page';
import { PostCard } from '@/components/PostCard/PostCard';
import { posts } from '@/api/mocks/posts';

export function FeedPage() {
    return (
        <Page back={false}>
            <div>
                <h1>Feed</h1>
                <p>Welcome to the Feed page!</p>
                <PostCard post={posts[0]} />
                <PostCard post={posts[1]} />
                <PostCard post={posts[2]} />
            </div>
        </Page>
    );
}
