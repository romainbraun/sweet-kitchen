import * as React from 'react';
import { match } from 'react-router';
import { IPost } from '../Post/Post';

interface IPostDetailProps {
  match: IParams;
}

interface IParams extends match {
  params: {
    post: string;
  };
}

interface IPostDetailState {
  isLoading: boolean;
  post: IPostDetail | null;
}

interface IPostDetail {
  _id: string;
  title: string;
  content: string;
  createdAt: Date;
}

export default class PostDetail extends React.PureComponent<IPostDetailProps, IPostDetailState> {
  constructor(props: IPostDetailProps) {
    super(props);

    this.state = {
      isLoading: false,
      post: null,
    };
  }
  public componentDidMount() {
    this.getPost();
  }

  public render() {
    if (this.state.post) {
      return (
        <div>
          <p>Hello</p>
          <h1>{this.state.post.title}</h1>
          <p>{this.state.post.content}</p>
        </div>
      );
    } else {
      return (
        <p>Loading...</p>
      );
    }
  }

  private async getPost() {
    const link = `/api/recipes/${this.props.match.params.post}`;

    this.setState({
      isLoading: true,
    });

    const response = await (await fetch(link)).json();

    this.setState({
      isLoading: false,

      post: response as IPostDetail,
    });
  }
}
