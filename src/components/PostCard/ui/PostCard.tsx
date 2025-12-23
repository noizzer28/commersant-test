import { Post } from '@/types';

import styles from './postCard.module.css';
import { ThumbsDown, ThumbsUp } from 'phosphor-react';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <li className={styles.card}>
      <h1 className={styles.title}>{post.title}</h1>
      <h2 className={styles.body}>{post.body}</h2>
      <div className={styles.reactions}>
        <div className={styles.like}>
          <ThumbsUp size={20} /> {post.reactions.likes}
        </div>
        <div className={styles.dislike}>
          <ThumbsDown size={16} weight="fill" />
          {post.reactions.dislikes}
        </div>
      </div>
    </li>
  );
}
