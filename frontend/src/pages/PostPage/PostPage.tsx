import { useParams } from 'react-router';

import { Page } from '@/components/Page';
import { PostCard } from '@/components/PostCard/PostCard';
import { posts } from '@/api/mocks/posts';

export function PostPage() {
    const { id } = useParams();
    const post = posts.find((item) => item.id === Number(id));

    return (
        <Page>
            <main className="feed">{post ? <PostCard post={post} /> : <p>Пост не найден</p>}</main>
        </Page>
    );
}
