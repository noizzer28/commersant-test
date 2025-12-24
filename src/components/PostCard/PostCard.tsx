import { Post } from '@/types';

import styles from './postCard.module.css';
import { useNavigate } from 'react-router-dom';
import Reaction from '@/components/Reaction/Reaction';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${post.id}`);
  };
  return (
    <li className={styles.card} onClick={handleClick}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.body}>{post.body}</p>
      <Reaction likes={post.reactions.likes} dislikes={post.reactions.dislikes}></Reaction>
    </li>
  );
}
