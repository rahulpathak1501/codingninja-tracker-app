function Habbit({ habit }) {
  //console.log(habit);
  return (
    <div className="Habbit">
      <div className="container">
        <div className="habit-nav">
          <div className="right">{habit}</div>
          <div className="left">time</div>
        </div>
        <input type="checkbox" />
        <div className="habit-footer">
          <div className="day-count">1 day</div>
          <div className="streak"> 9 best</div>
          <div className="workout-pattern">Daily</div>
        </div>
      </div>
    </div>
  );
}

export default Habbit;
