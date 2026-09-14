import { Navigate, Route, Routes } from "react-router";
import { PageShell } from "@/components/layout/PageShell";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { DetailsPage } from "@/pages/DetailsPage";
import { HomePage } from "@/pages/HomePage";
import { VehiclesPage } from "@/pages/VehiclesPage";

export default function App() {
  return (
    <Routes>
      <Route element={<PageShell />}>
        <Route index element={<HomePage />} />
        <Route path="vehicles" element={<VehiclesPage />} />
        <Route path="details" element={<DetailsPage />} />
        <Route path="details/:id" element={<DetailsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
