// import { combineReducers } from "redux";
import {
  ADD_HABIT,
  SWITCH_COM,
  UPDATE_CURRENT_MONTH,
  COUNT_DONE_STATUSES,
} from "../Action";

const initialHabitState = {
  habitList: ["Gym", "Running", "Reading"],
  switchCom: true,
  currentMonth: new Date(),
  doneCount: {},
};

export default function habits(state = initialHabitState, action) {
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
    case UPDATE_CURRENT_MONTH:
      return {
        ...state,
        currentMonth: new Date(action.month),
      };
    case COUNT_DONE_STATUSES:
      return {
        ...state,
        doneCount: action.doneCount,
      };
    default:
      return state;
  }
}

// export default combineReducers({ habits });
