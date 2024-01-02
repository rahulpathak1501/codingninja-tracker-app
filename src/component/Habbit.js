import { useSelector } from "react-redux";

function Habbit({ habits }) {
  const doneCount = useSelector((state) => state.doneCount);
  console.log();
  return (
    <div className="Habbit">
      <div className="container">
        <div className="habit-nav">
          <div className="right">{habits}</div>
          <div className="left">time</div>
        </div>
        <input type="checkbox" />
        <div className="habit-footer">
          <div className="day-count">{doneCount[habits]} Days</div>
          {/* <div className="streak"> 9 best</div> */}
          <div className="workout-pattern">Daily</div>
        </div>
      </div>
    </div>
  );
}

export default Habbit;
