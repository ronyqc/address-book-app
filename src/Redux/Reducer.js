import { FAIL_REQUEST, GET_CONTACT_LIST, DELETE_CONTACT, MAKE_REQUEST, ADD_CONTACT, UPDATE_CONTACT, GET_CONTACT_OBJ } from "./ActionType"

const initialstate = {
    loading: true,
    contactList: [],
    contactObj: {},
    errMessage: ''
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errMessage: action.payload
            }
        case GET_CONTACT_LIST:
            return {
                loading: false,
                errMessage: '',
                contactList: action.payload,
                contactObj: {}
            }
        case DELETE_CONTACT: return {
            ...state,
            loading: false
        }
        case ADD_CONTACT:return{
            ...state,
            loading:false
        }   
        case UPDATE_CONTACT:return{
            ...state,
            loading:false
        }
        case GET_CONTACT_OBJ:return{
            ...state,
            loading:false,
            contactObj:action.payload
        }             
        default: return state
    }
}