import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";

const App = () => {
  const [pokeName, setPokeName] = useState('')

  return (
    <div className="App  bg-white relative flex">
      <Router>
        <Navbar setPokeName={setPokeName} />
        <Routes>
          <Route path="/" element={<Home pokeName={pokeName}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
