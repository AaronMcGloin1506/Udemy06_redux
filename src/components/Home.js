import React, { Component } from 'react';
import { render } from "react-dom";
import { connect } from 'react-redux'
import { moviesList } from '../store/actions'

class Home extends Component {

    getMoviesHandler(){
        this.props.dispatch(moviesList())
    }
    
    render(){
        console.log(this.props.movies)

        const { movies } = this.props

        return(
            <>
                {movies && movies.moviesList ?
                    movies.moviesList.map((item)=>(
                        <div key={item.id}>
                            name: {item.name}
                        </div>
                    ))
                :null}
                <button onClick={()=>this.getMoviesHandler()}>
                    Get Movies
                </button>
            </>
        )
    }
    
}

const MapStateToProps = (state) => {
    return { movies: state.movies }
}

export default connect(MapStateToProps)(Home);

