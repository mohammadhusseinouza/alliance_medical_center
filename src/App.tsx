import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BookAppointmentPage } from "./pages/BookAppointmentPage";
import { UrgentCarePage } from "./pages/UrgentCarePage";
import { OccupationalHealthPage } from "./pages/OccupationalHealthPage";
import { DiagnosticServicesPage } from "./pages/DiagnosticServicesPage";
import { WomensHealthPage } from "./pages/WomensHealthPage";
import { PediatricCarePage } from "./pages/PediatricCarePage";
import { FamilyHealthPage } from "./pages/FamilyHealthPage";
import { ContactPage } from "./pages/ContactPage";
import { useScrollToHash } from "./hooks/useScrollToHash";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { useDocumentMeta } from "./hooks/useDocumentMeta";
import { useLanguageSync } from "./i18n/useLanguage";

function AppRoutes() {
  useLanguageSync();
  useScrollToHash();
  useScrollToTop();
  useDocumentMeta();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book-appointment" element={<BookAppointmentPage />} />
      <Route path="/services/urgent-care" element={<UrgentCarePage />} />
      <Route path="/services/diagnostic-services" element={<DiagnosticServicesPage />} />
      <Route path="/services/womens-health" element={<WomensHealthPage />} />
      <Route path="/services/pediatric-care" element={<PediatricCarePage />} />
      <Route path="/services/family-health" element={<FamilyHealthPage />} />
      <Route path="/occupational-health" element={<OccupationalHealthPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/es" element={<HomePage />} />
      <Route path="/es/book-appointment" element={<BookAppointmentPage />} />
      <Route path="/es/services/urgent-care" element={<UrgentCarePage />} />
      <Route path="/es/services/diagnostic-services" element={<DiagnosticServicesPage />} />
      <Route path="/es/services/womens-health" element={<WomensHealthPage />} />
      <Route path="/es/services/pediatric-care" element={<PediatricCarePage />} />
      <Route path="/es/services/family-health" element={<FamilyHealthPage />} />
      <Route path="/es/occupational-health" element={<OccupationalHealthPage />} />
      <Route path="/es/contact" element={<ContactPage />} />
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
