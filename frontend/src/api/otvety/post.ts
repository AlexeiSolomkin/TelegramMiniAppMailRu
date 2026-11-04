import type { Post } from '@/types/post';
import { otvetRequest } from '@/api/otvety/client';
import { toPost } from '@/api/otvety/adapters';
import { ApiQuestionResponse } from '@/api/otvety/types';

export async function fetchPost(id: number): Promise<Post> {
    const url = `/topic/question/${id}`;
    const data: ApiQuestionResponse = await otvetRequest(url);
    return toPost(data.result);
}
