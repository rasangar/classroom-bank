import React, { Component } from 'react';
import { Link } from 'react-router';
import ProfileTile from '../components/ProfileTile';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      allowance: "",
      balance: "",
      role:"",
      teacher_id: null
    }
  }

   componentDidMount() {
    fetch(`/api/v1/profiles`, {
      credentials: "same-origin"
    })
    .then(response => {
      if (response.ok){
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw(error);
        }
    })
    .then(response => response.json())
    .then(body => {
      if(body[0][1] != null){
        this.setState({
          first_name: body[0][0].first_name,
          last_name: body[0][0].last_name,
          email: body[0][0].email,
          allowance: body[0][1].allowance,
          balance: body[0][1].balance,
          role: body[0][0].role
        });
      } else {
        this.setState({
          first_name: body[0][0].first_name,
          last_name: body[0][0].last_name,
          email: body[0][0].email,
          role: body[0][0].role,
          teacher_id: body[0][0].id
        })
      }

    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render(){

    return (
      <div>
        <ProfileTile
        first_name = {this.state.first_name}
        last_name = {this.state.last_name}
        email = {this.state.email}
        allowance = {this.state.allowance}
        balance = {this.state.balance}
        role = {this.state.role}
        />

      </div>
    )
  }
}

export default ProfileContainer;
