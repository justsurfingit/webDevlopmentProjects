import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//we have to create a react rautor and wrap our project in it
import {
  Home,
  About,
  Footer,
  Github,
  Header,
  Contact,
  User,
} from "./Components";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { FetchUserData } from "./Components/Github.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={App}>
      {/*this was our main route we can enclose further routes inside this  */}
      <Route path="" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Footer" element={<Footer />} />
      <Route path="Github" loader={FetchUserData} element={<Github />} />
      <Route path="Header" element={<Header />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
