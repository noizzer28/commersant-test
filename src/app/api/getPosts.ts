import { PostsResponceDTO, Post } from '@/types';
import { APIURL } from '@/const';

export async function getPosts(
  skip: number,
  limit: number,
  sortBy?: string,
  order?: 'asc' | 'desc',
): Promise<PostsResponceDTO> {
  const params = new URLSearchParams({
    limit: String(limit),
    skip: String(skip),
  });

  if (sortBy) params.append('sortBy', sortBy);
  if (order) params.append('order', order);

  const response = await fetch(`${APIURL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}
export async function getPost(id: string): Promise<Post> {
  const response = await fetch(`${APIURL}/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}
