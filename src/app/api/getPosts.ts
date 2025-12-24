import { PostsResponceDTO } from '@/types';
import { APIURL } from '@/const';

export async function getPosts(skip: string, limit: number): Promise<PostsResponceDTO> {
  const response = await fetch(`${APIURL}?limit=${limit}&skip=${skip}`);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}
