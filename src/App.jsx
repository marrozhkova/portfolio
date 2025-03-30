import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import HomeInhalt from "./pages/HomeInhalt";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Error from "./pages/Error";
import { preloadAssets } from "./utilities/preloadAppImages";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    preloadAssets();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeInhalt />}>
          <Route index element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
