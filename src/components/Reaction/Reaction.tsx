import styles from './reaction.module.css';
import { ThumbsDown, ThumbsUp } from 'phosphor-react';

type ReactionProps = {
  likes: number;
  dislikes: number;
};
function Reaction({ likes, dislikes }: ReactionProps) {
  return (
    <div className={styles.reactions}>
      <div className={styles.like}>
        <ThumbsUp size={20} /> {likes}
      </div>
      <div className={styles.dislike}>
        <ThumbsDown size={16} weight="fill" />
        {dislikes}
      </div>
    </div>
  );
}

export default Reaction;
