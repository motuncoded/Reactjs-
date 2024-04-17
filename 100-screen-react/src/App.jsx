import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Screen1 from "./Screens/Screen1.jsx";
import Screen2 from "./Screens/Screen2.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/screen1",
      element: <Screen1 />,
    },
    {
      path: "/screen2",
      element: <Screen2 />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
