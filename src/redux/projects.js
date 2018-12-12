import { combineReducers } from 'redux'; 

const projects = (state = [], action) => {
    if (action.type === 'SET_PROJECTS'){
        return action.payload;
    } 
    return state;
}
const currentProject = (state = {}, action) => {
    if (action.type === 'SET_PROJECT_TO_VIEW'){
        return action.payload;
    } 
    return state;
}
export default combineReducers({
    projects, 
    currentProject
}); 