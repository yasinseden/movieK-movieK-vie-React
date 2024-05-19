import { ADD_MOVIE_TO_LIST, REMOVE_MOVIE_FROM_LIST } from './action';

const initialState = {
    myList: []
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                myList: [...state.myList, action.payload]
            };
        case REMOVE_MOVIE_FROM_LIST:
            return {
                ...state,
                myList: state.myList.filter((movie) => {
                    return movie.id != action.payload.id
                })
            }
        default:
            return state;
    }
};

export default movieReducer;
