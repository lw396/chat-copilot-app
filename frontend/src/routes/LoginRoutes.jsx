import AuthLayout from "@layout/Auth";
import AuthLogin from "@pages/LoginPage";

const LoginRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "/",
          element: <AuthLogin />,
        },
        {
          path: "login",
          element: <AuthLogin />,
        },
      ],
    },
  ],
};

export default LoginRoutes;
