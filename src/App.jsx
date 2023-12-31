import { useContext, useState } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import "./style/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userID" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productID" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
