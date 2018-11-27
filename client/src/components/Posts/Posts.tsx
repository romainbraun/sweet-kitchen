import { json } from 'body-parser';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { IPost, Post } from '../Post/Post';

interface IPostsState {
  isLoading: boolean;
  recipes: IPost[];
}

export default class Posts extends React.PureComponent<{}, IPostsState> {
  constructor(props: object) {
    super(props);

    this.state = {
      isLoading: false,
      recipes: [],
    };
  }

  public componentDidMount() {
    this.getPosts();
  }

  public render() {
    return (
      <ul>
        {this.renderRecipes()}
      </ul>
    );
  }

  private renderRecipes() {
    return this.state.recipes.map((recipe) => {
      const link = `/post/${recipe._id}`;
      return (
        <li key={recipe._id}>
          <Link to={link}>
            <Post post={recipe}></Post>
          </Link>
        </li>
      );
    });
  }

  private mapPosts(response: []): IPost[] {
    return response.map((post: IPost) => {
      return {
        _id: post._id,
        content: post.content,
        createdAt: post.createdAt,
        keywords: post.keywords,
        title: post.title,
      };
    });
  }

  private async getPosts() {
    this.setState({
      isLoading: true,
    });

    const response = await (await fetch('/api/recipes')).json();

    this.setState({
      isLoading: false,
      recipes: this.mapPosts(response),
    });
  }
}
