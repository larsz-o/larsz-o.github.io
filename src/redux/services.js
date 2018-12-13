import { combineReducers } from 'redux'; 

const services = (state = '', action) => {
    if (action.type === 'SET_SERVICE_TO_VIEW'){
        return action.payload;
    } 
    return state;
}
export default combineReducers({
    services, 
}); 