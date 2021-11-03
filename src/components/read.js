import React from 'react';
import { Movies } from './movies';
import axios from 'axios';

//Creating a Read class and marked for export
export class Read extends React.Component {

    //creating and object to be used for movie properties
    state = {
        moviesAr: []

    };

    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
            .then((response) => {
                this.setState({ moviesAr: response.data.movies })
            })
            .catch(
                (error) => { 
                    console.log(error) 
                });
    }

    render() {
        return (
            <div>
                <h1>This is the Read page</h1>
                {/* Embedding our Movies class */}
                <Movies moviesAr={this.state.moviesAr}></Movies>
            </div>
        );
    }
}