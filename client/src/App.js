import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Replies from "./components/Replies";
import BreakingNewsPage from "./components/BreakingNewsPage";
const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Home />} />
            <Route path='/:id/replies' element={<Replies />} />
              <Route exact path="/" component={Home} />
              <Route path="/breaking-news" component={BreakingNewsPage} />
          </Routes>
        </BrowserRouter>
      </div>
  );
};

export default App;