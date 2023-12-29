//import { useState } from "react";
import Habbit from "./Habbit";
import NavBar from "./NavBar";
import HabitTrackerWeekView from "./HabitTrackerWeekView";
//import AddHabit from "./AddHabit";
import { switchComponents, addHabit } from "../Action";
import { useReducer, useState } from "react";

function App({ store }) {
  //console.log(store.getState());
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const [newHabit, setNewHabit] = useState("");
  const { habitList, switchCom } = store.getState().habits;
  //console.log(switchCom);
  const newHabitButton = () => {
    store.dispatch(switchComponents(false));
    forceUpdate();
  };

  const handleNewHabit = (e) => {
    e.preventDefault();
    if (newHabit !== "") {
      store.dispatch(addHabit(newHabit));
      store.dispatch(switchComponents(true));
    }

    forceUpdate();
  };

  return (
    <div className="App">
      <NavBar />
      {/* {switchCom && (
        <>
          {habitList.map((habit, index) => (
            <Habbit habit={habit} key={index} />
          ))}
          <button onClick={newHabitButton}>Add New Habit</button>
        </>
      )}
      {!switchCom && (
        <div className="add-habit">
          <form onSubmit={handleNewHabit}>
            <input
              type="text"
              onChange={(habit) => setNewHabit(habit.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>
      )} */}
      <HabitTrackerWeekView habits={habitList} />
    </div>
  );
}

export default App;
