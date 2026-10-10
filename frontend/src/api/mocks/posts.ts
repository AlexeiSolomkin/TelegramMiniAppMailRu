import type { Post } from '@/types/post';

export const posts: Post[] = [
    {
        id: 1,
        title: 'Что за ИИ, давай поговорим',
        type: 'question',
        content:
            'ИИ стал общей средой обитания в новом мире, поэтому мышление и исполнение, как навыки, больше не держатся на ролях и специальностях.\n\n Каждый день появляются новые инструменты, которые меняют подход к работе и творчеству.',
        author: {
            name: 'john_doe',
        },
        tags: ['мем', 'друг', 'скейт'],
        nameSpace: 'Инфорационный технологии',
        createdAt: '2026-10-05T12:30:00Z',
        likesCount: 100,
        commentsCount: 55,
    },
    {
        id: 2,
        title: 'Тренды UI дизайна в 2026 году',
        type: 'question',
        content:
            'Минимализм снова в моде, но теперь с оттенком неоморфизма. Мягкие тени и градиенты создают ощущение глубины без перегруженности.',
        author: {
            name: 'alice_smith',
        },
        tags: ['typescript', 'learning', 'learning', 'learning', 'learning'],
        nameSpace: 'Дизайн и UX',
        createdAt: '2026-10-05T12:35:00Z',
        likesCount: 10,
        commentsCount: 5,
    },
    {
        id: 3,
        title: 'Бла бла бла',
        type: 'post',
        content:
            'BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlavBlaBlaBlaBla',
        author: {
            name: 'john_doe',
        },
        nameSpace: 'блабла',
        createdAt: '2026-10-05T12:50:00Z',
        likesCount: 0,
        commentsCount: 0,
    },
    {
        id: 4,
        title: '123123123',
        type: 'answer',
        content: '123123123123123123123123123',
        author: {
            name: 'designer',
        },
        nameSpace: '123123',
        createdAt: '2026-10-07T12:50:00Z',
        likesCount: 0,
        commentsCount: 0,
    },
];
