import * as React from 'react';
import { IPost } from '../Post/Post';

interface IPostAdminState {
  post?: IPost;
}

export default class PostDetail extends React.PureComponent<{}, IPostAdminState> {
  constructor(props: any) {
    super(props);

    this.state = {
      post: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Post Title
          <input type="text" name="title" value={this.state.post.title} onChange={this.handleChange}></input>
        </label>

        <label>
          Content
          <textarea name="content" value={this.state.post.content} onChange={this.handleChange}></textarea>
        </label>

        <button type="submit"></button>
      </form>
    );
  }
  private handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  private handleChange(event: React.ChangeEvent) {
    const target = event.target as HTMLInputElement;

    this.setState({
      [target.name]: target.value,
    });
  }

  private async updatePost() {
    
  }

}
