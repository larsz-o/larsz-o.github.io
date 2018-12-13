import {combineReducers} from 'redux'; 
import projects from './projects'; 
import technologies from './technologies'; 
import services from './services'; 

const rootReducer = combineReducers({
    projects, 
    technologies, 
    services
})

export default rootReducer; 