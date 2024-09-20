// import logo from './logo.svg';
// import './App.css';

import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { Browse } from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {

  const appLayout = createBrowserRouter([
    {
      path:"/",
      element: <Body/>,
    },
    {
      path:"/browse",
      element: <Browse/>
    }
  ])
  return (
    <div className="App">
      <Provider store={appStore}>
        <RouterProvider router={appLayout}/>
      </Provider>
    </div>
  );
}

export default App;
