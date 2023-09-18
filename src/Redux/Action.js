import axios from "axios"
import Constants from "../Utilities/Constants";
import { toast } from "react-toastify"
import { FAIL_REQUEST, GET_CONTACT_LIST, DELETE_CONTACT, MAKE_REQUEST, ADD_CONTACT, UPDATE_CONTACT, GET_CONTACT_OBJ} from "./ActionType"

export const makeRequest = () => {
    return {
        type: MAKE_REQUEST
    }
}
export const failRequest = (err) => {
    return {
        type: FAIL_REQUEST,
        payload: err
    }
}
export const geContactList = (data) => {
    return {
        type: GET_CONTACT_LIST,
        payload: data
    }
}

export const deleteContact = () => {
    return {
        type: DELETE_CONTACT
    }
}

export const addContact = () => {
    return {
        type: ADD_CONTACT
    }
}

export const updateContact = () => {
    return {
        type: UPDATE_CONTACT
    }
}

export const getContactObj=(data)=>{
    return{
        type:GET_CONTACT_OBJ,
        payload:data
    }
}

export const FetchContactList = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        //setTimeout(() => {
        axios.get(Constants.API_URL_GET_ALL_CONTACTS).then(res => {
            const contactList = res.data;
            console.log('Primera LLamada.');
            dispatch(geContactList(contactList));
            console.log('Segunda LLamada.');
        }).catch(err => {
            dispatch(failRequest(err.message))
            console.log(err.message);
        })
        // }, 2000);

    }
}

export const RemoveContact = (code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        console.log('Eliminando contacto con código:', code);
        //setTimeout(() => {
        axios
            .delete(Constants.API_URL_DELETE_CONTACT_BY_ID + '/' + code)
            .then(() => {
                dispatch(FetchContactList());
            }).catch(err => {
                dispatch(failRequest(err.message));
            })
        // }, 2000);

    }
}

export const FunctionAddContact = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        //setTimeout(() => {
        axios.post(Constants.API_URL_CREATE_CONTACT, data).then(res => {
            dispatch(FetchContactList());
            toast.success('Contact Added successfully.')
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
        // }, 2000);

    }
}


export const FunctionUpdateContact=(data,code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.put(Constants.API_URL_UPDATE_CONTACT + '/' + code,data).then(res=>{
            dispatch(FetchContactList());
            toast.success('Contact Updated successfully.')
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}

export const FetchContactObj=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.get(Constants.API_URL_GET_CONTACT_BY_ID + '/' + code).then(res=>{
            const contactList=res.data;
            dispatch(getContactObj(contactList));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
    }
}