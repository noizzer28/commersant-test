import PostCard from '@/entities/PostCard/ui/PostCard';
import { Post } from '@/types';
import styles from './postsTable.module.css';

type PostsTableProps = {
  posts: Post[];
};

function PostsTable({ posts }: PostsTableProps) {
  return (
    <div className={styles.container}>
      <ul>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default PostsTable;
