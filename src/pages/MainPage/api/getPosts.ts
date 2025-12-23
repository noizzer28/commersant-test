import { PostsResponceDTO } from '@/types';

export async function getPosts(): Promise<PostsResponceDTO> {
  const response = await fetch('https://dummyjson.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}
