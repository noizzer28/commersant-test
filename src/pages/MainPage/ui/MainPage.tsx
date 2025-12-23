import PostsTable from '@/entities/PostsTable/PostsTable';
import styles from './MainPage.module.css';

import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/pages/MainPage/api/getPosts';
import { PostsResponceDTO } from '@/types';

function MainPage() {

  //Для минимизации количества кода использую React Query
  const { data, isLoading, error } = useQuery<PostsResponceDTO>({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return <div className={styles.main}>{data && <PostsTable posts={data.posts}></PostsTable>}</div>;
}
export default MainPage;
