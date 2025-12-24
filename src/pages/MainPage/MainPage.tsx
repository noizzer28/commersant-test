import PostsTable from '@/components/PostsTable/PostsTable';
import styles from './MainPage.module.css';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/app/api/getPosts';
import { PostsResponceDTO } from '@/types';
import Pagination from '@/components/Pagination/Pagination';
import { useState } from 'react';

const limit = 10;

function MainPage() {
  const [page, setPage] = useState(0);
  //Для минимизации количества кода использую React Query
  const { data, isLoading, error } = useQuery<PostsResponceDTO>({
    queryKey: ['posts', page, limit],
    queryFn: () => getPosts(`${page}0`, limit),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected);
  };

  return (
    <>
      <header className={styles.header}>Welcome to Viktoria`s posts page</header>
      <div className={styles.main}>
        {data && (
          <>
            <PostsTable posts={data.posts}></PostsTable>{' '}
            <Pagination limit={limit} onChange={handlePageClick} total={data.total}></Pagination>
          </>
        )}
      </div>
    </>
  );
}
export default MainPage;
