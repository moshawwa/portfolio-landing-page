import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "../Root";
import App from "../App";
import Works from "../components/Works";
import Contacts from "../components/Contacts";
import Blog from "../components/Blog";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route index path="/" element={<App />}></Route>
      <Route path="works" element={<Works />}></Route>
      <Route path="blog" element={<Blog />}></Route>
      <Route path="contact" element={<Contacts />}></Route>
    </Route>
  )
);
