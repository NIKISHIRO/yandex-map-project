import { orderReudcer, OrderState } from "./orderReducer";
import { combineReducers } from "redux";

export type State = {
    order: OrderState,
};

const createRootReducer = () => combineReducers({
    order: orderReudcer,
});

export {
    createRootReducer,
}