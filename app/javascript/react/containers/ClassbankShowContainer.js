import React, { Component } from 'react';
import BankAccountListTile from '../components/BankAccountListTile';

class ClassbankShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      id: null,
      bankAccountsArray:[]
    }
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
        bankAccountsArray: body.combine,
      });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render(){
    let bankAccounts = this.state.bankAccountsArray.map(bankAccount => {
      return (
        <BankAccountListTile
          key={bankAccount[1].id}
          id={bankAccount[1].id}
          balance={bankAccount[1].balance}
          allowance={bankAccount[1].allowance}
          email={bankAccount[0].email}
          first_name={bankAccount[0].first_name}
          last_name={bankAccount[0].last_name}
        />
      )
    })
    return (
      <div>
        {bankAccounts}
      </div>
    )
  }
}

export default ClassbankShowContainer;
