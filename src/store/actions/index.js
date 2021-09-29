

export const moviesList = () => {
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1, name:'Movie 1'},
            {id:2, name:'Movie 2'},
            {id:3, name:'Movie 3'}
        ]
    }
}
