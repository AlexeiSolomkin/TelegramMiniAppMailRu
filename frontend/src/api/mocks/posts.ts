import type { Post } from '@/types/post';

export const posts: Post[] = [
    {
        id: 1,
        title: 'What is the best way to learn TypeScript?',
        type: 'question',
        content: 'I am new to TypeScript and I want to learn it. What are the best resources and practices to get started?',
        author: {
            name: 'John Doe',
        },
        tags: ['typescript', 'learning'],
        nameSpace: 'default',
        createdAt: '2026-10-05T12:30:00Z',
        likesCount: 100,
        commentsCount: 55
    },
    {
        id: 2,
        title: 'How do I use React hooks?',
        type: 'question',
        content: 'I want to learn how to use React hooks. Can someone provide a simple example?',
        author: {
            name: 'John Doe',
        },
        tags: ['typescript', 'learning', 'learning', 'learning', 'learning'],
        nameSpace: 'default',
        createdAt: '2026-10-05T12:35:00Z',
        likesCount: 10,
        commentsCount: 5
    },
    {
        id: 3,
        title: 'How do I use React hooks?',
        type: 'post',
        content: 'BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlavBlaBlaBlaBla',
        author: {
            name: 'John Doe',
        },
        nameSpace: 'default',
        createdAt: '2026-10-05T12:50:00Z',
        likesCount: 0,
        commentsCount: 0
    }
]