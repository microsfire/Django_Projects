import React from "react";

class LoginComponent extends React.Component{
    constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
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
    alert('Um nome foi enviado: ' + this.state.username + ' password: ' + this.state.password);
    event.preventDefault();
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