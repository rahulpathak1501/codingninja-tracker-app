//action Types

export const ADD_HABIT = "ADD_HABIT";
export const SWITCH_COM = "SWITCH_COM";

export function addHabit(habit) {
  console.log(habit);
  return {
    type: ADD_HABIT,
    habit,
  };
}
export function switchComponents(val) {
  console.log(val);
  return {
    type: SWITCH_COM,
    val,
  };
}
