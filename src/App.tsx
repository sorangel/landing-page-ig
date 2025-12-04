import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OficinaMiami from "./pages/OficinaMiami";
import Booking from "./pages/Booking";
import Schedule from "./pages/Schedule";
import Privacy from "./pages/Privacy";
import Consulta72h from "./pages/Consulta72h";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/index.html" element={<Home />} />
      <Route path="/oficina-miami" element={<OficinaMiami />} />
      <Route path="/oficina-miami.html" element={<OficinaMiami />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/booking.html" element={<Booking />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/schedule.html" element={<Schedule />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/privacy.html" element={<Privacy />} />
      <Route path="/consulta-72h" element={<Consulta72h />} />
      <Route path="/consulta-72h.html" element={<Consulta72h />} />
    </Routes>
  );
}

export default App;
