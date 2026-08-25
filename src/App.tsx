import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BookAppointmentPage } from "./pages/BookAppointmentPage";
import { useScrollToHash } from "./hooks/useScrollToHash";
import { useDocumentMeta } from "./hooks/useDocumentMeta";
import { useLanguageSync } from "./i18n/useLanguage";

function AppRoutes() {
  useLanguageSync();
  useScrollToHash();
  useDocumentMeta();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book-appointment" element={<BookAppointmentPage />} />
      <Route path="/es" element={<HomePage />} />
      <Route path="/es/book-appointment" element={<BookAppointmentPage />} />
    </Routes>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
