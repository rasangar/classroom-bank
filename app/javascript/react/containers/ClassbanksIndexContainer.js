import React, { Component } from 'react';
import ClassbankListTile from '../components/ClassbankListTile'
import TextField from '../components/TextField';

class ClassbanksIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classbanksArray: [],
      teacher: {},
      name:'',
      allowance_freq: '',
      interest_rate:''
    }
    this.handleClassbankFormSubmit = this.handleClassbankFormSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.handleNameUpdate = this.handleNameUpdate.bind(this)
    this.handleAllowanceFreqUpdate = this.handleAllowanceFreqUpdate.bind(this)
    this.handleInterestRateUpdate = this.handleInterestRateUpdate.bind(this)
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

    clearForm(event){
      event.preventDefault();
      this.setState({
        name:'',
        allowance_freq: '',
        interest_rate:''
      })
    }

    handleClassbankFormSubmit(event){
      event.preventDefault();
      let classbankData = new FormData();
      classbankData.append("name", this.state.name);
      classbankData.append("allowance_freq", this.state.allowance_freq);
      classbankData.append("interest_rate", this.state.interest_rate);
      classbankData.append("teacher_id", this.state.teacher.id);
      this.clearForm(event);
      this.submitClassbank(classbankData);
    }

    submitClassbank(data){
      fetch(`/api/v1/classbanks`,{
        method: 'POST',
        credentials: 'same-origin',
        body: data
      }).then(response => {response
        if (response.ok) {
        return response;
      } else {
        throw(response);
      }
      }).then(response => {
        return response.json();
      }).then(parsedBody => {
      this.setState({
        notices: {notice: "Classbank added successfully!"},
        classbanksArray: parsedBody.classbanks
      });
      })
      .catch(error => {
        console.error(`Error in fetch`);
        return error.json();
      })
    }

    handleNameUpdate(event){
      this.setState({
        name: event.target.value
      })
    }
    handleAllowanceFreqUpdate(event){
      this.setState({
        allowance_freq: event.target.value
      })
    }
    handleInterestRateUpdate(event){
      this.setState({
        interest_rate: event.target.value
      })
    }

  render(){
    let classbanks = this.state.classbanksArray.map(classbank => {
      return (
        <div className="field text-center" key = {classbank.id}>
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
          <h3 className="field text-center">
            {title}
          </h3>
          <div>
            {classbanks}
          </div>

          <div className="column medium-12 translucent-form-overlay">
            <h3 className="field text-center">Add a New Classbank</h3>
            <form className='form' id='classbank-form' onSubmit={this.handleClassbankFormSubmit}>
              <TextField
                label='Classbank Name'
                name='name'
                handlerFunction={this.handleNameUpdate}
                value={this.state.name}
              />
              <TextField
                label='Interest Rate'
                name='interest_rate'
                handlerFunction={this.handleInterestRateUpdate}
                value={this.state.interest_rate}
              />
              <TextField
                label='Allowance Frequency'
                name='allowance_freq'
                handlerFunction={this.handleAllowanceFreqUpdate}
                value={this.state.allowance_freq}
              />

              <input type="submit" className="submit-button" value="Add Classbank" />
            </form>
          </div>
        </div>
      )
    }
  }

export default ClassbanksIndexContainer;
