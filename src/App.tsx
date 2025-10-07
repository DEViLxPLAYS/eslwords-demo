import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import TestPrep from "./pages/TestPrep";
import UK from "./pages/UK";
import China from "./pages/China";
import Kyrgyzstan from "./pages/Kyrgyzstan";
import IELTS from "./pages/IELTS";
import PTE from "./pages/PTE";
import ChineseLanguage from "./pages/ChineseLanguage";
import SuccessStories from "./pages/SuccessStories";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/test-prep" element={<TestPrep />} />
          <Route path="/uk" element={<UK />} />
          <Route path="/china" element={<China />} />
          <Route path="/kyrgyzstan" element={<Kyrgyzstan />} />
          <Route path="/ielts" element={<IELTS />} />
          <Route path="/pte" element={<PTE />} />
          <Route path="/chinese-language" element={<ChineseLanguage />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
