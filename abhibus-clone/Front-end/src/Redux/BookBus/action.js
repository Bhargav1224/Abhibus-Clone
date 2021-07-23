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

export const getBusDetails = (depart, arrival, date) => (dispatch) => {
	dispatch(busDetailsRequest());
	axios
		.get(
			`http://localhost:8000/routes/services/?from=${depart}&&to=${arrival}&&date=${date}`
		)

		.then((res) => {
			console.log(res.data);
			dispatch(busDetailsSuccess(res.data));
		})
		.catch((err) => dispatch(busDetailsFail(SyntaxError)));
};
