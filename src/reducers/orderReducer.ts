import { ORDER_FORM_CHANGE, SET_PLACEMARK_POSITION, SET_CREWS_INFO, SET_SELECT_CREW_INFO } from "../actions/orderActions";
import { CrewInfo } from "../components/Order/OrderService";

export type MapPosition = [number, number];

export type MapPlacemark = {
    color: string;
    text: string;
    position: MapPosition | null;
};

export type OrderState = {
    form: {
        address: string;
        isValid: boolean;
    };
    map: {
        clickPlacemark: MapPlacemark;
    };
    crewsInfo: CrewInfo[];
    selectCrew: CrewInfo | null;
};

const initialState: OrderState = {
    form: {
        address: '',
        isValid: false,
    },
    map: {
        clickPlacemark: {
            color: 'gold',
            text: '',
            position: null,
        },
    },
    crewsInfo: [],
    selectCrew: null
};

function orderReudcer(state = initialState, action: any) {
    switch (action.type) {
        case SET_SELECT_CREW_INFO: {
            state.selectCrew = action.crewInfo;
            return {
                ...state,
            };
        };

        case SET_CREWS_INFO: {
            state.crewsInfo = action.crewsInfo;
            return {
                ...state
            };
        };

        case ORDER_FORM_CHANGE: {
            state.form[action.name] = action.value;
            return {
                ...state,
            };
        };

        case SET_PLACEMARK_POSITION: {
            state.map.clickPlacemark.position = action.position;
            state.map.clickPlacemark.text = action.text;
            state.map.clickPlacemark.color = action.color;

            return {
                ...state,
            };
        };

        default: {
            return {
                ...state,
            };
        };
    }
}

export {
    orderReudcer,
}