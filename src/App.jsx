import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default function App() {
  return(
    

      <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          {/* <Route path='></Route> */}
        </Routes>
      </BrowserRouter>
  
  )
}



