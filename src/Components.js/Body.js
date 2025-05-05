import SliderBar from "./SliderBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex max-w-full overflow-hidden">
      <SliderBar />
      <Outlet />
    </div>
  );
};

export default Body;
