import styles from './Sorting.module.css';

type SortingProps = {
  sortBy: string;
  order: 'asc' | 'desc';
  onSortByChange: (value: string) => void;
  onOrderChange: (value: 'asc' | 'desc') => void;
};

const sortFields = [
  { value: 'title', label: 'Названию' },
  { value: 'views', label: 'Просмотрам' },
  { value: 'id', label: 'ID' },
];

const orderOptions = [
  { value: 'asc', label: 'По возрастанию' },
  { value: 'desc', label: 'По убыванию' },
];

function Sorting({ sortBy, order, onSortByChange, onOrderChange }: SortingProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.control}>
        <label className={styles.label} htmlFor="sortBy">
          Сортировать по
        </label>
        <select
          id="sortBy"
          className={styles.select}
          value={sortBy}
          onChange={(event) => onSortByChange(event.target.value)}
        >
          {sortFields.map((field) => (
            <option key={field.value} value={field.value}>
              {field.label}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.control}>
        <label className={styles.label} htmlFor="order">
          Порядок
        </label>
        <select
          id="order"
          className={styles.select}
          value={order}
          onChange={(event) => onOrderChange(event.target.value as 'asc' | 'desc')}
        >
          {orderOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Sorting;
