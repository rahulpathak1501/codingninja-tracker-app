import React, { useEffect, useState } from "react";
import { updateCurrentMonth, countDoneStatuses } from "../Action";
import {
  format,
  subWeeks,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addWeeks,
} from "date-fns";
import { useDispatch, useSelector } from "react-redux";

function HabitTrackerWeekView() {
  const dispatch = useDispatch();

  const habitList = useSelector((state) => state.habitList);
  const currentMonth = useSelector((state) => state.currentMonth);
  // const doneCount = useSelector((state) => state.doneCount);
  // const [currentMonth, setCurrentMonth] = useState(new Date());
  const [habitStatuses, setHabitStatuses] = useState({});
  const [habitDoneCounts, setHabitDoneCounts] = useState(
    habitList.reduce((counts, habit) => ({ ...counts, [habit]: 0 }), {})
  );
  useEffect(() => {
    // console.log(habitDoneCounts);
    dispatch(countDoneStatuses(habitDoneCounts));
  });

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getCurrentWeekDates = () => {
    const startOfCurrentWeek = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endOfCurrentWeek = endOfWeek(currentMonth, { weekStartsOn: 1 });
    const datesOfCurrentWeek = eachDayOfInterval({
      start: startOfCurrentWeek,
      end: endOfCurrentWeek,
    });
    const formattedDatesOfCurrentWeek = datesOfCurrentWeek.map((date) =>
      format(date, "dd")
    );

    return formattedDatesOfCurrentWeek;
  };
  //console.log(getCurrentWeekDates());
  const dates = getCurrentWeekDates();
  const handlePreviousWeek = () => {
    dispatch(updateCurrentMonth(subWeeks(currentMonth, 1)));
  };

  const getMonthYear = () => {
    const dateFormat = "MMM yyyy";
    return format(currentMonth, dateFormat);
  };

  const handleNextWeek = () => {
    dispatch(updateCurrentMonth(addWeeks(currentMonth, 1)));
  };

  const handleTodaysStatus = (date, habit) => {
    // const currentDate = new Date();
    // const currentYear = currentDate.getFullYear();
    // const currentMonth = currentDate.getMonth() + 1;
    // console.log(currentMonth);

    // const clickedDate = new Date().setHours(0, 0, 0, 0);
    // // console.log(clickedDate);

    // if (clickedDate < currentDate) {
    //   alert("Can Not Modify future dates");
    //   return;
    // }
    // if (isNaN(date)) {
    //   console.error("Invalid date:", date);
    //   return;
    // }
    const key = `${date}-${habit}`;
    setHabitStatuses((prevStatuses) => {
      const currentStatus = prevStatuses[key] || "none";

      const newStatus =
        currentStatus === "none"
          ? "done"
          : currentStatus === "done"
          ? "not done"
          : "none";
      setHabitDoneCounts((prevCounts) => ({
        ...prevCounts,
        [habit]:
          newStatus === "done"
            ? prevCounts[habit] + 1
            : currentStatus === "not done"
            ? prevCounts[habit]
            : Math.max(0, prevCounts[habit] - 1),
      }));
      return { ...prevStatuses, [key]: newStatus };
    });
  };

  return (
    <div className="habit-tracker-week-view">
      <div className="months">
        <div className="previous-month" onClick={handlePreviousWeek}>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/back--v1.png"
            alt="back--v1"
          />
        </div>
        <div className="month">{getMonthYear()}</div>
        <div className="next-month" onClick={handleNextWeek}>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/forward.png"
            alt="forward"
          />
        </div>
      </div>
      <div className="day-of-the-week">
        {weekdays.map((day) => (
          <label>{day}</label>
        ))}
      </div>
      {/* <h1>Habit Tracker</h1> */}
      <div className="habits">
        {habitList.map((habit) => (
          <>
            <div className="habit-info">
              <div className="habit-name">{habit}</div>
              <div className="habit-time">time</div>
            </div>
            <div className="habit-dates">
              {dates.map((date) => (
                <div
                  className={`habit-date ${
                    habitStatuses[`${date}-${habit}`] === "done"
                      ? "done"
                      : `${
                          habitStatuses[`${date}-${habit}`] === "not done"
                            ? "not-done"
                            : ""
                        }`
                  }`}
                  onClick={() => handleTodaysStatus(date, habit)}
                >
                  {date}
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default HabitTrackerWeekView;
