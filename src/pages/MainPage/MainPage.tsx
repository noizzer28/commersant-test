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
    queryKey: ['posts', page],
    queryFn: () => getPosts(page * limit, limit), //для более простого получения передаю page * на колво элементов на странице в качестве sikp
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected);
  };

  return (
    <>
      <div className={styles.main}>
        <header className={styles.header}>С наступающим Новым Годом!</header>
        {data && (
          <>
            <PostsTable posts={data.posts}></PostsTable>
            <footer className={styles.footer}>
              <Pagination
                limit={limit}
                onChange={handlePageClick}
                total={data.total}
                currentPage={page}
              ></Pagination>
            </footer>
          </>
        )}
      </div>
    </>
  );
}
export default MainPage;
