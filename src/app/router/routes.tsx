// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage/MainPage';
import PostPage from '@/pages/PostPage/PostPage';
import NotFound from '@/components/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/post/:postId',
    element: <PostPage />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);
