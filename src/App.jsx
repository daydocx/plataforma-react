import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Blog } from "./pages/Blog/Blog";
import { Menu } from "./componentes/Menu/Menu";
import { Contato } from "./pages/Contato/Contato";
import { Home } from "./pages/Home/Home";
import { Usuarios } from "./pages/Usuarios/Usuarios";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
