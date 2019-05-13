import React, { Component } from 'react';
import './App.css';
import EmployeeDetails from "./Components/Employee";



class App extends Component {
  constructor() {
    super();
    this.state = {
      displayEmpDetails: false,
      selectedId: null
    }
  }

  displaySelectedEmployeeDetails = (e) => {
    this.setState({ displayEmpDetails: true, selectedId: e.target.id })
  }

  render() {
    return (
      <React.Fragment>
        <EmployeeDetails handleClick={this.displaySelectedEmployeeDetails}
          selectedFields={["Id", "Name", "Department"]} valueType1="primary"
          valueType2="both" isPrimary={true}
        />
        <br /><br />
        {(this.state.displayEmpDetails) ?
          <EmployeeDetails
            selectedID={this.state.selectedId}
            valueType1="secondary" isPrimary={false}
            valueType2="both" selectedFields={["Id", "Subject", "Classes", "Salary"]} /> : ""}
      </React.Fragment>

    );
  }

}

export default App;
