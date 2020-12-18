import React, { Component } from "react";
import { Link } from "react-router-dom";
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from "axios";

//Edit User component that will edit the clicked on user with passed id
class EditSneaker extends Component {
  constructor(props) {
    super(props);
    // store the related to the user information into the state
    // these should match the user object from the API
    this.state = {
      Model: "",
      Price: "",
      Colorway: "",
      Picture: "",
      Date: "",
    };

    //this binding is necessary to make `this` work in the callback
    //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // fetch the related user data
  componentDidMount() {
    // get the users API and include the id which is passed via the URL and accessed via props
    axios
      .get("/api/sneakers/" + this.props.match.params.id)
      .then((response) => {
        //on resonse set the state values to match empty state values set in the constructor
        this.setState({
          _id: response.data._id,
          Model: response.data.Model,
          Price: response.data.Price,
          Picture: response.data.Picture,
          Colorway: response.data.Colorway,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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

    // use axios to send a PUT request to the server which includes the updated state information
    axios
      .put("/api/sneakers", this.state)
      //on success go to home
      .then((res) => this.props.history.push("/"))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // remember that the name of the input fields should match the state
    return (
      <div className="is-fluid">
        {/*on form submit call handleSubmit()*/}
        <form onSubmit={this.handleSubmit}>
          <h2 className="title is-1 has-text-info">Edit Sneakers</h2>
          <hr />
          {/*main container for input fields*/}
          <div className="container">
            {/*FIRST COLUMN*/}
            <div className="columns">
              <div className="column is-half">
                <div className="field">
                  <label className="label"> Title: </label>
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
                  <label className="label"> First Name: </label>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="text"
                      name="Price"
                      value={this.state.Price}
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
                      name="Colorway"
                      value={this.state.Colorway}
                      onChange={this.handleChange}
                      id="form"
                    />
                  </div>
                </div>
              </div>
              {/*SECOND COLUMN*/}
              <div className="column">
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
                <div className="field">
                  <label className="label"> Date: </label>
                  <div className="control">
                    <input
                      className="input is-small"
                      type="date"
                      name="Date"
                      value={this.state.Date}
                      onChange={this.handleChange}
                      id="form"
                    />
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

export default EditSneaker;
