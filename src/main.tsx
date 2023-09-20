import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Root from "./Pages/Root.tsx";
import Counter from "./Components/Counter.tsx";
import Home from "./Pages/Home/Home.tsx";
import NotFound from "./Pages/NotFound/index.tsx";
import Login from "./Pages/Login/index.tsx";
import HomeLayout from "./Components/Layouts/HomeLayout.tsx";
import Success from "./Components/SocialMediaAction/Success.tsx";
import Failed from "./Components/SocialMediaAction/Failed.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      // Elements that need Nav and Footer

      {
        element: <HomeLayout />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "counter",
            element: <Counter />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
        children: [
          {
            path: "success/?username&code",
            element: <Success />,
          },
          {
            path: "failed",
            element: <Failed />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
