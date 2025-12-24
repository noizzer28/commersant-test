// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/MainPage/MainPage';
import PostPage from '@/pages/PostPage/PostPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/:postId',
    element: <PostPage />,
  },
]);
