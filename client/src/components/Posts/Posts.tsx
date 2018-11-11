import { json } from 'body-parser';
import * as React from 'react';
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
      return (
        <li><Post title={recipe.title}></Post></li>
      );
    });
  }

  private mapPosts(response: []): IPost[] {
    return response.map((post: IPost) => {
      return {
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
