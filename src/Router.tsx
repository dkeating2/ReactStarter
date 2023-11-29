import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Data from "./views/Data/Data";
import Home from "./views/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
