import { Provider } from "react-redux";
import Body from "./Components.js/Body";  
import store from "../src/Redux/store";
import Header from "./Components.js/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components.js/MainContainer";
import WatchPage from "./Components.js/WatchPage";
import SearchResult from "./Components.js/SearchResult";
import Comment from "./Components.js/Comment";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/comment",
        element: <Comment />,
      },
      {
        path: "/searchResult",
        element: <SearchResult />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
