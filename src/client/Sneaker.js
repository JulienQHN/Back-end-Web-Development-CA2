import React from "react";
import ReactDOM from "react-dom";
//import the Link component to use for linking prop information
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
// define one single user card component
class Sneaker extends React.Component {
  render() {
    return (
      <div className="column is-3" style={{ padding: "20px" }}>
        <div className="card" style={{ borderRadius: "20px" }}>
          <div className="card-image">
            <figure className="image is-7by5">
              <img alt="Profile" src={this.props.Picture} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4 has-text-info">{this.props.Model}</p>
                <hr />
                <p className="subtitle is-size-4">{this.props.Colorway}</p>
                <p className="subtitle is-size-6">{this.props.Price} €</p>
                <p className="subtitle is-size-6">{this.props.Date}</p>
                {/*delete the prop with requested id from the function invoked in the parent component*/}
                <Link to={`/edit-sneaker/${this.props.id}`}>
                  <button className="button is-info" type="button">
                    Edit
                  </button>
                </Link>
                <button
                  id="Danger"
                  className="button is-danger"
                  type="button"
                  onClick={() => {
                    this.props.handleDelete(this.props.id);
                  }}
                >
                  Delete
                </button>

                {/*load the EditSneaker component via React Router and send the id over to the EditSneaker component*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sneaker;
