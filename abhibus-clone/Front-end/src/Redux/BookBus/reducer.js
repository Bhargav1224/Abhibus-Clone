import {
  GET_BUS_DETAILS_FAIL,
  GET_BUS_DETAILS_REQUEST,
  GET_BUS_DETAILS_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  
  matchedBuses: [],
  
 
};

export const busDetailsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_BUS_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };

    case GET_BUS_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        matchedBuses:payload
      };

   

    case GET_BUS_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    default:
      return state;
  }
};
