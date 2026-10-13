export interface ApiDocNode {
    type: string;
    text?: string;
    content?: ApiDocNode[];
}

export interface ApiAuthor {
    id: number;
    nick: string;
    username: string;
    avatar: string;
}

export interface ApiSpace {
    id: number;
    title: string;
    icon: string;
}

export interface ApiTag {
    id: number;
    name: string;
    title: string;
}

export interface ApiReaction {
    Count: number;
    Type: number;
    Mine: boolean;
}

export interface ApiTopic {
    id: number;
    title: string;
    content: ApiDocNode;
    author: ApiAuthor;
    replies_count: number;
    reaction_counter: ApiReaction[] | null;
    tags: ApiTag[];
    spaces: ApiSpace[];
    topic_type: number;
    created_at: string;
}

export interface ApiFeedResponse {
    result: {
        feed: ApiTopic[];
        params: { pos: number };
    };
}
