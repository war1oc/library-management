import React from 'react';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our library!</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={this.state.username}
            onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={this.state.email}
            onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={this.state.password}
            onChange={this.onChange} />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </form>
    );
  }
}
