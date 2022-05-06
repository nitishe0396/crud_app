import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Component/pages/Home";
import Edit from "./Component/student/Edit";
import View from "./Component/student/View";
import List from "./Component/student/List";
import Logout from "./Component/student/Logout";
function App() {
  return (
     <>
     <BrowserRouter>
         <Routes>
        
            <Route  path="/" element={<Home />} />
            <Route  path="/view/:id" element={<View />} />
            <Route  path="/edit/:id" element={<Edit />} />
            <Route  path="/list/:id" element={<List />} />
            <Route path ="/logout" element={<Logout />} />
         </Routes>
     </BrowserRouter>
        
      
     </>     
   
    
  );
}

export default App;
