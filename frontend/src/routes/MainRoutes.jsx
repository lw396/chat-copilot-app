import HomeLayout from "@layout/Home";
import HomePage from "@pages/HomePage/HomePage";

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
      ],
    },
  ],
};

export default MainRoutes;
