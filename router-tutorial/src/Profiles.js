import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white',
    fontSize: 25,
  }
  return (
    <div>
      <h3>사용자 목록 :</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/velopert"
            style={({ isActive }) => (isActive ? activeStyle: undefined)}
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/gildong"
            style={({ isActive }) => (isActive ? activeStyle: undefined)}
          >
            gildong
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/*" element={<div>사용자를 선택해주세요.</div>} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;
