import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import BottomNav from "../components/BottomNav";
import Home from "../pages/Home";
import Map from "../pages/Map";
import Library from "../pages/Library";
import YourLibrary from "../pages/YourLibrary";
import Notifications from "../pages/Notifications";
import Story from "../pages/Story";
import DailyChallenge from "../pages/DailyChallenge";
import Profile from "../pages/profile/Profile";
import Error404 from "../pages/Error404";

function WithBottom({ Component }) {
  return (
    <>
      <Component />
      <BottomNav />
    </>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<WithBottom Component={Home} />} />
        <Route path={ROUTES.MAP} element={<WithBottom Component={Map} />} />
        <Route path={ROUTES.LIBRARY} element={<WithBottom Component={Library} />} />
        <Route path={ROUTES.YOUR_LIBRARY} element={<YourLibrary />} />
        <Route path={ROUTES.NOTIFICATIONS} element={<WithBottom Component={Notifications} />} />
        <Route path={ROUTES.STORY} element={<Story />} />
        <Route path={ROUTES.DAILY_CHALLENGE} element={<DailyChallenge />} />

        {/* Profile menu routes */}
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path="/profile/edit" element={/* import EditProfile */ null} />
        {/* Add the rest of profile subroutes similarly */}

        <Route path={ROUTES.ERROR_404} element={<Error404 />} />
      </Routes>
    </Router>
  );
}