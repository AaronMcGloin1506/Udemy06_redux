import { MOVIES_LIST, MOVIE_DATA, GET_USERS } from '../types';
import axios from 'axios';


export const getUsers = () => {
    const request = axios.get('https://jsonplaceholder.typicode.com/users')
                            .then(response => {
                                return response.data
                            });
    return{
        type: GET_USERS,
        payload: request
    }
}

export const moviesList = () => {
    return{
        type:MOVIES_LIST,
        payload:[
            {id:1, name:'Movie 1'},
            {id:2, name:'Movie 2'},
            {id:3, name:'Movie 3'}
        ]
    }
}

export const movieData = () => {
    return{
        type:MOVIE_DATA,
        payload: {
            id: 1,
            name: 'Movie 1',
            actors: ['Actor 1', 'Actor 2'],
            director: 'Director',
            year: 2000
        }
    }
}