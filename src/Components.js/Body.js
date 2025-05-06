import SliderBar from "./SliderBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex max-w-full overflow-hidden justify-center items-center sm:justify-start sm:items-start">
      <SliderBar />
      <Outlet />
    </div>
  );
};

export default Body;
