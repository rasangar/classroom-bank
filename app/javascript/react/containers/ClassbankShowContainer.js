import React, { Component } from 'react';
import BankAccountListTile from '../components/BankAccountListTile';
import TextField from '../components/TextField';

class ClassbankShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      id: null,
      bankAccountsArray:[],
      first_name:'',
      last_name:'',
      email:'',
      balance:'',
      allowance:'',
      errors:{}
    }
    this.handleBankAccountFormSubmit = this.handleBankAccountFormSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.handleFirstNameUpdate = this.handleFirstNameUpdate.bind(this)
    this.handleLastNameUpdate = this.handleLastNameUpdate.bind(this)
    this.handleEmailUpdate = this.handleEmailUpdate.bind(this)
    this.handleBalanceUpdate = this.handleBalanceUpdate.bind(this)
    this.handleAllowanceUpdate = this.handleAllowanceUpdate.bind(this)
    this.submitBankAccount = this.submitBankAccount.bind(this)
  }

  //fetch the classbanks for this specific teacher
   componentDidMount() {
    fetch(`/api/v1/classbanks/${this.props.params.classbank_id}`, {
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
      this.setState({
        name: body.classbank.name,
        id: this.props.params.classbank_id,
        bankAccountsArray: body.combine
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

    clearForm(event){
      event.preventDefault();
      this.setState({
        first_name:'',
        last_name:'',
        email:'',
        balance:'',
        allowance:''
      })
    }
    handleBankAccountFormSubmit(event){

      event.preventDefault();

      // if (this.formIsValid()) {
        let bankAccountData = new FormData();
        bankAccountData.append("first_name", this.state.first_name);
        bankAccountData.append("last_name", this.state.last_name);
        bankAccountData.append("email", this.state.email);
        bankAccountData.append("balance", this.state.balance);
        bankAccountData.append("allowance", this.state.allowance);
        bankAccountData.append("classbank_id", this.state.id)
        this.clearForm(event);
        this.submitBankAccount(bankAccountData);
      // }

    }

    submitBankAccount(data){
      console.log('before the fetch')
      fetch(`/api/v1/classbanks/${this.state.id}/account_setups`,{
        method: 'POST',
        credentials: 'same-origin',
        body: data
      }).then(response => {response
        console.log('first then')
        console.log(response)
        if (response.ok) {
        return response;
      } else {
        throw(response);
      }
      }).then(response => {
        console.log('second then')
        console.log(response)
        return response.json();
      }).then(parsedBody => {
      this.setState({notices: {notice: "Student added successfully!"}});
      })
      .catch(error => {
        console.error(`Error in fetch`);
        return error.json();
      }).then(errorData => {
        if (errorData.errorList) {
           this.setState({ errors: Object.assign(this.state.errors, errorData.errorList) });
         }
     });
    }

    handleFirstNameUpdate(event){
      this.setState({
        first_name: event.target.value
      })
    }
    handleLastNameUpdate(event){
      this.setState({
        last_name: event.target.value
      })
    }
    handleEmailUpdate(event){
      this.setState({
        email: event.target.value
      })
    }
    handleBalanceUpdate(event){
      this.setState({
        balance: event.target.value
      })
    }
    handleAllowanceUpdate(event){
      this.setState({
        allowance: event.target.value
      })
    }
  render(){
    let bankAccounts = this.state.bankAccountsArray.map(bankAccount => {
      return (
        <div className="bank-account-wrapper" key={bankAccount[1].id}>
          <BankAccountListTile
            id={bankAccount[1].id}
            balance={bankAccount[1].balance}
            allowance={bankAccount[1].allowance}
            email={bankAccount[0].email}
            first_name={bankAccount[0].first_name}
            last_name={bankAccount[0].last_name}
          />
        </div>
      )
    })
    return (
      <div className="">
        <div className="row medium-10 ">
          <h3 className="column medium-12 field align-center">
            {this.state.name}
          </h3>
          <div className="row medium-10 ">
            <div className="column medium-6 ">
            {bankAccounts}
            </div>
            <div className="column medium-6 translucent-form-overlay">
              <h3 className="field">`Add a new Bank Account`</h3>
              <form className='form' id='bank-account-form' onSubmit={this.handleBankAccountFormSubmit}>
                <TextField
                  label='First Name'
                  name='first_name'
                  handlerFunction={this.handleFirstNameUpdate}
                  value={this.state.first_name}
                />
                <TextField
                  label='Last Name'
                  name='last_name'
                  handlerFunction={this.handleLastNameUpdate}
                  value={this.state.last_name}
                />
                <TextField
                  label='Email'
                  name='email'
                  handlerFunction={this.handleEmailUpdate}
                  value={this.state.email}
                />
                <TextField
                  label='Initial Balance'
                  name='balance'
                  handlerFunction={this.handleBalanceUpdate}
                  value={this.state.balance}
                />
                <TextField
                  label='Allowance'
                  name='allowance'
                  handlerFunction={this.handleAllowanceUpdate}
                  value={this.state.allowance}
                />

                <input type="submit" className="submit-button" value="Add Bank Account" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ClassbankShowContainer;
