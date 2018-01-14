import React, {Component} from 'react'
import { postUser } from '../actions'
import { connect } from 'react-redux'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      email: '',
      fullname: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentWillMount () {

  }

  submit (e) {
    e.preventDefault()
    this.props.register(this.state)
  }

  handleOnChange (e) {
    let newUser = this.state
    newUser[e.target.name] = e.target.value
    this.setState({
      newUser
    })
  }

  render () {
    return (
      <div className="container">
        <h1>INI HALAMAN REGISTER</h1>
        <form>
          <fieldset>
            <div className="form-group">
              <label htmlFor="exampleInputUsername">Username</label>
              <input name="username" type="username" value={this.state.username} onChange={this.handleOnChange} className="form-control" id="exampleInputUsername" aria-describedby="usernameHelp" placeholder="Enter Username"/>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input name="password" type="password" value={this.state.password} onChange={this.handleOnChange} className="form-control" id="exampleInputPassword" placeholder="Password"/>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input name="email" type="email" value={this.state.email} onChange={this.handleOnChange} className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputFullname">Fullname</label>
              <input name="fullname" type="fullname" value={this.state.fullname} onChange={this.handleOnChange} className="form-control" id="exampleInputFullname" aria-describedby="Fullname" placeholder="Enter Fullname"/>
            </div>

            <button type="submit" onClick={this.submit} className="btn btn-primary">Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (newUser) => dispatch(postUser(newUser))
  }
}

export default connect (null,mapDispatchToProps)(Register)
