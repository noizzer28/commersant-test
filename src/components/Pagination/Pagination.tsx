import ReactPaginate from 'react-paginate';
import styles from './pagination.module.css';

type PaginationProps = {
  total: number;
  limit: number;
  onChange: (event: { selected: number }) => void;
  currentPage: number;
};

function Pagination({ total, limit, onChange, currentPage }: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={Math.ceil(total / limit)}
      onPageChange={onChange}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      breakLabel="..."
      className={styles.pagination}
      pageClassName={styles.pageItem}
      pageLinkClassName={styles.pageLink}
      previousLinkClassName={styles.pageLink}
      nextClassName={styles.pageItem}
      nextLinkClassName={styles.pageLink}
      breakLinkClassName={styles.pageLink}
      activeClassName={styles.active}
      disabledClassName={styles.disabled}
      nextLabel="Далее"
      previousLabel="Назад"
      forcePage={currentPage}
    />
  );
}

export default Pagination;
