import React, { Component } from "react";
import { Link } from "react-router-dom";

//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install

import axios from "axios";

//Create User component that will create a new user card
class CreateSneaker extends Component {
  constructor(props) {
    super(props);
    // the form fields are stored in a state
    this.state = {
      Model: "",
      Colorway: "",
      Price: "",
      Picture: "",
      Date: "",
    };

    //this binding is necessary to make `this` work in the callback
    //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //once the input boxes are changed, update the state to match the value
  handleChange(event) {
    //name of the input boxes must match the property names in the state
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    //preventDefault() is called on the event when it occurs to prevent a browser reload/refresh
    event.preventDefault();

    //use axios to send a POST request to the server which includes the state information for the new user to be created
    axios
      .post("/api/sneakers", this.state)
      //on success go to home
      .then((res) => this.props.history.push("/"))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="is-fluid">
        {/*on form submit call handleSubmit()*/}
        <form onSubmit={this.handleSubmit}>
          <h2 className="title is-1 has-text-info">Add a New Sneaker</h2>
          <hr />
          {/*main container for input fields*/}
          <div className="container">
            {/*FIRST COLUMN*/}
            <div className="columns">
              <div className="column is-half">
                <div className="field">
                  <label className="label"> Model: </label>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      name="Model"
                      value={this.state.Model}
                      onChange={this.handleChange}
                      id="form"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label"> Colorway: </label>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      name="Colorway"
                      value={this.state.Colorway}
                      onChange={this.handleChange}
                      id="form"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label"> Picture: </label>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      name="Picture"
                      value={this.state.Picture}
                      onChange={this.handleChange}
                      id="form"
                    />
                  </div>
                </div>
              </div>
              {/*SECOND COLUMN*/}
              <div className="column">
                <div className="field">
                  <label className="label"> Price: </label>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="Number"
                      name="Price"
                      value={this.state.Price}
                      onChange={this.handleChange}
                      id="form"
                    />
                  </div>
                  <div className="field">
                    <label className="label"> Release Date: </label>
                    <div className="control">
                      <input
                        className="input is-small"
                        type="Date"
                        name="Date"
                        value={this.state.Date}
                        onChange={this.handleChange}
                        id="form"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*SUBMIT BUTTON*/}
            <input className="button is-info" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateSneaker;
