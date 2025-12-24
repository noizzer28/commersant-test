import { PostsResponceDTO, Post } from '@/types';
import { APIURL } from '@/const';

export async function getPosts(skip: number, limit: number): Promise<PostsResponceDTO> {
  const response = await fetch(`${APIURL}?limit=${limit}&skip=${skip}`);

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
