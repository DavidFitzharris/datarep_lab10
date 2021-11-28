import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

//Creating a MovieItem class which will be used to manage the display of our individual movies 
export class MovieItem extends React.Component {

  constructor(){
    super();

    this.DeleteMovie = this.DeleteMovie.bind(this);
  }
  //Delete method for button
  DeleteMovie(e){
    //Prevents method being called on ever load of the page(avoid unwanted)
    e.preventDefault();

    console.log("Delete: " + this.props.movie._id);
    //using axios to delete from the server
    axios.delete("http://localhost:4000/api/movies/"+this.props.movie._id)
    .then(()=> {
      //Being passed from grandparent class read.js, reloads the page after deletion
      this.props.ReloadData();
    })
    .catch();
  }

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
          
          {/* Adding delete button with bootstrap */}

          <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
        </Card>

      </div>
    );
  }
}