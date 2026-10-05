export interface Author {
    name: string;
    avatar?: string;
};

export interface Post {
    id: number;
    title: string;
    type: 'question' | 'answer' | 'post';
    content: string;
    author: Author;
    tags?: string[];
    nameSpace: string;
    createdAt: string;
    likesCount: number;
    commentsCount: number;
};
