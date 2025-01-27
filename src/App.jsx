import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, NavLink, Route, Routes } from "react-router";
import Home from "./companent/Home/Home";
import Posts from "./companent/Posts/Posts";
import Todos from "./companent/Todos/Todos";
import Avatar from "./companent/Avartar/Avatar";
import Coments from "./companent/Coments/Coments";
import Users from "./companent/Users/Users";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="flex ">
          <SideMenu />
          <div className=" flex flex-col w-full ">
            <div>
              <Avatar />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/todos" element={<Todos />} />
              <Route path="/component" element={<Coments />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
function MenuLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "bg-blue-800 p-3 rounded " : " text-white p-3 "
      }
    >
      {children}
    </NavLink>
  );
}

function SideMenu() {
  return (
    <>
      <div className="bg-black  h-screen w-72  p-3 text-white fixed ">
        <div>
          <h2 className="text-2xl pb-5 ">Admin</h2>
        </div>

        <div className="flex flex-col rounded w-full left-80 ">
          <MenuLink to="/" element={<Home />}>
            Home
          </MenuLink>
          <MenuLink to="/posts" element={<Posts />}>
            Posts
          </MenuLink>
          <MenuLink to="/todos" element={<Todos />}>
            Todos
          </MenuLink>{" "}
          <MenuLink to="/component" element={<Coments />}>
            Coments
          </MenuLink>{" "}
          <MenuLink to="/users" element={<Users />}>
            Users
          </MenuLink>
        </div>
      </div>
    </>
  );
}

export default App;
