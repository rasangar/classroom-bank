import React, { Component } from 'react';
import ClassbankListTile from '../components/ClassbankListTile'

class ClassbanksIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classbanksArray: [],
      teacher: {}
    }
  }

  // fetch the classbanks for this specific teacher
   componentDidMount() {
    fetch('/api/v1/classbanks', {
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
      console.log(".then")
      console.log(body)
      this.setState({
        classbanksArray: body.classbanks,
        teacher: body.classbanks[0].teacher
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render(){
    let classbanks = this.state.classbanksArray.map(classbank => {
      return (
        <div className="field" key = {classbank.id}>
          <ClassbankListTile
          id = {classbank.id}
          name = {classbank.name}
          />
        </div>
      )
    })
      let title = `${this.state.teacher.first_name}'s Classbanks`
      return(
        <div className="row small-10 medium-6">
          <h3 className="field">
            {title}
          </h3>
          <div>
            {classbanks}
          </div>
        </div>
      )
    }
  }

export default ClassbanksIndexContainer;
