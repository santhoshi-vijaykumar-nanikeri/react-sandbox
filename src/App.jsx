import {
  Link,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./Home";
import UserData from "./UserData";

import styles from "./App.module.css";

function AppRoutes() {
  return (
    <>
      <Link to="/" className={styles.menuItem}>
        Home
      </Link>
      <Link to="/userdata" className={styles.menuItem}>
        UserData
      </Link>

      <Outlet />
    </>
  );
}

function App() {
  const routes = (
    <Route path="/" element={<AppRoutes />}>
      <Route path="/" element={<Home />} />
      <Route path="/userdata" element={<UserData />} />
    </Route>
  );

  const router = createBrowserRouter(createRoutesFromElements(routes), {
    basename: "/",
  });

  return <RouterProvider router={router} />;
}

export default App;
