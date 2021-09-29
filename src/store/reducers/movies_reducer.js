const DEFAULT_STORE = {
    name:"Francis",
    id:1234
}


export default function(state=DEFAULT_STORE,action){
    switch(action.type){
        case 'MOVIES_LIST':
            return {...state, moviesList:action.payload}
        case 'MOVIE_DATA':
            return {...state,movieData:action.payload}
        default:
            return state
    }
}