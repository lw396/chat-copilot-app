import { createBrowserRouter } from "react-router-dom";

import LoginRoutes from "@routes/LoginRoutes";
import MainRoutes from "@routes/MainRoutes";

const router = createBrowserRouter([LoginRoutes, MainRoutes], {
  basename: import.meta.env.VITE_APP_BASE_NAME,
});

export default router;
