//import { useState } from "react";
import Habbit from "./Habbit";
import NavBar from "./NavBar";
import HabitTrackerWeekView from "./HabitTrackerWeekView";
import { switchComponents, addHabit } from "../Action";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const habitList = useSelector((state) => state.habitList);
  const switchCom = useSelector((state) => state.switchCom);
  const [newHabit, setNewHabit] = useState("");

  const newHabitButton = () => {
    dispatch(switchComponents(false));
  };

  const handleNewHabit = (e) => {
    e.preventDefault();
    if (newHabit !== "") {
      dispatch(addHabit(newHabit));
      dispatch(switchComponents(true));
    }
  };

  return (
    <div className="App">
      <NavBar />
      {switchCom && (
        <>
          {habitList.map((habit, index) => (
            <Habbit habits={habit} key={index} />
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
              required
            />
            <button>Submit</button>
          </form>
        </div>
      )}
      <HabitTrackerWeekView />
    </div>
  );
}

export default App;
