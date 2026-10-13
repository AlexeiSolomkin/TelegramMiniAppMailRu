import type { ApiDocNode, ApiTopic } from '@/api/otvety/types';
import type { Post } from '@/types/post';

// пример json поста из апишки
//{
//  "id": 270587294,
//  "title": "Заголовок поста",
//  "content": { "type": "doc", "content": [ { "type": "paragraph", "content": [ { "type": "text", "text": "..." } ] } ] },
//  "author": { "id": 355657453, "nick": "", "username": "clam_599", "avatar": "https://filin.mail.ru/pic?...", "level": 2 },
//  "replies_count": 4,
//  "reaction_counter": [ { "Count": 1, "Type": 1, "Mine": false } ],
//  "tags": [ { "id": 1883, "name": "other", "title": "другое" } ],
//  "spaces": [ { "id": 1, "title": "А сейчас что-то совсем другое", "icon": "https://otvet-static.cdn-vk.net/.../other.png" } ],
//  "topic_type": 2,
//  "created_at": "2026-10-10T16:01:21.312366+03:00",
//  "poll": null
//}

// Блочные узлы
const BLOCK_SEPARATORS: Partial<Record<string, string>> = {
    doc: '\n\n',
    bulletList: '\n',
    orderedList: '\n',
};

// Функция для преобразования ApiDocNode из апишки в строку
function docToText(node: ApiDocNode): string {
    if (node.text) {
        return node.text;
    }

    if (node.type === 'hardBreak') {
        return '\n';
    }

    const parts = (node.content ?? []).map(docToText);
    const separator = BLOCK_SEPARATORS[node.type];

    if (separator === undefined) {
        return parts.join('');
    }

    return parts.filter((part) => part.trim() !== '').join(separator);
}

export function toPost(topic: ApiTopic): Post {
    return {
        id: topic.id,
        title: topic.title,
        type: 'post', // TODO: в ответе числа - надо спросить у Мартина
        content: docToText(topic.content),
        author: {
            name: topic.author.username,
            // добавить добавку https://otvet.mail.ru если путь с / начинается
            avatar: topic.author.avatar,
        },
        tags: topic.tags.map((tag) => tag.title),
        nameSpace: topic.spaces[0]?.title || '',
        createdAt: topic.created_at,
        likesCount: topic.reaction_counter?.find((r) => r.Type === 1)?.Count || 0,
        commentsCount: topic.replies_count,
    };
}
