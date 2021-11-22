import React from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

//Creating a Edit class and marked for export
export class Edit extends React.Component {

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

    //Life cycle hook
    componentDidMount(){
        console.log(this.props.match.params.id)

        axios.get('http://localhost:4000/api/movies' + this.props.match.params.id)
        .then(response => {
            this.setState({
                _id:response.data._id,
                Title:response.data.title,
                Year:response.data.year,
                Poster:response.data.poster
            })
        })
        .catch((error) =>{
            console.log(error)
        } );
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
            poster: this.state.Poster,
            _id: this.state._id
        }
        
        axios.put('http://localhost:4000/api/movies/' + this.state._id, newMovie)
        .then(res =>{
            console.log(res.data)
        })
        .catch();


        // axios.post('http://localhost:4000/api/movies', newMovie)
        // .then((res)=>{
        //     console.log(res);
        // })
        // .catch((err)=>{
        //     console.log(err);
        // });
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
                            value='Edit Movie'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}