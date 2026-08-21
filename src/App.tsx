import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BookAppointmentPage } from "./pages/BookAppointmentPage";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-appointment" element={<BookAppointmentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
