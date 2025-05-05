import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Redux/chatSlice";
import { getRandomName } from "../utils/helper";
import { getRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="m-2 p-2 border border-black w-[400px] h-[500px] bg-slate-100 rounded-md overflow-y-scroll flex flex-col-reverse md:block hidden">
        <div>
          {chatMessage.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full flex items-center justify-between p-2 ml-2 border border-black md:block hidden"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "Avineet", message: liveMessage }));
          setLiveMessage(``);
        }}
      >
        <input
          className="flex-1 border px-4 py-2 border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-4 py-2 bg-green-600 text-white ml-2">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
