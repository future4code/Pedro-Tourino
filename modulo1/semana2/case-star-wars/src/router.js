import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, StarshipsPage, PilotsPage } from "./pages";
import { NavBar } from "./components";
// import { HomePage } from  './pages/home';
// import { StarshipsPage } from  './pages/starships';

export const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pilots" element={<PilotsPage />} />
        <Route path="/starships" element={<StarshipsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
