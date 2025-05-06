import SliderBar from "./SliderBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex max-w-full overflow-hidden mx-auto md:mx-0">
      <SliderBar />
      <Outlet />
    </div>
  );
};

export default Body;
