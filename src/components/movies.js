import React from 'react';
import { MovieItem } from './movieItem';

//Creating a Movies class, and using mapping.
export class Movies extends React.Component{
    render(){
        //embedding our MovieItem and using mapping
        return this.props.moviesAr.map( (movie)=>{
            return <MovieItem movie={movie} ReloadData={this.props.ReloadData}></MovieItem>
        })
    }
}