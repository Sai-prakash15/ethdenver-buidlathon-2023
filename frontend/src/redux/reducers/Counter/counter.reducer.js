import { SETDATA, API_CALLED, SET_VISUALIZATION } from './counter.types';


const INITIAL_STATE = {

   isLoading: false,
    data: "",
    visualization: "table"
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SETDATA:

           return {

             ...state, 
             data: action.data,

           };
         
      case API_CALLED :  
         return {
             ...state,
             isLoading: action.data
         };
      
      case SET_VISUALIZATION :  
         return {
             ...state,
             visualization: action.data
         };
      


        

      default: return state;

    }

};

export default reducer;