import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";

const App = () => {
  const [pokeName, setPokeName] = useState('')
  const [selectedType, setSelectedType] = useState('Category')
  const [selectPerPage, setSelectPerPage] = useState('10')



  return (
    <div className="App  bg-white relative flex">
      <Router>
        <Navbar 
        setPokeName={setPokeName} 
        selectedType={selectedType} 
        setSelectedType={setSelectedType} 
        selectPerPage={selectPerPage}
        setSelectPerPage={setSelectPerPage}
        />
        <Routes>
          <Route 
          path="/" 
          element={<Home 
          pokeName={pokeName} 
          selectedType={selectedType}
          selectPerPage={selectPerPage} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
