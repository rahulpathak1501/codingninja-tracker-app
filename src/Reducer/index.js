// import { combineReducers } from "redux";
import {
  ADD_HABIT,
  SWITCH_COM,
  UPDATE_CURRENT_MONTH,
  UPDATE_HABIT_STATUSES,
  COUNT_DONE_STATUSES,
} from "../Action";

const initialHabitState = {
  habitList: ["Gym", "Running", "Reading"],
  switchCom: true,
  currentMonth: new Date(),
  habitStatuses: {},
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
      console.log("Reducer - Updating current month:", action.month);
      return {
        ...state,
        currentMonth: new Date(action.month),
      };
    case UPDATE_HABIT_STATUSES:
      return {
        ...state,
        habitStatuses: { ...state.habitStatuses, ...action.newStatuses },
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
