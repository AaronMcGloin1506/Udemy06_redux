const MovieList = {
    name:"MovieName",
    id:1234
}


export default function(state=MovieList,action){
    switch(action.type){
        case 'MOVIES_LIST':
            return action.payload
        default:
            return state
    }
}