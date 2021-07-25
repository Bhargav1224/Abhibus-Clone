import axios from "axios";
import {
	GET_BUS_DETAILS_FAIL,
	GET_BUS_DETAILS_REQUEST,
	GET_BUS_DETAILS_SUCCESS,
} from "./actionTypes";

const busDetailsRequest = () => {
	return {
		type: GET_BUS_DETAILS_REQUEST,
	};
};

const busDetailsSuccess = (payload) => {
	return {
		type: GET_BUS_DETAILS_SUCCESS,
		payload,
	};
};

const busDetailsFail = (er) => {
	return {
		type: GET_BUS_DETAILS_FAIL,
		payload: er,
	};
};

export const getBusDetails =
	({ leaving, going, date }) =>
	(dispatch) => {
		dispatch(busDetailsRequest());
		axios
			.get(
				`http://localhost:8000/routes/services/?from=${leaving}&&to=${going}&&date=${date}`
			)

			.then((res) => {
				console.log(res.data.data[0]);
				dispatch(busDetailsSuccess(res.data.data[0]));
			})
			.catch((err) => dispatch(busDetailsFail(SyntaxError)));
	};



// http://localhost:8000/buses/price

// http://localhost:8000/buses/rating

// http://localhost:8000/buses/seats

// http://localhost:8000/buses/departuretime

// http://localhost:8000/buses/arrivaltime
