import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

//Creating a Create class and marked for export
export class Create extends React.Component {

    constructor() {
        super();

        //Binding the methods
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    //Used with our form
    //with using our title search
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: " + this.state.Title + " Year: " + this.state.Year + " Poster: " + this.state.Poster);
        
        //Ref with server.js post method
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }
        axios.post('http://localhost:4000/api/movies', newMovie)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        return (
            //creating a form to be used with our onSubmit method to search for movies
            <div className='App'>
                <form onSubmit={this.onSubmit}>

                    {/* Movie Input */}
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>

                    {/* Year Input */}
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>

                    <div className='form-group'>
                        <label>Movies Poster</label>
                        <textarea type='text'
                        className='form-control'
                        value={this.state.Poster}
                        onChange={this.onChangePoster}>

                        </textarea>
                    </div>
                    {/* Submit Button */}
                    <div className='form-group'>
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}