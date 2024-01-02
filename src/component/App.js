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
  const viewType = useSelector((state) => state.viewType);
  const [newHabit, setNewHabit] = useState("");

  console.log(viewType);

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
      {viewType === "detailView" && (
        <>
          {switchCom ? (
            <>
              {habitList.map((habit, index) => (
                <Habbit habits={habit} key={index} />
              ))}
              <button onClick={newHabitButton}>Add New Habit</button>
            </>
          ) : (
            <div className="add-habit">
              <form onSubmit={handleNewHabit}>
                <input
                  className="habit-input"
                  type="text"
                  onChange={(habit) => setNewHabit(habit.target.value)}
                  placeholder="Type a new habit here"
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </>
      )}
      {viewType === "weeklyView" && <HabitTrackerWeekView />}
    </div>
  );
}

export default App;
