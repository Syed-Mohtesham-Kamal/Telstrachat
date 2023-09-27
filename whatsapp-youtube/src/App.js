import { Route, Routes } from "react-router-dom";
import HomePage from "./Componets/HomePage";
import Signin from "./Componets/Register/Signin";
import Signup from "./Componets/Register/Signup";
import Profile from "./Componets/Profile/Profile";


function App() {
  return (
    <div >

      <Routes>

          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          {/* <Route path="/profile" element={<Profile/>}></Route> */}

      </Routes>
      
    </div>
  );
}

export default App;
