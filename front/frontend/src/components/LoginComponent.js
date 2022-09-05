import React from "react";

class LoginComponent extends React.Component{
    constructor(props) {
    super(props);
    this.state = {username: 'admin', password: '@007700'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this)
  }

  handleChange(event) {
        this.setState({username: event.target.value});
    }

  handleChangePassword(event){
        this.setState({password: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    let urlToken = 'http://localhost:8000/api-token-auth/'
    const requestOptions = {
        method: 'Post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({username: this.state.username, password: this.state.password})
    }
    fetch(urlToken, requestOptions)
        .then(response => response.json())
        .then(data => localStorage.setItem('token', data.token))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>
          Usuario:
          <input type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
          <label>
          Senha:
          <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
          </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default LoginComponent