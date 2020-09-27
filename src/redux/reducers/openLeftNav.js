  
import {OPEN_LEFT_NAV} from '../type';
const initialState={
    numberOfBooks:15
}

const openLeftNav=(state=initialState, action)=>{
    switch(action.type){
        case OPEN_LEFT_NAV:return{
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }
        default:return state;
    }
}
// add commentdf
export default openLeftNav;