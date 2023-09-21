import { Routes, Route, useNavigation } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout/Layout";

import CreateTask from "./components/CreateTask";

function App() {
  const token = window.localStorage.getItem("token");

  return (
    <Routes>
      {token ? (
        <>
          <Route path="/" element={<Layout />}>
            {<Route index element={<Dashboard />} />}
            {/* <Route index element={<Tasks />} /> */}
            <Route path="create_tasks" element={<CreateTask />} />
          </Route>
        </>
      ) : (
        <>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </>
      )}
    </Routes>
  );
}

export default App;
