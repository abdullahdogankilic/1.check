import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SWRConfig } from "swr";
import Address from "./Companente/address";
import User from "./Companente/user";
const fetcher = (url) => fetch(url).then((response) => response.json());
function App() {
  const [id, setId] = useState();
  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <SWRConfig value={{ fetcher }}>
        <BrowserRouter>
          <div>
            <Link to={`/address/${id}`}>Address</Link> |{"  "}
            <Link to={`/users/${id}`}>User</Link>
          </div>
          <Routes>
            <Route path="/address/:userid" element={<Address />} />
            <Route path="/users/:userid" element={<User />} />
          </Routes>
        </BrowserRouter>
      </SWRConfig>
    </div>
  );
}

export default App;
