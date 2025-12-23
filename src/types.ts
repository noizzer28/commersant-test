export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  userId: number;
  views: 305;
  reactions: Reactions;
};

type Reactions = {
  likes: number;
  dislikes: number;
};

export type PartialPost = Partial<Post>;

export type PostsResponceDTO = {
  limit: number;
  posts: Post[];
  skip: number;
  total: 250;
};
