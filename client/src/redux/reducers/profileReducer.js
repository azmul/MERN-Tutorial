import {GET_PROFILES, GET_ERRORS, PROFILE_LOADING,PROFILE_NOT_FOUND, GET_PROFILE,CLEAR_CURRENT_PROFILE} from '../actions/types';

const initialState = {
    profile: null,
    profiles: null,
    loading: false
}

export default function (state = initialState, action){
    switch(action.type){
        case PROFILE_LOADING:
             return{
                 ...state,
                 loading: true,
                 profile: null
             }
        case GET_PROFILE:
             return{
                 ...state,
                 profile: action.payload,
                 loading: false
             }
        case CLEAR_CURRENT_PROFILE:
             return{
                 ...state,
                 profile: null
             }
        default:
              return state;
    }
}

