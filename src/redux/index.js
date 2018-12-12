import {combineReducers} from 'redux'; 
import projects from './projects'; 
import technologies from './technologies'; 

const rootReducer = combineReducers({
    projects, 
    technologies
})

export default rootReducer; 