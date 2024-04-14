import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./routes/SignIn.jsx";
import SignUp from "./routes/SignUp.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import Home from "./routes/Home.jsx";
import AuthContext from "./context/AuthContext.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoutes><Home/></ProtectedRoutes>,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);
  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  );
}

export default App;
