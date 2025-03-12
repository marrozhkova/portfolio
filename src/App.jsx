import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import HomeInhalt from "./pages/HomeInhalt";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Projects2 from "./pages/Projects2";
import About from "./pages/About";
import Error from "./pages/Error";
import Error2 from "./pages/Error2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeInhalt />}>
          <Route index element={<About />} />
          <Route path="projects" element={<Projects2 />} />
          <Route path="projects2" element={<Projects2 />} />
          <Route path="skills" element={<Skills />} />
          <Route path="404" element={<Error2 />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
