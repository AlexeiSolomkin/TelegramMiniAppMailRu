import type { Post } from '@/types/post';
import './PostCard.css';

import namespaceIcon from '@/assets/icons/namespace1.svg';
import buttonBarIcon from '@/assets/icons/button-bar.svg';
import bookIcon from '@/assets/icons/book.svg';
import arrowUpIcon from '@/assets/icons/arrow-up.svg';
import arrowDownIcon from '@/assets/icons/arrow-down.svg';
import comments from '@/assets/icons/comments.svg';
import shareIcon from '@/assets/icons/share.svg';
//import poolIcon from '@/assets/icons/pool.svg';

const DEFAULT_AVATAR = '/defaultAvatar/defaultAvatar.jpg';

const POST_TYPE_LABELS: Record<Post['type'], string> = {
    question: 'вопрос',
    answer: 'ответ',
    post: 'пост',
};

interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    const { author, tags = [] } = post;

    return (
        <article className="post-card">
            <header className="post-card__header">
                <img className="post-card__avatar" src={author.avatar || DEFAULT_AVATAR} alt="" />

                <div className="post-card__meta">
                    <div className="post-card__byline">
                        <span className="post-card__author">{author.name}</span>
                        {/* потом разобраться с относительным временем */}
                        <time className="post-card__time" dateTime={post.createdAt}>
                            {post.createdAt}
                        </time>
                    </div>

                    <div className="post-card__space">
                        <img
                            className="post-card__icon post-card__icon--small"
                            src={namespaceIcon}
                            alt="Пространство"
                        />
                        <span className="post-card__space-name">{post.nameSpace}</span>
                    </div>
                </div>

                <button type="button" className="post-card__menu" aria-label="Действия с постом">
                    <img className="post-card__icon" src={buttonBarIcon} alt="Действия с постом" />
                </button>
            </header>

            <h2 className="post-card__title">{post.title}</h2>
            <p className="post-card__text">{post.content}</p>

            <div className="post-card__tags">
                <span className="post-card__type">
                    <img
                        className="post-card__icon post-card__icon--small"
                        src={bookIcon}
                        alt="Тип поста"
                    />
                    {POST_TYPE_LABELS[post.type]}
                </span>

                {tags.map((tag, index) => (
                    <span key={`${tag}-${index}`} className="post-card__tag">
                        #{tag}
                    </span>
                ))}
            </div>

            <footer className="post-card__actions">
                <div className="post-card__rating">
                    <button type="button" className="post-card__vote" aria-label="Голосовать за">
                        <img
                            className="post-card__icon post-card__icon--small"
                            src={arrowUpIcon}
                            alt="Голосовать за"
                        />
                    </button>
                    <span className="post-card__score">{post.likesCount}</span>
                    <button
                        type="button"
                        className="post-card__vote"
                        aria-label="Голосовать против"
                    >
                        <img
                            className="post-card__icon post-card__icon--small"
                            src={arrowDownIcon}
                            alt="Голосовать против"
                        />
                    </button>
                </div>

                <button
                    type="button"
                    className="post-card__comments"
                    aria-label={`Комментарии: ${post.commentsCount}`}
                >
                    <img
                        className="post-card__icon post-card__icon--small"
                        src={comments}
                        alt={`Комментарии: ${post.commentsCount}`}
                    />
                    <span>{post.commentsCount}</span>
                </button>

                <button type="button" className="post-card__share" aria-label="Поделиться">
                    <img
                        className="post-card__icon post-card__icon--small"
                        src={shareIcon}
                        alt="Поделиться"
                    />
                </button>
            </footer>
        </article>
    );
}
