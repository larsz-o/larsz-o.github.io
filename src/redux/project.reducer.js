
const currentProject = (state = {}, action) => {
    if (action.type === 'SET_PROJECT_TO_VIEW'){
        return action.payload;
    } 
    return state;
}

export default currentProject; 