import { useEffect, useState } from 'react';

import { getFeed } from '@/api';
import { Page } from '@/components/Page';
import { PostCard } from '@/components/PostCard/PostCard';
import type { FeedType } from '@/types/feed';
import type { Post } from '@/types/post';

import './FeedPage.css';

export interface FeedPageProps {
    feed: FeedType;
}

export function FeedPage({ feed }: FeedPageProps) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;

        setIsLoading(true);
        setError(null);

        void getFeed(feed)
            .then((loadedPosts) => {
                if (!isCancelled) {
                    setPosts(loadedPosts);
                }
            })
            .catch((err: unknown) => {
                if (!isCancelled) {
                    setError(err instanceof Error ? err.message : 'Не удалось загрузить ленту');
                }
            })
            .finally(() => {
                if (!isCancelled) {
                    setIsLoading(false);
                }
            });

        return () => {
            isCancelled = true;
        };
    }, [feed]);

    return (
        <Page back={false}>
            <main className="feed">
                {isLoading && <p className="feed__status">Загрузка…</p>}
                {error && <p className="feed__status">{error}</p>}
                {!isLoading &&
                    !error &&
                    posts.map((post) => (
                        <PostCard key={post.id} post={post} to={`/post/${post.id}`} />
                    ))}
            </main>
        </Page>
    );
}
