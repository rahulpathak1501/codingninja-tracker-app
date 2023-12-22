import { combineReducers } from "redux";
import { ADD_HABIT, SWITCH_COM } from "../Action";

const intialHabitState = {
  habitList: ["Gym", "Running", "Reading"],
  switchCom: true,
};

export function habits(state = intialHabitState, action) {
  switch (action.type) {
    case ADD_HABIT:
      return {
        ...state,
        habitList: [...state.habitList, action.habit],
      };
    case SWITCH_COM:
      return {
        ...state,
        switchCom: action.val,
      };

    default:
      return state;
  }
}

export default combineReducers({ habits });
