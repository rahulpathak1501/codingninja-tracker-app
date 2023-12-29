import React, { useReducer, useState } from "react";
import {
  format,
  subWeeks,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  addWeeks,
} from "date-fns";

function HabitTrackerWeekView({ habits }) {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [habitStatuses, setHabitStatuses] = useState({});

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
    setCurrentMonth(subWeeks(currentMonth, 1));
    forceUpdate();
  };

  const getMonthYear = () => {
    const dateFormat = "MMM yyyy";
    return format(currentMonth, dateFormat);
  };

  const handleNextWeek = () => {
    setCurrentMonth(addWeeks(currentMonth, 1));
    forceUpdate();
  };
  let toggleHandle = 0;
  const handleTodaysStatus = (date, habit) => {
    console.log(date);
    if (isNaN(date)) {
      console.error("Invalid date:", date);
      return;
    }
    const key = `${format(date, "dd")}-${habit}`;
    setHabitStatuses((prevStatuses) => {
      const currentStatus = prevStatuses[key] || "none";
      const newStatus =
        currentStatus === "none"
          ? "done"
          : currentStatus === "done"
          ? "not done"
          : "none";
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
        {habits.map((habit) => (
          <>
            <div className="habit-info">
              <div className="habit-name">{habit}</div>
              <div className="habit-time">time</div>
            </div>
            <div className="habit-dates">
              {dates.map((date) => (
                <div
                  className="habit-date"
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
