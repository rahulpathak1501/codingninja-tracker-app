import { updateView } from "../Action";
import { useDispatch, useSelector } from "react-redux";

function NavBar() {
  const dispatch = useDispatch();

  const handleViewType = (value) => {
    dispatch(updateView(value));
  };

  return (
    <div className="NavBar">
      <div className="left-side-spans">
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/fluency-systems-regular/20/line-width.png"
          alt="line-width"
        />
      </div>
      <div className="">
        <select
          className="menu"
          onChange={(e) => handleViewType(e.target.value)}
        >
          <option value="detailView">Detail View</option>
          <option value="weeklyView">Weekly View</option>
        </select>
      </div>
      <div className="rigt-side-spans">
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/fluency-systems-regular/20/line-width.png"
          alt="line-width"
        />
      </div>
    </div>
  );
}

export default NavBar;
