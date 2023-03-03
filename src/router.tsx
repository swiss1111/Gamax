import {
  createBrowserRouter,
} from "react-router-dom";
import SearchView from "./views/SearchView/SearchView";
import UserView from "./views/UserView/UserView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchView />,
  },
  {
    path: "/user/:userId?",
    element: <UserView />,
  },
  {
    path: "*",
    element: <div>Page not found</div>,
  },
]);

export default router;
