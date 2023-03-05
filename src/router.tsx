import {
  createBrowserRouter,
} from "react-router-dom";
import SearchView from "./views/SearchView/SearchView";
import UserView from "./views/UserView/UserView";

export function loader({ params }: {params: any} ) {
  return { ...params };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchView />,
  },
  {
    path: "/user/:userId?",
    element: <UserView />,
    loader: loader,
  },
  {
    path: "*",
    element: <div>Page not found</div>,
  },
]);

export default router;
