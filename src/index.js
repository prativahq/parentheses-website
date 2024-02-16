import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/Index.js";
import BlogsPage from "./pages/Blogs.js";
import ServicesPage from "./pages/Services.js";
import AiSolutionsDraftPage from "./pages/Ai_solutions_draft.js";
import RefundAndCancellationPage from "./pages/Refund_and_cancellation.js";
import PrivacyPolicyPage from "./pages/Privacy_policy.js";
import TermsAndConditionsPage from "./pages/Terms_and_conditions.js";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BlogPage } from "./pages/BlogPage.js";
import Experts from "./pages/Experts.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<IndexPage />} />

      <Route path="/blogs" element={<BlogsPage />} />

      <Route path="/services" element={<ServicesPage />} />

      <Route path="/aisolutionsdraft" element={<AiSolutionsDraftPage />} />

      <Route
        path="/refundandcancellation"
        element={<RefundAndCancellationPage />}
      />

      <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />

      <Route path="/experts" element={<Experts />} />

      <Route path="/termsandconditions" element={<TermsAndConditionsPage />} />
      <Route path="/blog/:id" element={<BlogPage />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
