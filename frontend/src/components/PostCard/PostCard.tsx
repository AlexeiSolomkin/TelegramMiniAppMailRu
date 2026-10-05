import type {Post} from '@/types/post.ts';

const DEFAULT_AVATAR = '/defaultAvatar/defaultAvatar.jpg';

interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <article className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Author: {post.author.name}</p>
            <img src={post.author.avatar || DEFAULT_AVATAR} alt={`${post.author.name}'s avatar`} />
            <p>Created At: {post.createdAt}</p>
            {post.tags && post.tags.length > 0 && (
                <p>Tags: {post.tags.join(', ')}</p>
            )}
            <p>Likes: {post.likesCount} | Comments: {post.commentsCount}</p>
        </article>
    );
}