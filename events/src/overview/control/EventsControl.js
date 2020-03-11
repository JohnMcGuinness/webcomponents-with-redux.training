import { EVENT_SELECTED } from "../entity/OverviewReducer.js";
import store from "../../store.js";
const eventSelected = (name, checked) => { 
    store.dispatch({
        type: EVENT_SELECTED,
        payload: {
            name,
            checked
        }
    });

}
export { eventSelected };