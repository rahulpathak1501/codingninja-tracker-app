// Action Types
export const ADD_HABIT = "ADD_HABIT";
export const SWITCH_COM = "SWITCH_COM";
export const UPDATE_CURRENT_MONTH = "UPDATE_CURRENT_MONTH";
export const UPDATE_HABIT_STATUSES = "UPDATE_HABIT_STATUSES";
export const COUNT_DONE_STATUSES = "COUNT_DONE_STATUSES";

export function addHabit(habit) {
  console.log(habit);
  return {
    type: ADD_HABIT,
    habit,
  };
}

export function switchComponents(val) {
  //console.log(val);
  return {
    type: SWITCH_COM,
    val,
  };
}

export function updateCurrentMonth(month) {
  return {
    type: UPDATE_CURRENT_MONTH,
    month,
  };
}

export function updateHabitStatuses(newStatuses) {
  // console.log("here ", newStatuses);
  return {
    type: UPDATE_HABIT_STATUSES,
    newStatuses,
  };
}

export function countDoneStatuses(doneCount) {
  return {
    type: COUNT_DONE_STATUSES,
    doneCount,
  };
}
