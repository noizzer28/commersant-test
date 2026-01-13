import PostsTable from '@/components/PostsTable/PostsTable';
import styles from './MainPage.module.css';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/app/api/getPosts';
import { PostsResponceDTO } from '@/types';
import Pagination from '@/components/Pagination/Pagination';
import { useState } from 'react';
import Sorting from '@/components/Sorting/Sorting';

const limit = 8;

function MainPage() {
  const [page, setPage] = useState(0);
  const [sortBy, setSortBy] = useState('title');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  //Для минимизации количества кода использую React Query
  const { data, isLoading, error } = useQuery<PostsResponceDTO>({
    queryKey: ['posts', page, sortBy, order],
    queryFn: () => getPosts(page * limit, limit, sortBy, order), //для более простого получения передаю page * на колво элементов на странице в качестве sikp
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const handlePageClick = (event: { selected: number }) => {
    setPage(event.selected);
  };

  return (
    <>
      <div className={styles.main}>
        <header className={styles.header}>Проба пера Cursor AI</header>
        <div className={styles.controls}>
          <Sorting
            sortBy={sortBy}
            order={order}
            onSortByChange={(value) => {
              setSortBy(value);
              setPage(0);
            }}
            onOrderChange={(value) => {
              setOrder(value);
              setPage(0);
            }}
          />
        </div>
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
