import { MapPosition } from "../reducers/orderReducer";
import { CrewInfo } from "../components/Order/OrderService";

export const ORDER_FORM_CHANGE = 'ORDER_FORM_CHANGE'; 
export const SET_PLACEMARK_POSITION = 'SET_PLACEMARK_POSITION'; 
export const SET_CREWS_INFO = 'SET_CREWS_INFO';
export const SET_SELECT_CREW_INFO = 'SET_CREW_INFO';

type OrderFormNames = 'address' | 'isValid';

function setSelectCrew(crewInfo: CrewInfo) {
    return (dispatch) => {
        dispatch({
            type: SET_SELECT_CREW_INFO,
            crewInfo,
        });
    };
}

function setCrewsInfo(crewsInfo) {
    return (dispatch) => {
        dispatch({
            type: SET_CREWS_INFO,
            crewsInfo, 
        });
    };
}

function orderFormChange(name: OrderFormNames, value: any) {
    return (dispatch) => {
        dispatch({
            type: ORDER_FORM_CHANGE, 
            name,
            value,
        });
    };
}

function setPlacemarkPos(position: MapPosition, data?: {text: string; color: string;}) {
    return (dispatch) => {
        if (data) {
            dispatch({
                type: SET_PLACEMARK_POSITION,
                text: data.text,
                color: data.color,
                position,
            });
            return;
        }

        dispatch({
            type: SET_PLACEMARK_POSITION,
            position,
            text: '',
            color: 'gold',
        });
    };
}

export {
    setSelectCrew,
    setCrewsInfo,
    orderFormChange,
    setPlacemarkPos,
}