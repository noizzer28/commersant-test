import { useNavigate, useParams } from 'react-router-dom';
import img from '../../../public/images/tree.png';
import styles from './postPage.module.css';
import { useQuery } from '@tanstack/react-query';
import { Post } from '@/types';
import { getPost } from '@/app/api/getPosts';
import Reaction from '@/components/Reaction/Reaction';
import { ArrowUDownLeft, Eye } from 'phosphor-react';

function PostPage() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery<Post>({
    queryKey: ['post', postId],
    queryFn: () => getPost(postId!), //пришлось прибегнуть к accertion type, не смогла обойти вероятность undefined
  });

  // Здесь немного прыгает ui потому что нет нормальной обработки loading, в реальном проекте можно было посильнее заморочиться
  if (error) return <div>Error</div>;
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleClick}>
        <ArrowUDownLeft size={32} />
      </button>
      <div className={styles.card}>
        {isLoading || !data ? (
          <div>Загрузка........</div>
        ) : (
          <>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.body}>{data.body}</p>
            <div className={styles.footer}>
              <Reaction likes={data.reactions.likes} dislikes={data.reactions.dislikes}></Reaction>
              <div className={styles.views}>
                <Eye size={20} /> {data.views}
              </div>
            </div>
          </>
        )}
      </div>

      <img className={styles.img} src={img} />
    </div>
  );
}

export default PostPage;
