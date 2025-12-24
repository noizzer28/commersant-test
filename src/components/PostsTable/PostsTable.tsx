import PostCard from '@/components/PostCard/PostCard';
import { Post } from '@/types';
import styles from './postsTable.module.css';

type PostsTableProps = {
  posts: Post[];
};

function PostsTable({ posts }: PostsTableProps) {
  return (
    <div className={styles.container}>
      <ul className={styles.table}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default PostsTable;
