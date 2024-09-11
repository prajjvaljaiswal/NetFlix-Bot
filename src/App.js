// import logo from './logo.svg';
// import './App.css';

import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { Browse } from "./components/Browse";

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
      <RouterProvider router={appLayout}/>
    </div>
  );
}

export default App;
