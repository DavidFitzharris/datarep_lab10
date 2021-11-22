import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

//Creating a MovieItem class which will be used to manage the display of our individual movies 
export class MovieItem extends React.Component {
  render() {
    return (
      <div>
        {/* <h4>{this.props.movie.Title}</h4>
                <p>{this.props.movie.Year}</p>
                <img src={this.props.movie.Poster} width="200" height="200"></img>
            */}

        {/* Using bootstrap card for a better UI */}
        <Card>
          <Card.Header>{this.props.movie.title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img src={this.props.movie.poster} width="200" height="200"></img>

              <footer className="blockquote-footer">
                <p>{this.props.movie.year}</p>
              </footer>
            </blockquote>
          </Card.Body>
          {/* Edit 'button' link displayed under movies */}
          <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
        </Card>

      </div>
    );
  }
}