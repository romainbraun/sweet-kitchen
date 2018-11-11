import * as React from 'react';

export interface IPost {
  title: string;
}

export const Post: React.SFC<IPost> = ({title}) => {
  return (
    <h2>{title}</h2>
  );
};
