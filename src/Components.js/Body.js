import SliderBar from "./SliderBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div >
      <div className="flex">
      <SliderBar />
      <Outlet />
      </div>
    </div>
  );
};

export default Body;
