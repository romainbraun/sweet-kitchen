import * as React from 'react';

export interface IPost {
  _id?: string;
  title: string;
  content: string;
  createdAt: Date;
  keywords: string;
}

interface IPostProps {
  post: IPost;
}

export const Post: React.SFC<IPostProps> = ({post}) => {
  return (
    <h2>{post.title}</h2>
  );
};
