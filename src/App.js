import Header from "./components/admin/Header";
import Login from "./components/admin/Login";
import Register from "./components/admin/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Events from "./components/admin/Events";
import RequestEvents from "./components/admin/RequestEvents";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="m-2 p-2 bg-primary font-semibold rounded">
          <div className="mr-5 text-white ">
            <ul className="flex gap-5 text-sm cursor-pointer ">
              <li className="hover:bg-slate-400 p-2 rounded">
                {" "}
                <Link to="/">Events</Link>{" "}
              </li>
              <li className="hover:bg-slate-400 p-2 rounded">
                <Link to="/request-events">Request Events</Link>{" "}
              </li>
              <li className="hover:bg-slate-400 p-2 rounded">
                <Link to="/login">Login</Link>{" "}
              </li>
              <li className="hover:bg-slate-400 p-2 rounded">
                <Link to="/register">Register</Link>{" "}
              </li>
            </ul>
          </div>
        </main>
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/request-events" element={<RequestEvents />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
