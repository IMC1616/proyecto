import { BrowserRouter, Routes, Route } from "react-router-dom"

//Layout
import LayoutAuth from "./layouts/LayoutAuth";
import LayoutAdmin from "./layouts/LayoutAdmin";

//pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
//pages admin
import Home from "./pages/admin/Home";
import Chat from "./pages/admin/Chat";
import Error404 from "./pages/Error404";
import RegistroSocios from "./pages/auth/RegistroSocios";

function App() {
  // const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registro" element={<Register/>}/>
        <Route path="/" element={<LayoutAuth/>}>

               
        </Route>        

        <Route path="/" element={<LayoutAdmin/>}>
          <Route index element={<Home/>} />
          <Route path="Chat" element={<Chat/>} />
          <Route path="RegistroSocios" element={<RegistroSocios/>}/>
        </Route>
        
        <Route path="*" element={<Error404/>}/>
      </Routes>
     </BrowserRouter>
    
      
    
  )
}

export default App
