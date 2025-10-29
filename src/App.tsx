
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import DynamicEventPage from "./pages/events/[slug]";
import SportclubsPage from "./pages/SportclubsPage";
import ScholenPage from "./pages/ScholenPage";
import BedrijvenPage from "./pages/BedrijvenPage";
import NonProfitsPage from "./pages/NonProfitsPage";
import NieuwsPage from "./pages/NieuwsPage";
import NewsArticlePage from "./pages/nieuws/[slug]";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sportclubs" element={<SportclubsPage />} />
            <Route path="/scholen" element={<ScholenPage />} />
            <Route path="/bedrijven" element={<BedrijvenPage />} />
            <Route path="/non-profits" element={<NonProfitsPage />} />
            <Route path="/nieuws" element={<NieuwsPage />} />
            
            {/* Event detail dynamic route */}
            <Route path="/events/:slug" element={<DynamicEventPage />} />
            
            {/* News article dynamic route */}
            <Route path="/nieuws/:slug" element={<NewsArticlePage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
