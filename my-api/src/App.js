import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GetCharacterInfo from "./components/getCharacterDetails";
import GetCharacters from "./components/getCharcterList/getcharacters";


function App() {
  return (
    <>
      <h2>Hi! Meet the Disney Characters</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetCharacters />} />
          <Route path="/character/:id" element={<GetCharacterInfo />} />
        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
