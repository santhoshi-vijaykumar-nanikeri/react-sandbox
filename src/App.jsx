import {
  Link,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./Home";
import ContactUs from "./ContactUs";

import styles from "./App.module.css";

function AppRoutes() {
  return (
    <>
      <Link to="/" className={styles.menuItem}>
        Home
      </Link>
      <Link to="/contact-us" className={styles.menuItem}>
        Contact Us
      </Link>

      <Outlet />
    </>
  );
}

function App() {
  const routes = (
    <Route path="/" element={<AppRoutes />}>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Route>
  );

  const router = createBrowserRouter(createRoutesFromElements(routes), {
    basename: "/",
  });

  return <RouterProvider router={router} />;
}

export default App;
