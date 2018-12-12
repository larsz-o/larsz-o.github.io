
const technologies = (state = [], action) => {
    if (action.type === 'SET_TECH'){
        return action.payload;
    } 
    return state;
}

export default technologies; 